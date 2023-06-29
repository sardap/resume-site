<script setup lang="ts">
import { RouterView } from 'vue-router';
import ResumeHeader from './components/ResumeHeader.vue';
import ResumeFooter from './components/ResumeFooter.vue';
import { useModeStore, Mode as ModeEnum } from '@/stores/mode';
import Mode from './components/modes/Mode.vue';

const modeStore = useModeStore();

function getClass() {
  switch (modeStore.mode) {
    case ModeEnum.Normal:
      return '';
    case ModeEnum.Dog:
      return 'dog-mode';
  }
}

</script>

<template>
  <div :class="getClass()">
    <ResumeHeader />
    <hr />
    <RouterView v-if="modeStore.mode === ModeEnum.Normal" />
    <Mode v-else />
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
</style>
@/stores/mode