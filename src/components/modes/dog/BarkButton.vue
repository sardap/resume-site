<script setup lang="ts">
import { ref } from 'vue';


const barks = ref(0);
const barking = ref(false);

function bark() {
    barking.value = true;
    var audio = new Audio('/audio/bark.ogg');
    audio.play();
    audio.addEventListener("ended", function () {
        barking.value = false;
        barks.value++;
    });
}

function getRandomRotation() {
    const rotations = ['0', '90deg', '180deg', '270deg'];
    const result = rotations[Math.floor(Math.random() * rotations.length)];
    return result;
}

</script>

<template>
    <div>
        <button @click="bark" :disabled="barking">🐕 BARK 🐕</button>
        <p v-if="barks > 0">Stop barking you have barked {{ barks }} times</p>
        <p v-else>Try 🐕barking🐕?</p>
        <div>
            <img v-if="barking" :style="`transform: rotate(${getRandomRotation()})`" src="/photos/dogLaughing.png" />
            <img v-else src="/photos/dogNotLaughing.png" />
        </div>
    </div>
</template>


<style scoped>
img {
    width: 200px;
    max-height: 150px;
}

.up {
    transform: rotate(0);
}

.left {
    transform: rotate(90deg);
}

.right {
    transform: rotate(90deg);
}

.down {
    transform: rotate(90deg);
}
</style>