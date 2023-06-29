<script setup lang="ts">
import { useModeStore, Mode } from '@/stores/mode';
import Dog from './dog/DogMode.vue';

const modeStore = useModeStore();

</script>

<template>
    <div>
        <div v-if="modeStore.mode == Mode.Normal">
            <p>ERROR</p>
        </div>
        <Dog v-else-if="modeStore.mode == Mode.Dog" />
        <div v-else>
            <p>Missing mode else if</p>
        </div>
    </div>
</template>


<style scoped></style>