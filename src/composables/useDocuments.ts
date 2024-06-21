import type { NavItem } from '@nuxt/content/types';
import { useNavigation } from './useNavigation';
import { isDir } from '@/utils/isDir';
import { formatTags } from '@/utils/formatTags';

export type NavItemType = ItemType &
  NavItem & {
    tags?: string[];
    tagEntities?: NavItemType[];
    categories?: string[] | string;
    children?: NavItemType[] | string;
    $count?: number;
    description?: string;
    date?: string;
    icon?: string;
    title?: string;
    author?: string;
  };
export const useDocuments = async ({ path }: { path?: string }) => {
  const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation()
  );

  // const route = useRoute();
  const list = ref<NavItemType[]>([]);

  const {
    items: treeItems,
    toggleOpen,
    activeItem,
    setActive,
    list: treeList,
  } = useTrees({
    items: navigation.value,
    // open: (x) => (route.path + '/').startsWith(x._path + '/'),
    action: (x) => {
      x.tags = formatTags(x.tags);
      x.categories = formatTags(x.categories);
    },
    // active: (item, depth, index, parents) => item._path === route.path,
    // sort: (a, b, depth) => {
    //   if (depth > 1) {
    //     return 0; // a和b位置不变
    //   }
    //   if (a.$isDir && !b.$isDir) {
    //     return -1; // a应该在b前面
    //   } else if (!a.$isDir && b.$isDir) {
    //     return 1; // b应该在a前面
    //   } else {
    //     return 0; // a和b位置不变
    //   }
    // },
  });

  // .filter((x) => !x.$isDir && x._path.startsWith('/tags/'))
  // .map((x) => {});

  const getCount = (tag: string | undefined) => {
    if (!tag) {
      return 0;
    }
    return treeList.value.filter((x) =>
      (x.tags as string[]).some(
        (x) => x?.toLocaleLowerCase() == tag.toLocaleLowerCase()
      )
    ).length;
  };
  // const getTagCode = (path: string): string | undefined => {
  //   const trimmedPath = path.endsWith('/') ? path.slice(0, -1) : path; // 去掉末尾的斜杠（如果有的话）
  //   const parts = trimmedPath.split('/');
  //   const lastPart = parts[parts.length - 1];
  //   return lastPart;
  // };

  const formatItems = (items?: NavItemType[] | null): NavItemType[] => {
    if (!items) return [];

    return items.map((x, i) => {
      if (!x.$isDir && x._path.startsWith('/tags/')) {
        const tagCode = getTagCode(x._path);
        x.$count = getCount(tagCode);
      }

      list.value.push(x);

      if (x.children) {
        x.children = formatItems(x.children);
      }
      return x;
    });
  };

  const tagDict = computed(() => {
    return list.value
      .filter((x) => !x.$isDir && x._path.startsWith('/tags/'))
      .reduce((dict, nav) => {
        const tagName = getTagCode(nav._path);
        if (tagName) {
          dict[tagName] = nav;
        }
        return dict;
      }, {} as { [key: string]: NavItemType });
  });
  /**
   * document
   */
  const doc = computed(() => {
    return list.value.find((x) => x._path == path);
  });

  /**
   * tag items
   */
  const tagItems = computed(() => {
    return doc.value?.tags?.map((x) => tagDict.value[x]).filter((x) => x);
  });

  const items = ref<NavItemType[]>();
  const init = () => {
    // if (!items.value) {
    items.value = formatItems(treeItems.value);
    list.value = list.value.map((x) => {
      if (!x.$isDir) {
        x.tagEntities = x.tags?.map((x) => tagDict.value[x]).filter((x) => x);
      }
      return x;
    });

    // }
  };
  init();
  return {
    list,
    items,
    tagDict,
    toggleOpen,
    activeItem,
    setActive,
    doc,
    tagItems,
  };
};
