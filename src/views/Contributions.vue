<script setup lang="ts">
import ProjectContribution from '@/components/ProjectContribution.vue';

const contributions = [
  {
    title: "Bevy Enum Filter",
    repo: "bevy_enum_filter",
    languages: ["Rust"],
    pull_requests: ['https://github.com/MrGVSV/bevy_enum_filter/pull/1'],
    contribution: "Made it work with bevy 0.10.1",
    description: "A nice utility that lets you filter by enum in bevy queries",
  },
  {
    title: "Jak Project",
    repo: "jak-project",
    languages: ["C++"],
    pull_requests: ['https://github.com/open-goal/jak-project/pull/1776'],
    contribution: "I added the screenshot hotkey yep that's it.",
    description: "A reverse engineered version of the Jak and Daxter engine.",
  }
];

</script>

<template>
  <div>
    <div>
      <h2>Open source project Contributions</h2>
      <p>I have done almost none of this i'm hoping by adding this page I will do it more.</p>
    </div>
    <br />
    <ProjectContribution v-for="i in contributions" :title="i.title" :repo="i.repo" :contribution="i.contribution"
      :description="i.description" :languages="i.languages" :pull_request="i.pull_requests" />
    <div>

    </div>
  </div>
</template>

<style>
div {
  margin-top: 10px;
}
</style>
