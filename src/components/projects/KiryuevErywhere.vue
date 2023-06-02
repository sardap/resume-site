<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from "@/consts";
import moment, { lang } from 'moment';
import ProjectInfo from '../ProjectInfo.vue';
import { onMounted, ref, type PropType } from 'vue';
import { getLanguages } from '@/backend';

const repo = "kiryueverywhere";
const title = "Kiryu Everywhere";
const techs = [Technologies.Computers];

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

const days = moment().diff(moment("2022-07-28"), 'days');

</script>

<template>
    <ProjectInfo :key="languages.length" :filter="filter" :good="true" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
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
