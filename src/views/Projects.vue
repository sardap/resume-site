<template>
  <div class="projects">
    <div class="project-info">
      <RepoInfo
        :repo="walkGoodMaybe.repo"
        :title="walkGoodMaybe.title"
        :techs="walkGoodMaybe.techs"
      />
      <h3>What is it?</h3>
      <p>
        A basic endless runner homebrew Game Boy Advance game. Play it right
        here in the browser! GBA development is diffuclt it has a incredibly
        slow CPU at 16MHz no FPU (particularly hard to deal with for game dev).
        No real helper functions just setting a address in VRAM and performing
        bitwise operations on regeisters to set diffrent modes. Check out the
        code it's crap but it's mine.
      </p>
      <p>Note: browser GBA emualtor has some emulation inaccuracy</p>
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
      <GBA :key="wgmUpdateCount" :url="wgmRom" />
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="chessBot.repo"
        :title="chessBot.title"
        :techs="chessBot.techs"
      />
      <h3>What is it?</h3>
      <p>
        Play Chess via a Discord bot via messages! Send move commands, Try
        playing vs the very bad AI, Create a Gif of all the moves so far in your
        game! Do silly customisation stuff like change the colours of the pieces
        to whatever you want hover over img to see.
      </p>
      <img
        @mouseover="
          activeChessImg =
            activeChessImg === chessImgColour ? chessImg : chessImgColour
        "
        :src="activeChessImg"
        id="chess-img"
      />
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="muhBot.repo"
        :title="muhBot.title"
        :techs="muhBot.techs"
      />
      <h3>What is it?</h3>
      <p>
        A Discord bot which is based on a stupid bot which when someone messages
        a sentence ending with me it will respond with muh. eg "what time?" will
        respond with muh. It will also copy any foramting "what ti<b>mE</b>"
        "<b>muH</b>". Will track how many times you have been muhed per server.
      </p>
      <p>
        Google Speech API it can join a voice channel and when someone says me
        it will use Google speech to text API to respond with muh! This was
        diffuclt since the way discord audio is received in constant stream from
        all parties. foricing you to split the audio into seprate buckets based
        on the speaker (merging the audio here is a no go). Which then causes
        issues with speed since we need at least 15 seconds of audio for the
        google speech request. So you need to concat the audio streams on the
        fly to get to 15 seconds as fast as possible. Making the muh hit on
        time.
      </p>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo :repo="vibes.repo" :title="vibes.title" :techs="vibes.techs" />
      <h3>What is it?</h3>
      <p>
        A nice little site which can play diffrent tracks for each hour of the
        day. Along with weather modifers such as Raining + 1700. The background
        also changes with the time of day and cloud state. Now for legal reasons
        I can't aluide to which music it should play. In a unrealted not I love
        how animal crossing has music for each hour.
      </p>
      <img :src="vibesImg" id="vibe-img" />
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="hackathonThing.repo"
        :title="hackathonThing.title"
        :techs="hackathonThing.techs"
      />
      <h3>What is it?</h3>
      <p>
        You play as the eyes and the mouth and avoid getting touched by the
        figners assulting your face.
      </p>
      <p>
        This was made over a 24 hour period using unity. Then fixed in 2021 to
        run in Unity WebGL. This might not seem it but it's a product of trying
        to not touch your eyees during the COIVD-19 pandemic. The background is
        Goole Earth VR footage.
      </p>
      <button v-if="hideHackThing" v-on:click="hideHackThing = false">
        Play!
      </button>
      <div v-if="!hideHackThing">
        <embed src="./hackathon/index.html" width="500" height="350" />
        <p>Controls: left click eyes or mouth to select right click to move</p>
        <p>
          Note: the web version is bugged to not allow fail state, Sometimes the
          UI elements are just missing
        </p>
      </div>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="gameboyMicroGameCollection.repo"
        :title="gameboyMicroGameCollection.title"
        :techs="gameboyMicroGameCollection.techs"
      />
      <h3>What is it?</h3>
      <p>I love wario ware so it's one of those</p>
      <GB :key="ecsRom" :url="ecsRom" />
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="sqaurePoltik.repo"
        :title="sqaurePoltik.title"
        :techs="sqaurePoltik.techs"
      />
      <h3>What is it?</h3>
      <p>A Bizzare Unity sim which was my first attempt and basic AI</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GBA from "../components/GBA.vue";
import GB from "../components/GB.vue";
import RepoInfo from "../components/RepoInfo.vue";

import { hostingSite } from "@/secret";

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
      this.wgmUpdateCount++;
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
    const chessImg =
      "https://raw.githubusercontent.com" +
      "/sardap/chessbot/main/examples/example.gif";

    return {
      versions: [{ name: "loading" }],
      ecsRom: `${hostingSite}/gbm/micro_games.gb`,
      hideHackThing: true,
      wgmUpdateCount: 0,
      chessImgColour: "./photos/chess_colour.png",
      chessImg: chessImg,
      activeChessImg: chessImg,
      vibesImg:
        "https://github.com/sardap" +
        "/vibes/blob/master/examples/clear_skys.png?raw=true",
      gameboyMicroGameCollection: {
        repo: "gameboy_micro_game_collection",
        title: "Gameboy Micro Game Collection",
        techs: ["GB"]
      },
      chessBot: {
        repo: "chessbot",
        title: "Chess Bot",
        techs: ["Discord API", "Image generation", "redis"]
      },
      muhBot: {
        repo: "muhbot",
        title: "Muh Bot",
        techs: ["Discord API", "Google speech API", "redis"]
      },
      vibes: {
        repo: "vibes",
        title: "Vibes",
        techs: ["Open Weather API", "Discord API", "React"]
      },
      hackathonThing: {
        repo: "HackathonThing",
        title: "Hackathon Thing",
        techs: ["Unity"]
      },
      sqaurePoltik: {
        repo: "SqaurePolitk",
        title: "Sqaure Politk",
        techs: ["Unity"]
      },
      walkGoodMaybe: {
        repo: "walk-good-maybe",
        title: "Walk Good Maybe",
        techs: ["GBA"]
      }
    };
  }
})
export default class Projects extends Vue {}
</script>
<style scoped>
@import "../style/shared.css";

hr {
  margin-left: 20%;
  margin-right: 20%;
  margin-block-start: 20px;
  margin-block-end: 10px;
}

.project-info {
  display: inline-block;
  max-width: 35em;
}

#vibe-img {
  max-width: 480px;
}

#chess-img {
  max-width: 240px;
  max-height: 240px;
}
</style>
