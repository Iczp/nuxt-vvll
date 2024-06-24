import type { NavItem } from '@nuxt/content/types';
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
