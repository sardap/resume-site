<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { getLanguages } from '@/backend';
import { onMounted, ref, type PropType } from 'vue';

const repo = "NoTotoAfrica";
const title = "No Toto Africa";
const techs = [Technologies.SpotifyWebApi];

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
            Toto Africa is a bad overplayed song. This is a simple script that removes it from all your spotify playlists.
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
