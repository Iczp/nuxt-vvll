import { isDir } from '@/utils/isDir';
import type { ItemType } from '../types/ItemType';

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

  const activeItem = ref<ItemType>();

  const currentLocation = useCurrentLocation();

  const refItems = ref<ItemType[]>();
  const list = ref<ItemType[]>([]);

  /**
   * 文件数量统计
   * @param item
   * @returns
   */
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
  /**
   *
   * @param item 文件总数统计
   * @returns
   */
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

  /**
   * formatItems
   * @param items
   * @param depth
   * @param parents
   * @returns
   */
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
      }

      const $isActive = active(x, depth, i, $parents());

      const item = {
        ...x,
        $index: i,
        $depth: depth,
        $row: row,
        $isOpen: open(x, depth, i, $parents()),
        $isActive,
        children,
        $parents,
      };

      if ($isActive) {
        activeItem.value = item;
        currentLocation.setPaths(
          activeItem.value?.$parents ? activeItem.value?.$parents() : []
        );
        // console.log('activeItem', activeItem.value);
      }
      list.value.push(item);
      return item;
    });
    if (sort) {
      arr.sort((a, b) => sort(a, b, depth));
    }
    return arr;
  };

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
    // console.log('setActive', JSON.stringify(activeItem.value));
    if (activeItem.value) {
      setParents(activeItem.value, false);
    }
    setParents(item, true);
    activeItem.value = item;
    currentLocation.setPaths(
      activeItem.value?.$parents ? activeItem.value?.$parents() : []
    );
  };

  const toggleOpen = (item: ItemType) => {
    // console.log(item);
    item.$isOpen = !item.$isOpen;
  };

  /**
   * 初始化
   */
  const init = () => {
    // if (refItems.value) {
    //   return;
    // }
    const arr = Array.isArray(items) ? Array.from(items) : [];
    arr.forEach((x) => {
      statItem(x);
      statTotal(x);
    });
    refItems.value = formatItems(arr);
  };

  init();

  return {
    formatItems,
    toggleOpen,
    items: refItems,
    activeItem,
    setActive,
    list,
  };
};
