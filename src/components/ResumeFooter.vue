<script setup lang="ts">
import { ref } from 'vue';

const dogMode = ref(false);

function toggleDogMode() {
    dogMode.value = !dogMode.value;

    if (dogMode.value) {
    } else {
    }
}

</script>

<template>
    <footer>
        <div>
            <!-- <button @click="toggleDogMode">{{ dogMode ? `Disable` : `Enable` }} Dog mode</button> -->
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