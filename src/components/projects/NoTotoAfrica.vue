<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'No Toto Africa'
const techs = [Technologies.SpotifyWebApi]

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
      Toto Africa is a bad overplayed song. This is a simple script that removes it from all your
      spotify playlists.
    </p>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
