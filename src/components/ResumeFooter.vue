<script setup lang="ts">
import { useDogModeStore } from '@/stores/dog_mode';
import { ref } from 'vue';

const dogModeStore = useDogModeStore();

const modeInput = ref("");


function checkMode() {
    console.log(`UPDATED TEXT ${modeInput.value}`)
    if (modeInput.value.toLowerCase() === "dog") {
        dogModeStore.enableDogMode();
    } else {
        dogModeStore.disableDogMode();
    }
}

</script>

<template>
    <footer>
        <div>
            <p>Enter Mode</p>
            <input type="text" v-model="modeInput" /><br />
            <button @click="checkMode">Submit</button>
            <p><a href="mailto:paul@sarda.dev">paul@sarda.dev</a></p>
            <p><a href="https://github.com/sardap">www.github.com/sardap</a></p>
        </div>
    </footer>
</template>


<style scoped>
div {
    margin-top: 30px;
    margin-bottom: 30px;
}

p {
    margin-top: 5px;
}
</style>