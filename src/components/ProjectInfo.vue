<script setup lang="ts">
import type { ProjectFilter, Technologies } from "@/consts";
import { type PropType } from "vue";

const props = defineProps({
    filter: {
        type: Object as PropType<ProjectFilter>,
        required: true
    },
    good: {
        type: Boolean,
        required: true
    },
    languages: {
        type: Array as PropType<string[]>,
        required: true
    },
    technologies: {
        type: Array as PropType<Technologies[]>,
        required: true
    },
});

function should_show(): boolean {
    let show_bad = true;
    if (!props.filter.show_bad) {
        show_bad = props.good;
    }

    let show_languages = true;
    if (props.filter.languages.length > 0) {
        show_languages = false;
        for (const lang of props.languages) {
            if (props.filter.languages.includes(lang)) {
                show_languages = true;
            }
        }
    }

    let show_tech = true;
    if (props.filter.technologies.length > 0) {
        show_tech = false;
        for (const tech of props.technologies) {
            if (props.filter.technologies.includes(tech)) {
                show_tech = true;
            }
        }
    }

    return show_bad && show_languages && show_tech;
}

const show = should_show();

</script>

<template>
    <div v-if="show">
        <slot></slot>
        <hr />
    </div>
</template>

<style scoped></style>
