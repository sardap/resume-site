<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { type PropType } from 'vue';
import type { CompleteRepo } from '@/backend';

const title = "Numbers or Die";
const techs = [Technologies.SwinGame];

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
        <RepoInfo :complete="complete" :title="title" :techs="techs" created-date="2016-09-25" />
        <h3>What is it?</h3>
        <p>
            This is the first program created without any kind of direction. It's a
            game where you everyone has an amount of 4 kinds of money. The more of a
            kind of money there is the less it's worth. The player shoots any of
            these four kinds of money. If they hit an enemy, they will steal some of
            that kind of money from the enemy. If they miss, then that money is
            destroyed this will bring up the value of the shot money vs the other
            kinds of money because now there is less of it. Enemies spawn with a
            random amount of each of these kinds of money this also impacts the
            value vs other kinds of money. Yes this is insane.
        </p>
        <video width="500" controls>
            <source src="/videos/numbers_or_die.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
