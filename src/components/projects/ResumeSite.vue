<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'Resume Site'
const techs = [Technologies.GithubAPI, Technologies.Rest]

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
      You are looking at it. The goal was to create a early 2000s site using modern javascript
      frameworks.
    </p>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
