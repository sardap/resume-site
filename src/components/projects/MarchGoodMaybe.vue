<script setup lang="ts">
import { getLanguages } from '@/backend';
import RepoInfo from '@/components/RepoInfo.vue';
import GBA from "@/components/embedded/GBA.vue";
import { hostingSite, backendSite, Technologies, type ProjectFilter } from "@/consts";
import { onMounted, ref, type PropType } from 'vue';
import ProjectInfo from '../ProjectInfo.vue';

defineProps({
    filter: {
        type: Object as PropType<ProjectFilter>,
        required: true
    },
});

const repo = "march_good_maybe";
const title = "March Good Maybe";
const techs = [Technologies.GBA, Technologies.CPP20, Technologies.ECS];

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
