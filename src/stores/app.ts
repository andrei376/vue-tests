import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    currentColor: useStorage('currentColor', 0),
    colors: useStorage('colors', {
      0: { 'bg': 'red', 'text': 'white'},
      1: { 'bg': 'blue', 'text': 'white'},
      2: { 'bg': 'yellow', 'text': 'black'},
      3: { 'bg': 'cyan', 'text': 'black'},
      4: { 'bg': 'purple', 'text': 'white'}
    }),
  }),
  getters: {
    getCurrentColor: (state) => {
      return state.currentColor;
    },
    getColor: (state) => {
      return (index) => state.colors[index].bg;
    },
    getFontColor: (state) => {
      return (index) => state.colors[index].text;
    },
    getColors: (state) => {
      return state.colors;
    },
    getColorsLength: (state) => {
      return Object.keys(state.colors).length;
    },
  },
  actions: {
    setCurrentColor (index: number) {
      if (index > (this.getColorsLength-1)) {
        index = 0;
      }
      this.currentColor = index;
    },
  },
});
