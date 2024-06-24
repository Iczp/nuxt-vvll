import { defineStore } from 'pinia';
import type { NavItemType } from '~/types/NavItemType';

type CurrentLocation = {
  paths: NavItemType[];
};

export const useCurrentLocation = defineStore('active', {
  state: (): CurrentLocation => {
    return {
      paths: [],
    };
  },

  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setPaths(paths: NavItemType[]) {
      this.paths = paths;
    },
  },
});
