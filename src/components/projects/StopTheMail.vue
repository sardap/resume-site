<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { hostingSite, backendSite, Technologies, type ProjectFilter } from "@/consts";
import DS from "@/components/embedded/DS.vue";
import { onMounted, ref, type PropType } from 'vue';
import { getLanguages } from '@/backend';
import ProjectInfo from '../ProjectInfo.vue';

defineProps({
    filter: {
        type: Object as PropType<ProjectFilter>,
        required: true
    },
});


const repo = "stop-the-mail";
const title = "STOP THE MAIL";
const techs = [Technologies.DS, Technologies.CPP20];

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
            Stop the mail is a tower defense game for the Nintendo DS written in C++
            20.
        </p>
        <DS :versionUrl="`${backendSite}/api/reporele/stop-the-mail`"
            :resourceUrl="`./desmond/main.html?url=${hostingSite}/stm/versions/`" :fileName="`stop-the-mail.nds`" />
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
