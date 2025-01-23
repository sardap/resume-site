<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'All-Battle'
const techs = [Technologies.RDB]

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
      A complete ranking of all the trainers in pokemon emerald a site that summaries the stats can
      be found here <a target="_blank" href="https://allbattle.sarda.dev/">here</a>.
    </p>
    <p>
      Over 700k battles were ran between the trainers with the total length of the video files
      generated being over 1000 days.
    </p>
    <br />
    <p>Each battle between all trainers were record and can be viewed on the site.</p>
    <video width="500" controls>
      <source src="/videos/all_battle.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
