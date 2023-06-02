<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "Capstone-2019-Data-Sharing";
const title = "Final year uni Project";
const techs = [Technologies.Flask, Technologies.Docker, Technologies.Rest];

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

const play = ref(false);


</script>

<template>
    <ProjectInfo :key="languages.length" :filter="filter" :good="true" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
        <h3>What is it?</h3>
        <p>
            This is the final year <b>group project</b> at uni. The objective was to
            create an architecture, then implement part of the created architecture.
            The goal was to allow people to sell their personal biometric data to
            researchers with as few middle men as possible.
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
