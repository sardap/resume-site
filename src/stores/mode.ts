import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export enum Mode {
  Normal = 'normal',
  Dog = 'dog',
  QuizTime = 'quiz time',
  Dyslexia = 'dyslexia',
  PhraseLearner = 'phrase learner',
  Ship = 'ship',
}

export const useModeStore = defineStore('mode', () => {
  const mode = ref(Mode.Normal);
  const backgroundMusic = ref<HTMLAudioElement | null>(null);

  function changeMode(newModeStr: string) {
    newModeStr = newModeStr.toLowerCase();
    newModeStr = newModeStr.replace('mode', '');
    newModeStr = newModeStr.trim();
    let newMode = Mode.Normal;
    // update mode value
    switch (newModeStr) {
      default:
        newMode = Mode.Normal;
        break;
      case Mode.Dog:
        newMode = Mode.Dog;
        break;
      case Mode.QuizTime:
        newMode = Mode.QuizTime;
        break;
      case Mode.PhraseLearner:
        newMode = Mode.PhraseLearner;
        break;
      case Mode.Ship:
        newMode = Mode.Ship;
        break;
      case Mode.Dyslexia:
      case "disleixa":
      case "dyslexic":
      case "disxleixa":
      case "dislexia":
      case "dsyleixa":
      case "disxliexa":
      case "dislxisic":
      case "disxleisc":
      case "dislescic":
      case "dislexsic":
      case "dislexic":
      case "dislxeic":
      case "disxlesic":
      case "dysxlisc":
      case "dislexixa":
      case "dyslixila":
      case "disyleixc":
      case "dysleixa":
        newMode = Mode.Dyslexia;
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
      case Mode.QuizTime:
        break;
      case Mode.Dyslexia:
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
      case Mode.QuizTime:
        enableQuizTimeMode();
        break;
      case Mode.Dyslexia:
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

  function enableQuizTimeMode() {
    backgroundMusic.value = new Audio('/audio/quiz/quizTime.ogg');
    backgroundMusic.value.volume = 1;
    backgroundMusic.value.play();
  }

  return { mode, changeMode }
});
