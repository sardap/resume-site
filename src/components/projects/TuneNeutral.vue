<script setup lang="ts">
import { type CompleteRepo } from '@/backend'
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import { type PropType } from 'vue'
import ProjectInfo from '../ProjectInfo.vue'

const title = 'Tune Neutral'
const techs = [
  Technologies.Docker,
  Technologies.Rest,
  Technologies.RestGin,
  Technologies.SpotifyWebApi,
  Technologies.BadgerDB
]

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
      Tune Neutral is a web app that will create a mood playlist based on your liked music to get
      you back into the middle. Feeling too happy it will create a playlist featuring sad music.
      This is done using the Spotify Web API track feature endpoint.
      <a :href="`https://tune.sarda.dev/`">Check it out here</a>
    </p>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
