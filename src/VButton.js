// import { mapActions } from 'pinia'
// import { useAppStore } from '/src/stores/html.js'

export default {
    setup() {
        // const AppStore = useAppStore();

        // return { AppStore }
    },
    data() {
        return {
            count: 0
        }
    },
    props: {
        btnColor: {
            type: String,

            default: "red"
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        textColor: {
            type: String,
            default: "white"
        },
    },
    emits: {
        click: (disabled) => {
            if (!disabled) {
                return true;
            }

            console.warn('Event disabled');
            return false;
        }
    },
    computed: {
        cssProps() {
            return {
                '--color': this.btnColor,
                '--text-color': this.textColor
            };
        }
    },
    methods: {
        // ...mapActions(useAppStore, []),
        buttonClick() {
            if (!this.disabled) {
                this.$emit('click', this.disabled);
            }
        }
    },
    template: `<div :style="cssProps" class="button" :class="{ 'disabled': this.disabled }" :disabled="this.disabled" @click.stop="buttonClick();">
    <slot>
        Button
    </slot>
    </div>`,
    style: `
    
div.button {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 0.5rem;
    background-color: var(--color);
    color: var(--text-color);
    transition-duration: 0.4s;
    box-sizing: border-box;
    user-select: none;
    border-style: solid;
    border-color: transparent;
    border-width: 2px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

div.button:hover {
    opacity: 0.9;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: white;
    color: black;
    border: 2px solid var(--color);
}

.disabled {
    opacity: 0.9;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
}

.disabled::after {
    content: " ";
    background-color: gray;
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 4px 8px;
    border-radius: 0.5rem;
    opacity: 75%;
    margin-left: -2px;
    margin-top: -2px;
}

div.button:active {
    opacity: 0.9;
    cursor: pointer;
    transform: translate(5px, 5px);
}
    `
}
