<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import { type CompleteRepo } from '@/backend';

const title = "Pick Up bot";
const techs = [Technologies.DiscordAPI, Technologies.YouTubeApi, Technologies.Docker];

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
            A Discord bot which is like other music player bots. But it will only
            play ska music. To achieve this it uses "<a :href="`https://isitska.com`">is it ska?</a>" to query whether or
            not
            a song is ska. Then will try it's best to
            find the song on YouTube and stream that to the given voice channel.
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
