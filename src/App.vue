<script setup lang="ts">
import { RouterView } from 'vue-router'
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeFooter from './components/ResumeFooter.vue'
</script>

<template>
  <div>
    <ResumeHeader />
    <hr />
    <RouterView />
    <hr />
    <ResumeFooter />
  </div>
</template>

<style scoped></style>
@/stores/mode
