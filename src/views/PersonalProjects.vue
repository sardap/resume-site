<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type ProjectFilter, Technologies } from '@/consts'
import VotingSystems from '@/components/projects/VotingSystems.vue'
import tigtbifhimvaProject from '@/components/projects/tigtbifhimvaProject.vue'
import ResumeSite from '@/components/projects/ResumeSite.vue'
import KiryuevErywhere from '@/components/projects/KiryuevErywhere.vue'
import WalkGoodMaybe from '@/components/projects/WalkGoodMaybe.vue'
import ChessBot from '@/components/projects/ChessBot.vue'
import MuhBot from '@/components/projects/MuhBot.vue'
import HackathonThing from '@/components/projects/HackathonThing.vue'
import CapstoneProject from '@/components/projects/CapstoneProject.vue'
import TemptrisProject from '@/components/projects/TemptrisProject.vue'
import ShapesCanMoveAndSpeak from '@/components/projects/ShapesCanMoveAndSpeak.vue'
import PascalBrainFuck from '@/components/projects/PascalBrainFuck.vue'
import NumbersOrDie from '@/components/projects/NumbersOrDie.vue'
import UltimateChess2024 from '@/components/projects/UltimateChess2024.vue'
import MonFs from '@/components/projects/MonFs.vue'
import BookClub from '@/components/projects/BookClub.vue'
import Sardips from '@/components/projects/Sardips.vue'
import { getComplete, type Complete } from '@/backend'
import AllBattle from '@/components/projects/AllBattle.vue'
import WeddingPlanner from '@/components/projects/WeddingPlanner.vue'

const complete = ref<Complete | undefined>(undefined)

onMounted(async () => {
  complete.value = await getComplete()
})

const languages = [
  'Rust',
  'Go',
  'TypeScript',
  'Python',
  'C#',
  'C',
  'Vue',
  'PLpgSQL',
  'Brainfuck',
  'Pascal'
]

const technologies = ref<Technologies[]>([])

const refresh = ref(0)

const filter = ref<ProjectFilter>({
  languages: [],
  technologies: [],
  show_bad: false
})

const language = ref<string | null>(null)
const technology = ref<Technologies | null>(null)

function updateFilter() {
  refresh.value++

  const lang = language.value

  if (lang !== null) {
    filter.value.languages = [lang]
  } else {
    filter.value.languages = []
  }

  const tech = technology.value

  if (tech !== null) {
    filter.value.technologies = [tech]
  } else {
    filter.value.technologies = []
  }
}

onMounted(() => {
  technologies.value = Object.values(Technologies)
})
</script>

<template>
  <div>
    <div>
      <h2>Filters</h2>
      <div>
        <label>Language </label><br />
        <select v-model="language" @change="updateFilter">
          <option :value="null">No Filter</option>
          <option :key="language" v-for="language in languages" :value="language">
            {{ language }}
          </option>
        </select>
      </div>
      <div>
        <label>Technologies </label><br />
        <select v-model="technology" @change="updateFilter">
          <option :value="null">No Filter</option>
          <option :key="i" v-for="i in technologies" :value="i">{{ i }}</option>
        </select>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div :key="refresh">
      <Sardips :filter="filter" :complete="complete?.['sardips']" />
      <BookClub :filter="filter" :complete="complete?.['site-3ds']" />
      <MonFs :filter="filter" :complete="complete?.['mon-fs']" />
      <AllBattle :filter="filter" :complete="complete?.['all_battle']" />
      <UltimateChess2024 :filter="filter" :complete="complete?.['ultimate-chess-2024']" />
      <WeddingPlanner :filter="filter" :complete="complete?.['wedding-planner']" />
      <VotingSystems :filter="filter" :complete="complete?.voting_systems" />
      <KiryuevErywhere :filter="filter" :complete="complete?.kiryueverywhere" />
      <tigtbifhimvaProject :filter="filter" :complete="complete?.TIGTBIFHIMVA" />
      <ResumeSite :filter="filter" :complete="complete?.['resume-site']" />
      <WalkGoodMaybe :filter="filter" :complete="complete?.['walk-good-maybe']" />
      <ChessBot :filter="filter" :complete="complete?.chessbot" />
      <MuhBot :filter="filter" :complete="complete?.muhbot" />
      <HackathonThing :filter="filter" :complete="complete?.HackathonThing" />
      <CapstoneProject :filter="filter" :complete="complete?.['Capstone-2019-Data-Sharing']" />
      <TemptrisProject :filter="filter" :complete="complete?.Temptris" />
      <ShapesCanMoveAndSpeak :filter="filter" :complete="complete?.ShapesCanMoveAndSpeak" />
      <PascalBrainFuck :filter="filter" :complete="complete?.PascalBrainFuck" />
      <NumbersOrDie :filter="filter" :complete="complete?.NumbersOrDie" />
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
