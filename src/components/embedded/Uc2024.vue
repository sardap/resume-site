<script setup lang="ts">
import { ref } from 'vue'

const load = ref(false)
</script>

<template>
  <div>
    <div v-if="load">
      <br />
      <iframe src="/uc2024/main.html" width="500" height="650" allow="autoplay"></iframe>
      <p>NOTE: You can only use keyboard!</p>
    </div>
    <div v-else>
      <button @click="load = true" class="play-button">Play</button>
    </div>
  </div>
</template>

<style scoped></style>
