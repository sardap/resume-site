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
import Voties from '@/components/projects/Voties.vue';
import { getComplete, type Complete } from '@/backend';

const complete = ref<Complete | null>(null);

onMounted(async () => {
  complete.value = await getComplete();
});

const languages = [
  "Rust",
  "Go",
  "JavaScript",
  "TypeScript",
  "Python",
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
  <p v-if="complete === null">Loading...</p>
  <div v-else>
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
      <Voties :filter="filter" :complete="complete.voties" />
      <VotingSystems :filter="filter" :complete="complete.voting_systems" />
      <KiryuevErywhere :filter="filter" :complete="complete.kiryueverywhere" />
      <MarchGoodMaybe :filter="filter" :complete="complete.march_good_maybe" />
      <StopTheMail :filter="filter" :complete="complete['stop-the-mail']" />
      <TuneNeutral :filter="filter" :complete="complete.TuneNeutral" />
      <tigtbifhimva :filter="filter" :complete="complete.TIGTBIFHIMVA" />
      <WalkGoodMaybeHD :filter="filter" :complete="complete['go-walk-good-maybe-hd']" />
      <ResumeSite :filter="filter" :complete="complete['resume-site']" />
      <WalkGoodMaybe :filter="filter" :complete="complete['walk-good-maybe']" />
      <ChessBot :filter="filter" :complete="complete.chessbot" />
      <PickUpBot :filter="filter" :complete="complete.pickupbot" />
      <MuhBot :filter="filter" :complete="complete.muhbot" />
      <IsItSka :filter="filter" :complete="complete.IsItSka" />
      <Vibes :filter="filter" :complete="complete.vibes" />
      <HackathonThing :filter="filter" :complete="complete.HackathonThing" />
      <NoTotoAfrica :filter="filter" :complete="complete.NoTotoAfrica" />
      <Capstone :filter="filter" :complete="complete['Capstone-2019-Data-Sharing']" />
      <Temptris :filter="filter" :complete="complete.Temptris" />
      <ShapesCanMoveAndSpeak :filter="filter" :complete="complete.ShapesCanMoveAndSpeak" />
      <PascalBrainFuck :filter="filter" :complete="complete.PascalBrainFuck" />
      <NumbersOrDie :filter="filter" :complete="complete.NumbersOrDie" />
    </div>
    <div>
      <h2>Wow look at all these high quality projects <span>Hire me</span></h2>
    </div>
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
