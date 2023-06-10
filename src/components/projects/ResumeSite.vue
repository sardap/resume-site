<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type CompleteRepo } from '@/backend';
import { type PropType } from 'vue';

const title = "Resume Site";
const techs = [Technologies.GithubAPI, Technologies.Rest];

defineProps({
    complete: {
        type: Object as PropType<CompleteRepo>,
        required: true
    },
    filter: {
        type: Object as PropType<ProjectFilter>,
        required: true
    },
});

</script>

<template>
    <ProjectInfo :filter="filter" :good="true" :languages="complete.langs" :technologies="techs">
        <RepoInfo :complete="complete" :title="title" :techs="techs" />
        <h3>What is it?</h3>
        <p>
            You are looking at it. The goal was to create a early 2000s site using
            modern javascript frameworks.
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
