<script setup lang="ts">
import { type CompleteRepo } from '@/backend'
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { ref } from 'vue'

const title = 'Wedding Planner'
const techs = [Technologies.WASM]

const playing = ref(false)

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
      I made this game for my wedding website. Due to the deadline of the wedding it was made over
      the course of like 3 days. Im very happy with how it turned out.
    </p>
    <br />
    <button v-if="!playing" @click="playing = true" class="play-button">Play!</button>
    <div v-else class="game">
      <p class="warning">Game may take quite a while to load</p>
      <iframe src="/wedding_planner/main.html"></iframe>
    </div>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';

.warning {
  color: #a79408;
  font-size: large;
}

iframe {
  max-width: 310px;
  height: 600px;
  max-width: 100%;
  border: 4px solid var(--divider-border);
}
</style>
