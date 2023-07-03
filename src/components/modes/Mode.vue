<script setup lang="ts">
import { useModeStore, Mode } from '@/stores/mode';
import Dog from './dog/DogMode.vue';
import QuizTime from './quiz/QuizTime.vue';
import Dyslexia from './dyslexia/Dyslexia.vue';

const modeStore = useModeStore();

</script>

<template>
    <div>
        <div v-if="modeStore.mode == Mode.Normal">
            <p>ERROR</p>
        </div>
        <Dog v-else-if="modeStore.mode == Mode.Dog" />
        <QuizTime v-else-if="modeStore.mode == Mode.QuizTime" />
        <Dyslexia v-else-if="modeStore.mode == Mode.Dyslexia" />
        <div v-else>
            <p>Missing mode else if</p>
        </div>
    </div>
</template>


<style scoped></style>