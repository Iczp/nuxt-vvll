import { isDir } from '@/utils/isDir';

export type ItemType = {
  // id: number;
  $isOpen?: boolean;
  $isActive?: boolean;
  $isDir?: boolean;
  children?: ItemType[];
  $parents?: () => ItemType[];

  $totalFileCount?: number;
  $totalDirCount?: number;
  $fileCount?: number;
  $dirCount?: number;
};
export type CallbackFn = (
  item: any,
  depth: number,
  index: number,
  parents: any[]
) => boolean;
export const useTrees = ({
  items,
  open = (item, depth, index, parents) => true,
  active = (item, depth, index, parents) => false,
  sort,
  action,
}: {
  items?: any[] | null;
  open?: (item: any, depth: number, index: number, parents: any[]) => boolean;
  active?: (item: any, depth: number, index: number, parents: any[]) => boolean;
  action?: (item: any, depth: number, index: number, parents: any[]) => void;
  sort?: (a: any, b: any, depth: number) => number;
}) => {
  let row = 0;

  const statItem = (item: ItemType | undefined | null) => {
    if (!item) return;
    item.$isDir = isDir(item);
    if (!item.$isDir) {
      return;
    }
    item.$fileCount = item.children?.filter((x: any) => !isDir(x)).length;
    const folders = item.children?.filter((x: any) => isDir(x));
    item.$dirCount = folders?.length;
    folders?.forEach((x: any) => statItem(x));
  };

  const statTotal = (item: ItemType) => {
    if (item.$isDir) {
      item.$totalFileCount = item.$fileCount || 0;
      item.$totalDirCount = item.$dirCount || 0;
      item.children?.filter(isDir).forEach((x: any) => {
        const subFolder = statTotal(x);
        item.$totalFileCount =
          (item.$totalFileCount || 0) + (subFolder.$totalFileCount || 0);
        item.$totalDirCount =
          (item.$totalDirCount || 0) + (subFolder.$totalDirCount || 0);
      });
    }
    return item;
  };

  const activeItem = ref<ItemType>();

  const formatItems = (
    items?: any[] | null,
    depth: number = 0,
    parents: any[] = []
  ): ItemType[] => {
    if (!items) return [];

    const arr = items.map((x, i) => {
      row++;
      action && action(x, depth, i, parents);
      let children: ItemType[] | undefined;

      const $parents = () => [x, ...parents];

      if (x.children) {
        children = formatItems(x.children, depth + 1, $parents());
        x.$total = children.reduce(
          (acc, item) => acc + Number(item.$totalFileCount),
          x.$total
        );
      }
      const $isActive = active(x, depth, i, $parents());
      if ($isActive) {
        activeItem.value = x;

        console.log('activeItem', activeItem.value);
      }
      return {
        ...x,
        $row: row,
        $isOpen: open(x, depth, i, $parents()),
        $isActive,
        children,
        $parents,
      };
    });
    if (sort) {
      arr.sort((a, b) => sort(a, b, depth));
    }
    return arr;
  };
  const arr = Array.isArray(items) ? Array.from(items) : [];
  arr.forEach((x) => {
    statItem(x);
    statTotal(x);
  });

  const refItems = ref(formatItems(arr));

  const setParents = (item: ItemType | undefined, isActive: boolean) => {
    if (!item) return;
    item.$isActive = isActive;

    const parents = item?.$parents;
    if (parents) {
      parents().map((x) => {
        x.$isActive = isActive;
        // console.log('x:', x, isActive);
      });
    } else {
      console.warn('parents', parents);
    }
  };

  const setActive = (item?: ItemType) => {
    // console.log('setActive', activeItem.value);
    if (activeItem.value) {
      setParents(activeItem.value, false);
    }
    setParents(item, true);
    activeItem.value = item;
  };

  //   console.log(items);
  const toggleOpen = (item: ItemType) => {
    // console.log(item);
    item.$isOpen = !item.$isOpen;
  };

  return { formatItems, toggleOpen, items: refItems, activeItem, setActive };
};
