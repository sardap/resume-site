<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'Final year uni Project'
const techs = [Technologies.Flask, Technologies.Docker, Technologies.Rest]

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
      This is the final year <b>group project</b> at uni. The objective was to create an
      architecture, then implement part of the created architecture. The goal was to allow people to
      sell their personal biometric data to researchers with as few middle men as possible.
    </p>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
