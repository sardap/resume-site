<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from "@/consts";
import moment from 'moment';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';

const days = moment().diff(moment("2022-07-28"), 'days');
const title = "Kiryu Everywhere";
const techs = [Technologies.Computers];

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
            It's a fun little Geo guesser for the Yakuza (Like a dragon) games. I wrote an insane amount of scripts to help
            streamline the process. It was a
            lot of work to get the high quality maps.
        </p>
        <br />
        <p>Already have <span>{{ days }}</span> days and counting</p>
        <p><a href="https://sardap.github.io/kiryueverywhere/" target="_blank">Check it out here</a></p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";

span {
    font-weight: bold;
    color: darkred;
}
</style>
