<script setup lang="ts">
import { getCommits } from '@/backend'
import { onMounted, ref, type PropType } from 'vue'

const props = defineProps({
  repo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  languages: {
    type: Array as PropType<string[]>,
    required: true
  },
  contribution: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pull_request: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const commits = ref<number | null>(null)

onMounted(async () => {
  commits.value = await getCommits(props.repo)
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <table>
      <tr>
        <th>commits</th>
        <th>Languages</th>
      </tr>
      <tr>
        <th v-if="commits">{{ commits }}</th>
        <th v-else>Loading..</th>
        <th>{{ languages.join(',') }}</th>
      </tr>
    </table>
    <h3>Pull Request{{ pull_request.length > 1 ? `s` : `` }}</h3>
    <div>
      <p v-for="i in pull_request">
        <a :href="i">- {{ i }}</a>
      </p>
    </div>
    <h3>What I did</h3>
    <p>{{ contribution }}</p>
    <h3>What the project is</h3>
    <p>{{ description }}</p>
    <slot></slot>
  </div>
  <hr />
</template>

<style>
table {
  table-layout: fixed;
  text-align: center;
  min-width: 300px;
  width: 50%;
  display: inline-table;
}
</style>
