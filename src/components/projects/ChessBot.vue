<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "chessbot";
const title = "Chess Bot";
const techs = [Technologies.DiscordAPI, Technologies.ImageGeneration, Technologies.Redis, Technologies.Docker];

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
            Play Chess via a Discord bot via messages! Send move commands, Try
            playing vs the very bad AI, Create a Gif of all the moves so far in your
            game! Do silly customisation stuff like change the colours of the pieces
            to whatever you want hover over image to see.
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
