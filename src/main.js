const { createApp, ref } = Vue;
//const { createPinia } = Pinia;

// import { createPinia } from "pinia";
import MyComponent from './App.js'


const StylePlugin = {
    install(Vue, options) {
        Vue.mixin({
            mounted() {
                const css = this.$options.style;
                if (!css) return;
                this.$styleTag = document.createElement('style');
                this.$styleTag.appendChild(document.createTextNode(css));
                document.head.appendChild(this.$styleTag);
            },
            destroyed() {
                if (this.$styleTag) {
                    this.$styleTag.remove();
                }
            }
        });
    }
};

createApp(MyComponent).use(StylePlugin).
use(Pinia.createPinia()).
mount('#app')
