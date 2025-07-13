<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type CompleteRepo } from '@/backend'
import { ref } from 'vue'

const title = 'Sardips web'
const techs = [Technologies.ECS, Technologies.Bevy, Technologies.WASM]
const load = ref(false)

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
      It's a half finished virtual pet game. The readme covers everything in a fair amount of detail
      <a target="_blank" href="https://github.com/sardap/sardips">here</a>. It doesn't work well in
      wasm you can download
      <a target="_blank" href="https://github.com/sardap/sardips/releases">here</a>
    </p>
    <br />
    <div v-if="load">
      <div class="game">
        <iframe src="/sardips/index.html" allow="autoplay"></iframe>
      </div>
    </div>
    <div v-else>
      <button @click="load = true" class="play-button">Play</button>
    </div>

    <br />
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';

@media (max-width: 600px) {
  .game {
    scale: 0.8;
  }
}

@media (max-width: 400px) {
  .game {
    scale: 0.7;
  }
}

.game iframe {
  width: 505px;
  height: 705px;
}
</style>
