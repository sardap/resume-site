<script setup lang="ts">
import RepoInfo from '@/components/RepoInfo.vue';
import { Technologies, type ProjectFilter } from '@/consts';
import ProjectInfo from '../ProjectInfo.vue';
import { ref, type PropType, onMounted } from 'vue';
import { getLanguages } from '@/backend';

const repo = "ShapesCanMoveAndSpeak";
const title = "Shapes can move and speak";
const techs = [Technologies.SwinGame, Technologies.ECS];

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
        <RepoInfo :repo="repo" :title="title" :techs="techs" :languages="languages" created-date="2017-04-04" />
        <h3>What is it?</h3>
        <p>
            The game is it spawns a bunch of shapes with gold mines. Each shape
            cares about 3 things in a random amount Money, Age and Size. They also
            have 3 colours chosen randomly. The more a shape cares about one of the
            3 things the more it can be influenced by another shape if that shape
            has a greater amount of that thing. For example, a Shape A cares a lot
            about age is 23 and is red. A Shape B cares a lot about age as well is
            45 and is blue. When they are next to each other, the Shape B will turn
            the Shape A blue over time. Because the Shape A cares about age and the
            Shape B is older. Shapes get money by being next to a gold mine. The
            bigger a shape is the faster it will mine. The game ends when you close
            the program. Here is a gif of it running and it's bloody strange.
        </p>
        <img src="https://github.com/sardap/ShapesCanMoveAndSpeak/raw/master/example/shapes_move_speak_1.gif" width="500" />
    </ProjectInfo>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
