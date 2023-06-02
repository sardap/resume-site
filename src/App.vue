<script setup lang="ts">
import { RouterView } from 'vue-router'
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeFooter from './components/ResumeFooter.vue';

document.title = "PAUL SARDA";

</script>

<template>
  <ResumeHeader />
  <hr />
  <RouterView />
  <hr />
  <ResumeFooter />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
