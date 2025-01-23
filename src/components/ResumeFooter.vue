<script setup lang="ts">
import { useModeStore } from '@/stores/mode'
import { ref, onMounted } from 'vue'

const modeStore = useModeStore()

const modeInput = ref('')

function changeMode() {
  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('mode')) {
      searchParams.delete('mode')
    }
    if (modeInput.value) {
      searchParams.set('mode', modeInput.value)
    }
    window.location.search = searchParams.toString()
  }
}

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('mode')) {
    modeInput.value = urlParams.get('mode')!
    modeStore.changeMode(modeInput.value)
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
