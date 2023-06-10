<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';

const title = "Chess Bot";
const techs = [Technologies.DiscordAPI, Technologies.ImageGeneration, Technologies.Redis, Technologies.Docker];

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
