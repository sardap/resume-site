<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';

const play = ref(false);
const title = "Hackathon Thing";
const techs = [Technologies.Unity, Technologies.ECS];

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
