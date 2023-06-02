<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { getLanguages } from '@/backend';
import { onMounted, ref, type PropType } from 'vue';

const repo = "resume-site";
const title = "Resume Site";
const techs = [Technologies.GithubAPI, Technologies.Rest];

defineProps({
    filter: {
        type: Object as PropType<ProjectFilter>,
        required: true
    },
});

const languages = ref<string[]>([]);

onMounted(async () => {
    languages.value = await getLanguages(repo);
});


</script>

<template>
    <ProjectInfo :key="languages.length" :filter="filter" :good="true" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
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
