import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDogModeStore = defineStore('dogMode', () => {
  const dogMode = ref(false);
  const backgroundMusic = ref<HTMLAudioElement | null>(null);

  function enableDogMode() {
    dogMode.value = true;
    backgroundMusic.value = new Audio('/audio/dogMode.mp3');
    backgroundMusic.value.volume = 0.25;
    backgroundMusic.value.play();
  }

  function disableDogMode() {
    dogMode.value = false;
    if (backgroundMusic.value) {
      backgroundMusic.value.pause();
    }
  }

  return { dogMode, enableDogMode, disableDogMode }
});
