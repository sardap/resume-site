<script setup lang="ts">
import ProjectContribution from '@/components/ProjectContribution.vue'

const contributions = [
  {
    title: 'Pokebot Gen3',
    repo: 'pokebot-gen3 ',
    languages: ['Python'],
    pull_requests: [
      'https://github.com/40Cakes/pokebot-gen3/pull/404',
      'https://github.com/40Cakes/pokebot-gen3/pull/405',
      'https://github.com/40Cakes/pokebot-gen3/pull/410'
    ],
    contribution: 'Added functionally I needed for mon-fs',
    description: 'A bot for playing gen3 pokemon games.'
  },
  {
    title: 'Bevy Common Assets',
    repo: 'bevy_common_assets ',
    languages: ['Rust'],
    pull_requests: ['https://github.com/NiklasEi/bevy_common_assets/pull/26'],
    contribution: 'I added with_delimiter function to csvAssetLoader',
    description: "A nice utility that let's you load text file assets in bevy."
  },
  {
    title: 'Bevy Enum Filter',
    repo: 'bevy_enum_filter',
    languages: ['Rust'],
    pull_requests: ['https://github.com/MrGVSV/bevy_enum_filter/pull/1'],
    contribution: 'Made it work with bevy 0.10.1',
    description: 'A nice utility that lets you filter by enum in bevy queries'
  },
  {
    title: 'Jak Project',
    repo: 'jak-project',
    languages: ['C++'],
    pull_requests: ['https://github.com/open-goal/jak-project/pull/1776'],
    contribution: "I added the screenshot hotkey yep that's it.",
    description: 'A reverse engineered version of the Jak and Daxter engine.'
  }
]
</script>

<template>
  <div>
    <div>
      <h2>Open source project Contributions</h2>
      <p>I have done almost none of this i'm hoping by adding this page I will do it more.</p>
    </div>
    <br />
    <ProjectContribution
      :key="i.repo"
      v-for="i in contributions"
      :title="i.title"
      :repo="i.repo"
      :contribution="i.contribution"
      :description="i.description"
      :languages="i.languages"
      :pull_request="i.pull_requests"
    />
    <div></div>
  </div>
</template>

<style>
div {
  margin-top: 10px;
}
</style>
