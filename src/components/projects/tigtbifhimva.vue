<script setup lang="ts">
import { getLanguages } from '@/backend';
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import { onMounted, ref, type PropType } from 'vue';
import ProjectInfo from '../ProjectInfo.vue';


const repo = "TIGTBIFHIMVA";
const title = "Time It's Going To Be In Four Hours In Melbourne Victoria Australia";
const techs = [Technologies.Docker, Technologies.Rest, Technologies.RestWarp];

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
            An API which will return the time in Melbourne Victoria Australia in
            four hours. Written in Rust and
            <a :href="`https://tigtbifhimva.sarda.dev/`">Featuring a website explaining the API.</a>
        </p>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
