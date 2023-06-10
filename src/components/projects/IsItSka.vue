<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';

const featuresDocLink = "https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/";
const title = "Is it ska?";
const techs = [Technologies.SpotifyWebApi, Technologies.Docker, Technologies.Rest, Technologies.Flask, Technologies.MachineLearning];

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
            I love ska music. This site was created to try out scikit by using
            <b>MACHINE LEARNING</b> to attempt to classify weather or not a song is
            ska. This is done
            <a :href="featuresDocLink">by getting each songs features using the Spotify web API.</a>
            Followed by training a classifier by using a list of ska and not ska
            tracks. With the machine learning features being the above mentioned
            song features from the Spotify API. This works pretty badly. I have
            found a RandomForest classifier is working best.
        </p>
        <br />
        <a href="https://isitska.com">
            <p>Pick it up here!</p>
        </a>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
