import type { NavItem } from '@nuxt/content/types';

import type { ItemType } from './ItemType';
import type { FileInfo } from './FileInfo';
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
  } & { fileInfo?: FileInfo };
