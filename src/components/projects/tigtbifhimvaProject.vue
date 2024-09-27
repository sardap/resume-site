<script setup lang="ts">
import { type CompleteRepo } from '@/backend'
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'

const title = "Time It's Going To Be In Four Hours In Melbourne Victoria Australia"
const techs = [Technologies.Docker, Technologies.Rest, Technologies.RestWarp]

defineProps<{
  complete?: CompleteRepo
  filter: ProjectFilter
}>()
</script>

<template>
  <ProjectInfo :filter="filter" :good="false" :languages="complete?.langs" :technologies="techs">
    <RepoInfo :complete="complete" :title="title" :techs="techs" />
    <h3>What is it?</h3>
    <p>
      An API which will return the time in Melbourne Victoria Australia in four hours. Written in
      Rust and
      <a :href="`https://tigtbifhimva.sarda.dev/`">Featuring a website explaining the API.</a>
    </p>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
