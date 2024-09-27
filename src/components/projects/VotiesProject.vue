<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'
import Voties from '../embedded/Voties.vue'

const title = 'Voties'
const techs = [Technologies.ECS]

defineProps<{
  complete?: CompleteRepo
  filter: ProjectFilter
}>()
</script>

<template>
  <ProjectInfo :filter="filter" :good="false" :languages="complete?.langs" :technologies="techs">
    <RepoInfo :complete="complete" :title="title" :techs="techs" />
    <h3>What is it?</h3>
    <p>A bizarre city builder I guess?</p>
    <Voties />
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
