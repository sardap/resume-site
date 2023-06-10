<script setup lang="ts">
import { type CompleteRepo } from '@/backend';
import RepoInfo from '@/components/RepoInfo.vue';
import GBA from "@/components/embedded/GBA.vue";
import { hostingSite, backendSite, Technologies, type ProjectFilter } from "@/consts";
import { type PropType } from 'vue';
import ProjectInfo from '../ProjectInfo.vue';

const title = "March Good Maybe";
const techs = [Technologies.GBA, Technologies.CPP20, Technologies.ECS];

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
            Im not sure yet
        </p>
        <GBA :versionUrl="`${backendSite}/api/reporele/march_good_maybe`"
            :resourceUrl="`https://gba.ninja/?autorun=${hostingSite}/march_good_maybe/versions/`"
            :fileName="`march_good_maybe.gba`" />
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
