import type { NavItem } from '@nuxt/content/types';
import { useNavigation } from './useNavigation';
import { isDir } from '@/utils/isDir';
import { formatTags } from '@/utils/formatTags';

export type NavListItem = NavItem & {
  tags: string[];
  categories: string[];
  count?: number;
  $depth: number;
  $index: number;
  $isDir: boolean;
  $parents: () => NavListItem[];
  children?: NavListItem[];
};
export const useNavigationList = async () => {
  const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation()
  );
  // const data = await fetchContentNavigation();

  const list = ref<NavListItem[]>([]);

  const tags = ref<{ [key: string]: number }>({});

  const toList = (
    items: any[],
    depth: number = 0,
    parents: any[] = []
  ): NavListItem[] => {
    return items.map((x, i) => {
      const item = {
        ...x,
        tags: formatTags(x.tags),
        categories: formatTags(x.categories),
        $isDir: isDir(x),
        $depth: depth,
        $index: i,
        $parents: () => parents,
      };
      list.value.push(item);
      if (Array.isArray(item.children) && item.children.length > 0) {
        item.children = toList(item.children, depth + 1, [item, ...parents]);
      }
      return item;
    });
  };

  if (navigation.value) {
    toList(navigation.value);
  }

  const getAllByTags = (tags: string[]): NavListItem[] => {
    return list.value.filter(
      (x) =>
        !x.$isDir &&
        Array.isArray(x.tags) &&
        x.tags.some((d: string) =>
          tags
            // .filter((t) => t)
            .some((tag) => tag?.toLocaleLowerCase() == d?.toLocaleLowerCase())
        )
    );
  };

  const getAllByCatebories = (categories: string[]): NavListItem[] => {
    return list.value.filter(
      (x) =>
        !x.$isDir &&
        Array.isArray(x.categories) &&
        x.categories.some((d: string) =>
          categories.some(
            (category) => category.toLocaleLowerCase() == d.toLocaleLowerCase()
          )
        )
    );
  };

  return { list, getAllByTags, getAllByCatebories };
};
