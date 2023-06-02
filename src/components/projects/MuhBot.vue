<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "muhbot";
const title = "Muh Bot";
const techs = [Technologies.DiscordAPI, Technologies.Redis, Technologies.Docker];

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
    <ProjectInfo :key="languages.length" :filter="filter" :good="false" :languages="languages" :technologies="techs">
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
        <h3>What is it?</h3>
        <p>
            A Discord bot which is based on a stupid joke that when someone messages
            a sentence ending with me it will respond with muh. eg "what time?" will
            respond with muh. It will also copy any formatting "what ti<b>mE</b>"
            "<b>muH</b>". Will track how many times you have been muhed per server.
        </p>
        <p>
            Google Speech API it can join a voice channel and when someone says me
            it will use Google speech to text API to respond with muh! This was
            difficult since the way discord audio is received in constant stream
            from all parties. forcing you to split the audio into separate buckets
            based on the speaker (merging the audio here is a no go). Which then
            causes issues with speed since we need at least 15 seconds of audio for
            the google speech request. So you need to concat the audio streams on
            the fly to get to 15 seconds as fast as possible. Making the muh hit on
            time.
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
