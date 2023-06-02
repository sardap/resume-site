<script setup lang="ts">
import { getLanguages } from '@/backend';
import RepoInfo from '@/components/RepoInfo.vue';
import GBA from "@/components/embedded/GBA.vue";
import { hostingSite, backendSite, Technologies, type ProjectFilter } from "@/consts";
import { onMounted, ref, type PropType } from 'vue';
import ProjectInfo from '../ProjectInfo.vue';

const repo = "walk-good-maybe";
const title = "Walk Good Maybe";
const techs = [Technologies.GBA];

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
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" />
        <h3>What is it?</h3>
        <p>
            A basic endless runner homebrew Game Boy Advance game. Play it right
            here in the browser! GBA development is difficult it has a incredibly
            slow CPU at 16MHz no FPU (particularly hard to deal with for game dev).
            No real helper functions just setting an address in VRAM and performing
            bitwise operations on registers to set different modes. Check out the
            code please keep mind GBA programming is fairly funky.
        </p>
        <p>
            Note: browser GBA emulator has some emulation inaccuracy use MGBA for
            best experience
        </p>
        <GBA :versionUrl="`${backendSite}/api/reporele/walk-good-maybe`"
            :resourceUrl="`https://gba.ninja/?autorun=${hostingSite}/versions`" :fileName="`walk-good-maybe.gba`" />
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
