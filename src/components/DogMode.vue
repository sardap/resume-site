<script setup lang="ts">

import BarkButton from './BarkButton.vue';

const dogMode = "🐶 DOG MODE 🐶";

</script>

<template>
    <div>
        <h2>Welcome to {{ dogMode }}</h2>
        <div>
            <p>How many resume sites have a {{ dogMode }}?</p>
        </div>
        <div>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y9K18CGEeiI"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <BarkButton />
    </div>
</template>


<style scoped></style>