<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import WgmHd from '../embedded/WgmHd.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "go-walk-good-maybe-HD";
const title = "Go Walk Good Maybe HD";
const techs = [Technologies.Docker, Technologies.ECS, Technologies.Jen];

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
    <ProjectInfo :key="languages.length" :filter="filter" :good="false" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
        <h3>What is it?</h3>
        <p>
            Walk good maybe remade in golang using ECS.
        </p>
        <WgmHd />
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
