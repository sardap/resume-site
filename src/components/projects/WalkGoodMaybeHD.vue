<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import WgmHd from '../embedded/WgmHd.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';

const title = "Go Walk Good Maybe HD";
const techs = [Technologies.Docker, Technologies.ECS, Technologies.Jen];

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
    <ProjectInfo :filter="filter" :good="false" :languages="complete.langs" :technologies="techs">
        <RepoInfo :complete="complete" :title="title" :techs="techs" />
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
