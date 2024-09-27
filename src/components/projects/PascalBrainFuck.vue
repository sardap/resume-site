<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import type { CompleteRepo } from '@/backend'

const title = 'Pascal Brain Fuck'
const techs = [Technologies.CurseWords]

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
      Can interpret brainfuck code into Pascal or C which is then compiled by FPC or gcc. Please
      keep in mind the date when looking at this code. Below is some brainfuck code which prints
      "g'day".
    </p>
    <div class="code-block">
      <p class="code-text">
        ++++++++++[&gt;++++++++++&lt;-] Gets cell 1 to 100<br />
        &gt;+++. adds 3 to cell 1 then prints cell 1 (g)<br />
        &lt;++++++[&gt;&gt;++++++&lt;&lt;-]&gt;&gt;+++. makes cell 2 &#39; then prints<br />
        &lt;---. minus 3 from cell 1 prints (d)<br />
        ---. minus 3 from cell 1 prints (a)<br />
        &lt;+++++[&gt;+++++&lt;-]&gt;-. adds 24 to cell 1 then prints(y)<br />
      </p>
    </div>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
