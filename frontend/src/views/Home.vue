<template>
  <div class="home">
    <div>
      <RepoInfo
        :repo="walkGoodMaybe.repo"
        :title="walkGoodMaybe.title"
        :techs="walkGoodMaybe.techs"
      />
      <h3>What is it?</h3>
      <p>A basic endless runner homebrew GBA game</p>
      <div class="parent">
        <p class="child inline-block-child" style="padding: 5px;">Version:</p>
        <select
          class="child inline-block-child"
          @change="selectVersion($event)"
        >
          <option
            v-for="(version, index) in versions"
            :key="index"
            :value="version.name"
            >{{ version.name }}</option
          >
        </select>
      </div>
      <GBA :key="wgmRom" :url="wgmRom" />
    </div>
    <hr/>
    <div>
      <RepoInfo
        :repo="chessBot.repo"
        :title="chessBot.title"
        :techs="chessBot.techs"
      />
      <h3>What is it?</h3>
      <p>
        Play Chess via a Discord bot via messages!<br />Genrate playbacks of all
        the moves like shown below
      </p>
      <img
        src="https://raw.githubusercontent.com
			/sardap/chessbot/main/examples/example.gif"
      />
    </div>
	<hr/>
    <div>
      	<RepoInfo
			:repo="sqaurePoltik.repo"
			:title="sqaurePoltik.title"
			:techs="sqaurePoltik.techs"
		/>
		<h3>What is it?</h3>
		<p>A Bizzare Unity simlaotuon which was my first attempt and basic AI</p>
  	</div>
	<hr/>
    <div>
      	<RepoInfo
			:repo="muhBot.repo"
			:title="muhBot.title"
			:techs="muhBot.techs"
		/>
		<h3>What is it?</h3>
		<p>A Bizzare Unity simlaotuon which was my first attempt and basic AI</p>
  	</div>
    <hr/>
    <div>
      <RepoInfo
        :repo="gameboyMicroGameCollection.repo"
        :title="gameboyMicroGameCollection.title"
        :techs="gameboyMicroGameCollection.techs"
      />
      <h3>What is it?</h3>
      <p>I love wario ware so it's one of those</p>
      <GB :key="ecsRom" :url="ecsRom" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GBA from "../components/GBA.vue";
import GB from "../components/GB.vue";
import RepoInfo from "../components/RepoInfo.vue";

import {hostingSite} from "../secret"

interface Info {
  repo: string;
  title: string;
  techs: string[];
}

@Options({
  components: {
    GBA,
    RepoInfo,
    GB
  },
  methods: {
    selectVersion(event: { target: { value: string } }) {
      this.wgmRom =
        `https://gba.ninja/?autorun=${hostingSite}` +
        `/wgm/${event.target.value}/walk-good-maybe.gba`;
      console.log(this.wgmRom);
    },
    getVersionData() {
      fetch("https://api.github.com/repos/sardap/walk-good-maybe/releases")
        .then(response => response.json())
        .then(apiRes => {
          this.versions = [];
          apiRes.forEach((i: { tag_name: string }) => {
            this.versions.push({ name: i.tag_name });
          });
          this.selectVersion({ target: { value: this.versions[0].name } });
        });
    }
  },
  created() {
    this.getVersionData();
  },
  data() {
    return {
		versions: [{ name: "loading" }],
		ecsRom: `${hostingSite}/gbm/micro_games.gb`,
		gameboyMicroGameCollection: {
			repo: "gameboy_micro_game_collection",
			title: "Gameboy Micro Game Collection",
			techs: ["GB"]
		},
		chessBot: {
			repo: "chessbot",
			title: "Chess Bot",
			techs: ["Discord API", "Image generation"]
		},
		muhBot: {
			repo: "muhbot",
			title: "Muh Bot",
			techs: ["Discord API", "Google speech API"]
		},
		sqaurePoltik: {
			repo: "SqaurePolitk",
			title: "Sqaure Politk",
			techs: ["Uinty"]
		},
		walkGoodMaybe: {
			repo: "walk-good-maybe",
			title: "Walk Good Maybe",
			techs: ["GBA"]
		}
	};
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
@import "../style/shared.css";

hr {
	margin-left: 15%;	
	margin-right: 15%;
	margin-block-end: 5px;
}
</style>
