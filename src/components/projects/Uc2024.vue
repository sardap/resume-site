<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';
import Uc2024 from '../embedded/Uc2024.vue';

const title = "Ultimate Chess 2024";
const techs = [Technologies.ECS, Technologies.Bevy];

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
            Finally you can play Chess in your browser! This was meant to be a quick project because I wanted to learn how
            to make a chess bot and have them fight. I opted for the worst control scheme possible only being able to use
            SAN.
        </p>
        <p>Please note the AI is stronger on downloaded version.</p>
        <Uc2024 />
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
