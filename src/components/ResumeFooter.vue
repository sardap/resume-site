<script setup lang="ts">
import { useModeStore } from '@/stores/mode'
import { ref, onMounted } from 'vue'

const modeStore = useModeStore()

const modeInput = ref('')

function changeMode() {
  modeStore.changeMode(modeInput.value)
}

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search)

  if (urlParams.has('mode')) {
    modeInput.value = urlParams.get('mode')!
    changeMode()
  }
})
</script>

<template>
  <footer>
    <div>
      <p>Enter Mode</p>
      <input type="text" v-model="modeInput" /><br />
      <button @click="changeMode">Submit</button>
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
@/stores/mode
