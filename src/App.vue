<script setup lang="ts">
import { RouterView } from 'vue-router';
import ResumeHeader from './components/ResumeHeader.vue';
import ResumeFooter from './components/ResumeFooter.vue';
import { useDogModeStore } from '@/stores/dog_mode';
import DogMode from './components/DogMode.vue'

const dogModeStore = useDogModeStore();

</script>

<template>
  <div :class="dogModeStore.dogMode ? `dog-mode` : ``">
    <ResumeHeader />
    <hr />
    <DogMode v-if="dogModeStore.dogMode" />
    <RouterView v-else />
    <hr />
    <ResumeFooter />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.dog-mode {
  background-image: url("/photos/dogModeBackground.png");
  background-size: 100px;
  color: red;
}

/* .dog-mode p {
  color: magenta;
} */
</style>
