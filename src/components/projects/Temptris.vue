<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "Temptris";
const title = "Temptris";
const techs = [Technologies.OpenWeatherApi, Technologies.MonoGame];

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
    <ProjectInfo :key="languages.length" :filter="filter" :good="true" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" created-date="2018-11-07" />
        <h3>What is it?</h3>
        <p>
            Have you ever been playing a block puzzle game, there was lighting
            outside and you want the block game to reflect the real world weather?
            No? Okay well this uses Mongogame(Modern XNA) plus OpenWeather to pull
            real weather to create modifiers on a pretty bad version of a block
            puzzle game.
        </p>
        <video width="500" controls>
            <source src="/videos/temptris.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
