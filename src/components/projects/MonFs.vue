<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'

const title = 'Mon-FS'
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
      This is an encoding and decoding system that will encode any file up to 3.5KB without
      compression into pokemon that can be stored in the PC of Pokemon Emerald; The encoding site
      can be found
      <a target="_blank" href="https://sardap.github.io/mon-fs/">here</a>.
    </p>
    <br />
    <p>Attached screenshots show the encoding site and the same data on the game on the GBA</p>
    <img width="600" src="/photos/mon-fs/easy_web.png" alt="Encoding site" />
    <br />
    <img width="600" src="/photos/mon-fs/real_data.png" alt="Real data being encoded" />
    <p>
      <a href="https://github.com/sardap/mon-fs" target="_blank"
        >More info can be found in the readme of the repo</a
      >
    </p>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
