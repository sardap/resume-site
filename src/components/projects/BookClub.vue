<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'Book club (Website hosted on a 3DS)'
const techs = [Technologies.Three3DS]

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
      I forked an existing 3ds web server made some light changes and created a book review site see
      it
      <a target="_blank" href="https://bookclub.sarda.dev">here</a>. A more in depth technical
      explanation can be found on the site.
    </p>
    <br />
    <p>
      It's not very technically impressive since it's a fork and a mod however I like it so much I
      need to tell the world.
    </p>
    <img width="300" src="/photos/3ds_web_site.png" alt="Encoding site" />
    <br />
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
