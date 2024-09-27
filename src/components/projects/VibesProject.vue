<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'Vibes'
const techs = [
  Technologies.OpenWeatherApi,
  Technologies.DiscordAPI,
  Technologies.React,
  Technologies.Rest,
  Technologies.Docker
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
      A nice little site which can play different tracks for each hour of the day. Along with
      weather modifiers such as Raining + 1700. The background also changes with the time of day and
      cloud state. Now for legal reasons I can't allude to which music it should play. In a
      unrelated not I love how animal crossing has music for each hour.
    </p>
    <img
      src="https://github.com/sardap/vibes/blob/master/examples/clear_skys.png?raw=true"
      id="vibe-img"
    />
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';

img {
  width: 80%;
  margin: 0 auto;
  display: block;
}
</style>
