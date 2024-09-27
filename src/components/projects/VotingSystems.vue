<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue'
import { Technologies, type ProjectFilter } from '@/consts'
import ProjectInfo from '../ProjectInfo.vue'
import { type PropType } from 'vue'
import { type CompleteRepo } from '@/backend'

const title = 'Election Systems'
const techs = [Technologies.Rest, Technologies.Postgres, Technologies.Diesel]

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
      It's a site which has 14 different voting systems. Allowing people to easily create different
      elections with different systems. Below is example elections for each system.
    </p>
    <div
      v-for="system in [
        {
          name: 'Preferential Voting',
          v_link: 'https://vote.sarda.dev/preferential_voting/b8218839-c166-41aa-b7f9-f7c9004ce5b0',
          r_link:
            'https://vote.sarda.dev/preferential_voting/b8218839-c166-41aa-b7f9-f7c9004ce5b0/results'
        },
        {
          name: 'Borda Count',
          v_link: 'https://vote.sarda.dev/borda_count/bccefdad-a700-4a7a-92db-ddecafbb9a77',
          r_link: 'https://vote.sarda.dev/borda_count/bccefdad-a700-4a7a-92db-ddecafbb9a77/results'
        },
        {
          name: 'Approval Voting',
          v_link: 'https://vote.sarda.dev/approval/3c1f37fc-fcb3-4435-a08b-fe6f2166d882',
          r_link: 'https://vote.sarda.dev/approval/3c1f37fc-fcb3-4435-a08b-fe6f2166d882/results'
        },
        {
          name: 'Star',
          v_link: 'https://vote.sarda.dev/star/2738bfcd-b975-48e9-b01b-c80c9bb989d6',
          r_link: 'https://vote.sarda.dev/star/2738bfcd-b975-48e9-b01b-c80c9bb989d6/results'
        },
        {
          name: 'Cumulative',
          v_link: 'https://vote.sarda.dev/cumulative/0c8ea51b-b697-424f-9911-323046b246d0',
          r_link: 'https://vote.sarda.dev/cumulative/0c8ea51b-b697-424f-9911-323046b246d0/results'
        },
        {
          name: 'anti-plurality',
          v_link: 'https://vote.sarda.dev/anti_plurality/6e05059e-5696-4919-bda1-3a194dfc2320',
          r_link:
            'https://vote.sarda.dev/anti_plurality/6e05059e-5696-4919-bda1-3a194dfc2320/results'
        },
        {
          name: 'One Party',
          v_link: 'https://vote.sarda.dev/single_party/43a77759-ec3c-4b7b-a812-9d4607d23e9a',
          r_link: 'https://vote.sarda.dev/single_party/43a77759-ec3c-4b7b-a812-9d4607d23e9a/results'
        },
        {
          name: 'Three-Two-One',
          v_link: 'https://vote.sarda.dev/three_two_one/e00fe573-47f1-4eda-a05f-f244cc6b3f01',
          r_link:
            'https://vote.sarda.dev/three_two_one/e00fe573-47f1-4eda-a05f-f244cc6b3f01/results'
        },
        {
          name: 'Condorcet Winner and Ranked Pairs',
          v_link: 'https://vote.sarda.dev/condorcet_method/828a350d-51d6-458b-963c-ce6e9bc289fd',
          r_link:
            'https://vote.sarda.dev/condorcet_method/828a350d-51d6-458b-963c-ce6e9bc289fd/results'
        },
        {
          name: 'Majority Judgement',
          v_link: 'https://vote.sarda.dev/majority_judgment/21486f76-cd45-4763-b6ad-e2428f90ad6e',
          r_link:
            'https://vote.sarda.dev/majority_judgment/21486f76-cd45-4763-b6ad-e2428f90ad6e/results'
        },
        {
          name: 'Score',
          v_link: 'https://vote.sarda.dev/score/336d50a3-19e5-4f6f-bb28-48e2c6174ab0',
          r_link: 'https://vote.sarda.dev/score/336d50a3-19e5-4f6f-bb28-48e2c6174ab0/results'
        },
        {
          name: 'Usual Judgment',
          v_link: 'https://vote.sarda.dev/usual_judgment/42b2600d-1a70-40c0-a030-c77745ee5877',
          r_link:
            'https://vote.sarda.dev/usual_judgment/42b2600d-1a70-40c0-a030-c77745ee5877/results'
        },
        {
          name: 'Single Non Transferable Vote',
          v_link:
            'https://vote.sarda.dev/single_non_transferable/7681a9bb-bb74-4496-905f-8e32bd22be9b',
          r_link:
            'https://vote.sarda.dev/single_non_transferable/7681a9bb-bb74-4496-905f-8e32bd22be9b/results'
        }
      ]"
      :key="system.name"
      style="margin-top: 10px"
    >
      <p>
        {{ system.name }} <a :href="system.v_link">Voting Link</a>,
        <a :href="system.r_link">Results Link</a>
      </p>
    </div>
  </ProjectInfo>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
