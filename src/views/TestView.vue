<template>
    <div>
        <div class="example">
            <v-button></v-button>
        </div>

        <div class="example">
            <v-button>Custom button text</v-button>
        </div>

        <div class="example">
            <v-button
                btn-color="blue"
                @click="btnClicked('in parent, event click')"
            ><p>click event</p></v-button>
        </div>

        <div class="example">
            <v-button
                :disabled="isBtnDisabled"
                @click="btnClicked('in parent, event click')"
            >
                disabled: {{ isBtnDisabled }}
            </v-button>

            <input id="checkbox" v-model="isBtnDisabled" style="margin-left: 2rem;" type="checkbox"  />
            <label for="checkbox">{{ isBtnDisabled }}</label>
        </div>

        <div class="example">
            <div>Colors from Pinia</div>
            <br class="clearfix">

            <div class="colors">
                <div v-for="(item, index) in colors" :key="index" :style="{'background-color': item.bg, 'color': item.text}">
                    {{ index }}
                    <br class="clearfix">
                    {{ item.bg }}
                </div>
            </div>

            <br class="clearfix">

            <div>
                <button @click="AppStore.setCurrentColor(AppStore.getCurrentColor + 1)">
                    Current color {{ AppStore.currentColor }}
                </button>
            </div>
        </div>

        <div class="example">
            <v-button
                :disabled="isBtnDisabled2"
                :btn-color="AppStore.getColor(AppStore.currentColor)"
                :text-color="AppStore.getFontColor(AppStore.currentColor)"
                @click="AppStore.setCurrentColor(AppStore.getCurrentColor + 1)"
            >
                Pinia color
            </v-button>

            <input id="checkbox2" v-model="isBtnDisabled2" style="margin-left: 2rem;" type="checkbox"  />
            <label for="checkbox2">{{ isBtnDisabled2 }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VButton from "@/components/VButton.vue";
import {useAppStore} from "@/stores/app";

function btnClicked(msg: string) {
    console.log('button was clicked ' + msg);
}

const isBtnDisabled = ref(true);
const isBtnDisabled2 = ref(false);

const AppStore = useAppStore();

const colors = AppStore.getColors;


</script>

<style scoped>

.colors :first-of-type {
    margin-left: 0;
}

.colors * {
    padding: 10px;
    margin-left: 20px;
    display: inline-block;
}

</style>