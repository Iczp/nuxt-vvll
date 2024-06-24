import type { NavItem } from '@nuxt/content/types';
export type ItemType = NavItem & {
  // id: number;
  $isOpen?: boolean;
  $isActive?: boolean;
  $isDir?: boolean;
  $index: number;
  $depth: number;
  children?: ItemType[];
  $parents?: () => ItemType[];

  $totalFileCount?: number;
  $totalDirCount?: number;
  $fileCount?: number;
  $dirCount?: number;
};
