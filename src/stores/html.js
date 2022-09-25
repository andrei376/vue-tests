
const { defineStore } = Pinia;

const { useStorage } = VueUse;

export const useAppStore = defineStore({
    id: "App",
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
        setCurrentColor (index) {
            if (index > (this.getColorsLength-1)) {
                index = 0;
            }
            this.currentColor = index;
        },
        increment() {
            this.setCurrentColor(this.getCurrentColor + 1);
        }
    },
});
