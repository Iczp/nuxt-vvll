import { defineStore } from 'pinia';
import type { NavItemType } from '~/types/NavItemType';

type CurrentLocation = {
  location: NavItemType[];
  isOpen?: Boolean;
};

export const useSite = defineStore('site', {
  state: (): CurrentLocation => {
    return {
      location: [],
      isOpen: false,
    };
  },

  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setPaths(paths: NavItemType[]) {
      this.location = paths;
    },
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },
    toggle() {
      this.isOpen = !this.isOpen;
      return this.isOpen;
    },
  },
});
