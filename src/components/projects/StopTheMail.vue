<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { hostingSite, backendSite, Technologies, type ProjectFilter } from "@/consts";
import DS from "@/components/embedded/DS.vue";
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';
import ProjectInfo from '../ProjectInfo.vue';

const title = "STOP THE MAIL";
const techs = [Technologies.DS, Technologies.CPP20];

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
