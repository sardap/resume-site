import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export enum Mode {
  Normal = 'normal',
  Dog = 'dog'
}

export const useModeStore = defineStore('mode', () => {
  const mode = ref(Mode.Normal);
  const backgroundMusic = ref<HTMLAudioElement | null>(null);

  function changeMode(newModeStr: string) {
    let newMode = Mode.Normal;
    // update mode value
    switch (newModeStr) {
      default:
        newMode = Mode.Normal;
        break;
      case Mode.Dog:
        newMode = Mode.Dog;
        break;
    }

    if (newMode === mode.value) {
      return;
    }

    // Disable old mode
    switch (mode.value) {
      case Mode.Normal:
        break;
      case Mode.Dog:
        disableDogMode();
        break;
    }

    mode.value = newMode;

    // call new mode function
    switch (newModeStr) {
      case Mode.Normal:
        break;
      case Mode.Dog:
        enableDogMode();
        break;
    }
  }

  function enableDogMode() {
    backgroundMusic.value = new Audio('/audio/dogMode.ogg');
    backgroundMusic.value.volume = 0.25;
    backgroundMusic.value.play();
    backgroundMusic.value.loop = true;
  }

  function disableDogMode() {
    if (backgroundMusic.value) {
      backgroundMusic.value.pause();
    }
  }

  return { mode, changeMode }
});
