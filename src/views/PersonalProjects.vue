<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { type ProjectFilter, Technologies } from '@/consts';
import VotingSystems from '@/components/projects/VotingSystems.vue';
import MarchGoodMaybe from '@/components/projects/MarchGoodMaybe.vue';
import StopTheMail from '@/components/projects/StopTheMail.vue';
import TuneNeutral from '@/components/projects/TuneNeutral.vue';
import tigtbifhimva from '@/components/projects/tigtbifhimva.vue';
import WalkGoodMaybeHD from '@/components/projects/WalkGoodMaybeHD.vue';
import ResumeSite from '@/components/projects/ResumeSite.vue';
import KiryuevErywhere from '@/components/projects/KiryuevErywhere.vue';
import WalkGoodMaybe from '@/components/projects/WalkGoodMaybe.vue';
import ChessBot from '@/components/projects/ChessBot.vue';
import PickUpBot from '@/components/projects/PickUpBot.vue';
import MuhBot from '@/components/projects/MuhBot.vue';
import IsItSka from '@/components/projects/IsItSka.vue';
import Vibes from '@/components/projects/Vibes.vue';
import HackathonThing from '@/components/projects/HackathonThing.vue';
import Capstone from '@/components/projects/Capstone.vue';
import Temptris from '@/components/projects/Temptris.vue';
import ShapesCanMoveAndSpeak from '@/components/projects/ShapesCanMoveAndSpeak.vue';
import PascalBrainFuck from '@/components/projects/PascalBrainFuck.vue';
import NumbersOrDie from '@/components/projects/NumbersOrDie.vue';
import NoTotoAfrica from '@/components/projects/NoTotoAfrica.vue';


const languages = [
  "Rust",
  "Go",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "C",
  "Vue",
  "PLpgSQL",
  "Brainfuck",
  "Pascal",
];

const technologies = ref<Technologies[]>([]);

const refresh = ref(0);

const filter = ref<ProjectFilter>({
  languages: [],
  technologies: [],
  show_bad: true
});

const language = ref<string | null>(null);
const technology = ref<Technologies | null>(null);

function updateFilter() {
  refresh.value++;

  const lang = language.value;

  if (lang !== null) {
    filter.value.languages = [lang];
  } else {
    filter.value.languages = [];
  }

  const tech = technology.value;

  if (tech !== null) {
    filter.value.technologies = [tech];
  } else {
    filter.value.technologies = [];
  }
}

onMounted(() => {
  technologies.value = Object.values(Technologies);
});

</script>

<template>
  <div>
    <h2>Filters</h2>
    <div>
      <label>Even show the low quality stuff </label>
      <input type="checkbox" v-model="filter.show_bad" @change="() => refresh++" />
    </div>
    <div>
      <label>Language </label><br />
      <select v-model="language" @change="updateFilter">
        <option :value="null">No Filter</option>
        <option v-for="language in languages" :value="language">{{ language }}</option>
      </select>
    </div>
    <div>
      <label>Technologies </label><br />
      <select v-model="technology" @change="updateFilter">
        <option :value="null">No Filter</option>
        <option v-for="i in technologies" :value="i">{{ i }}</option>
      </select>
    </div>
  </div>
  <br />
  <hr />
  <br />
  <div :key="refresh">
    <VotingSystems :filter="filter" />
    <KiryuevErywhere :filter="filter" />
    <MarchGoodMaybe :filter="filter" />
    <StopTheMail :filter="filter" />
    <TuneNeutral :filter="filter" />
    <tigtbifhimva :filter="filter" />
    <WalkGoodMaybeHD :filter="filter" />
    <ResumeSite :filter="filter" />
    <WalkGoodMaybe :filter="filter" />
    <ChessBot :filter="filter" />
    <PickUpBot :filter="filter" />
    <MuhBot :filter="filter" />
    <IsItSka :filter="filter" />
    <Vibes :filter="filter" />
    <HackathonThing :filter="filter" />
    <NoTotoAfrica :filter="filter" />
    <Capstone :filter="filter" />
    <Temptris :filter="filter" />
    <ShapesCanMoveAndSpeak :filter="filter" />
    <PascalBrainFuck :filter="filter" />
    <NumbersOrDie :filter="filter" />
  </div>
  <div>
    <h2>Wow look at all these high quality projects <span>Hire me</span></h2>
  </div>
</template>

<style>
div {
  margin-top: 10px;
}

span {
  color: red;
  font-weight: bold;
}
</style>
