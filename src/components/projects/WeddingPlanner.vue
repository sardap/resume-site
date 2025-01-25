<script setup lang="ts">
import { type CompleteRepo } from '@/backend'
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'

const title = 'Wedding Planner'
const techs = [Technologies.WASM]

defineProps<{
  complete?: CompleteRepo
  filter: ProjectFilter
}>()
</script>

<template>
  <ProjectInfo :filter="filter" :good="true" :languages="complete?.langs" :technologies="techs">
    <RepoInfo :complete="complete" :title="title" :techs="techs" />
    <h3>What is it?</h3>
    <p>
      I made this game for my wedding website. Due to the deadline of the wedding it was made over
      the course of like 3 days. Im very happy with how it turned out.
    </p>
    <br />
    <iframe src="/wedding_planner/main.html"></iframe>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';

iframe {
  max-width: 310px;
  height: 610px;
  max-width: 100%;
  border: 4px solid var(--divider-border);
}
</style>
