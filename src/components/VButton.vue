<template>
    <div :style="cssProps" :class="{ 'disabled': disabled }" :disabled="disabled" @click.stop="buttonClick();">
        <slot>
            Button
        </slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useAppStore } from "@/stores/app";

const AppStore = useAppStore();

export interface Props {
    disabled?: boolean
    btnColor?: string
    textColor?: string
}

const emit = defineEmits({
    click: (disabled: boolean) => {
        if (!disabled) {
            return true;
        }

        console.warn('Event disabled');
        return false;
    }
});

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    btnColor: "red",
    textColor: "white"
})

const cssProps = computed(() => {
    return {
        '--color': props.btnColor,
        '--text-color': props.textColor
    };
});

function buttonClick() {
    if (!props.disabled) {
        emit('click', props.disabled);
    }
}

onMounted(() => {
    // console.log('btnColor=', props.btnColor);
});

</script>

<style scoped>

div {
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

div:hover {
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

div:active {
    opacity: 0.9;
    cursor: pointer;
    transform: translate(5px, 5px);
}
</style>