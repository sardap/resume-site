<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "HackathonThing";
const title = "Hackathon Thing";
const techs = [Technologies.Unity, Technologies.ECS];

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

const play = ref(false);


</script>

<template>
    <ProjectInfo :key="languages.length" :filter="filter" :good="false" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
        <h3>What is it?</h3>
        <p>
            You play as the eyes and the mouth and avoid getting touched by the
            fingers assaulting your face.
        </p>
        <p>
            This was made over a 24 hour period using unity. Then fixed in 2021 to
            run in Unity WebGL. This might not seem it but it's a product of trying
            to not touch your eyes during the COIVD-19 pandemic. The background is
            Google Earth VR footage.
        </p>
        <button class="play-button" v-if="!play" v-on:click="play = true">
            Play!
        </button>
        <div v-if="play">
            <embed src="./hackathon/index.html" width="500" height="350" />
            <p>Controls: left click eyes or mouth to select right click to move</p>
            <p>
                Note: the web version is bugged to not allow fail state, Sometimes the
                UI elements are just missing
            </p>
        </div>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
