<template>
  <div class="projects">
    <div class="project-info">
      <RepoInfo
        :repo="resumeSite.repo"
        :title="resumeSite.title"
        :techs="resumeSite.techs"
      />
      <h3>What is it?</h3>
      <p>
        Your looking at it. It may not look like Vue but it is. The goal is to
        create a early 2000's style site.
      </p>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="walkGoodMaybe.repo"
        :title="walkGoodMaybe.title"
        :techs="walkGoodMaybe.techs"
      />
      <h3>What is it?</h3>
      <p>
        A basic endless runner homebrew Game Boy Advance game. Play it right
        here in the browser! GBA development is difficult it has a incredibly
        slow CPU at 16MHz no FPU (particularly hard to deal with for game dev).
        No real helper functions just setting an address in VRAM and performing
        bitwise operations on registers to set different modes. Check out the
        code it's crap but it's mine.
      </p>
      <p>Note: browser GBA emulator has some emulation inaccuracy</p>
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
        to whatever you want hover over image to see.
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
        :repo="pickUpBot.repo"
        :title="pickUpBot.title"
        :techs="pickUpBot.techs"
      />
      <h3>What is it?</h3>
      <p>
        A Discord bot which is like other music player bots. But it will only
        play ska music. To achieve this it uses "<a
          :href="`https://isitska.com`"
          >is it ska?</a
        >" to query whether or not a song is ska. Then will try it's best to
        find the song on YouTube and stream that to the given voice channel.
      </p>
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
        A Discord bot which is based on a stupid joke that when someone messages
        a sentence ending with me it will respond with muh. eg "what time?" will
        respond with muh. It will also copy any formatting "what ti<b>mE</b>"
        "<b>muH</b>". Will track how many times you have been muhed per server.
      </p>
      <p>
        Google Speech API it can join a voice channel and when someone says me
        it will use Google speech to text API to respond with muh! This was
        difficult since the way discord audio is received in constant stream
        from all parties. forcing you to split the audio into separate buckets
        based on the speaker (merging the audio here is a no go). Which then
        causes issues with speed since we need at least 15 seconds of audio for
        the google speech request. So you need to concat the audio streams on
        the fly to get to 15 seconds as fast as possible. Making the muh hit on
        time.
      </p>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="isItSka.repo"
        :title="isItSka.title"
        :techs="isItSka.techs"
      />
      <h3>What is it?</h3>
      <p>
        I love ska music. This site was created to try out scikit by using
        <b>MACHINE LEARNING</b> to attempt to classify weather or not a song is
        ska. This is done
        <a :href="featuresDocLink"
          >by getting each songs features using the Spotify web API.</a
        >
        Followed by training a classifier by using a list of ska and not ska
        tracks. With the machine learning features being the above mentioned
        song features from the Spotify API. This works pretty badly. I have
        found a RandomForest classifier is working best.
      </p>
      <br />
      <a href="https://isitska.com"><p>Pick it up here!</p></a>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo :repo="vibes.repo" :title="vibes.title" :techs="vibes.techs" />
      <h3>What is it?</h3>
      <p>
        A nice little site which can play different tracks for each hour of the
        day. Along with weather modifiers such as Raining + 1700. The background
        also changes with the time of day and cloud state. Now for legal reasons
        I can't allude to which music it should play. In a unrelated not I love
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
        fingers assaulting your face.
      </p>
      <p>
        This was made over a 24 hour period using unity. Then fixed in 2021 to
        run in Unity WebGL. This might not seem it but it's a product of trying
        to not touch your eyes during the COIVD-19 pandemic. The background is
        Google Earth VR footage.
      </p>
      <button
        class="play-button"
        v-if="hideHackThing"
        v-on:click="hideHackThing = false"
      >
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
      <p>
        I love Wario ware so it's one of those, It's using Game boy development
        kit and C99, not in ASSM. The code is some real special garbage but it's
        fast which is what is important on the 4MHz CPU.
      </p>
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
      <p>A Bizarre Unity sim which was my first attempt and basic AI</p>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="capstone.repo"
        :title="capstone.title"
        :techs="capstone.techs"
      />
      <h3>What is it?</h3>
      <p>
        This is the final year <b>group project</b> at uni. The objective was to
        create an architecture, then implement part of the created architecture.
        The goal was to allow people to sell their personal biometric data to
        researchers with as few middle men as possible.
      </p>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="temptris.repo"
        :title="temptris.title"
        :techs="temptris.techs"
        createdDateP="2018-11-07"
      />
      <h3>What is it?</h3>
      <p>
        Have you ever been playing a block puzzle game, there was lighting
        outside and you want the block game to reflect the real world weather?
        No? Okay well this uses Mongogame(Modern XNA) plus OpenWeather to pull
        real weather to create modifiers on a pretty bad version of a block
        puzzle game.
      </p>
      <video width="500" controls>
        <source src="./videos/temptris.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="shapesCanMoveAndSpeak.repo"
        :title="shapesCanMoveAndSpeak.title"
        :techs="shapesCanMoveAndSpeak.techs"
        createdDateP="2017-04-04"
      />
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
      <img :src="shapesCanMoveAndSpeakImg" width="500" />
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="pascalBrainFuck.repo"
        :title="pascalBrainFuck.title"
        :techs="pascalBrainFuck.techs"
      />
      <h3>What is it?</h3>
      <p>
        Can interpret brainfuck code into Pascal or C which is then compiled by
        FPC or gcc. Please keep in mind the date when looking at this code.
        Below is some brainfuck code which prints "g'day".
      </p>
      <div class="code-block">
        <p class="code-text">
          ++++++++++[&gt;++++++++++&lt;-] Gets cell 1 to 100<br />
          &gt;+++. adds 3 to cell 1 then prints cell 1 (g)<br />
          &lt;++++++[&gt;&gt;++++++&lt;&lt;-]&gt;&gt;+++. makes cell 2 &#39;
          then prints<br />
          &lt;---. minus 3 from cell 1 prints (d)<br />
          ---. minus 3 from cell 1 prints (a)<br />
          &lt;+++++[&gt;+++++&lt;-]&gt;-. adds 24 to cell 1 then prints(y)<br />
        </p>
      </div>
    </div>
    <hr />
    <div class="project-info">
      <RepoInfo
        :repo="numbersOrDie.repo"
        :title="numbersOrDie.title"
        :techs="numbersOrDie.techs"
        createdDateP="2016-09-25"
      />
      <h3>What is it?</h3>
      <p>
        This is the first program created without any kind of direction. It's a
        game where you everyone has an amount of 4 kinds of money. The more of a
        kind of money there is the less it's worth. The player shoots any of
        these four kinds of money. If they hit an enemy, they will steal some of
        that kind of money from the enemy. If they miss, then that money is
        destroyed this will bring up the value of the shot money vs the other
        kinds of money because now there is less of it. Enemies spawn with a
        random amount of each of these kinds of money this also impacts the
        value vs other kinds of money. Yes this is insane.
      </p>
      <video width="500" controls>
        <source src="./videos/numbers_or_die.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GBA from "../components/GBA.vue";
import GB from "../components/GB.vue";
import RepoInfo from "../components/RepoInfo.vue";

const hostingSite = "https://wgm.sarda.dev";

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
        `/versions/${event.target.value}/walk-good-maybe.gba`;
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
      shapesCanMoveAndSpeakImg:
        "https://github.com/sardap/ShapesCanMoveAndSpeak" +
        "/raw/master/example/shapes_move_speak_1.gif",
      vibesImg:
        "https://github.com/sardap" +
        "/vibes/blob/master/examples/clear_skys.png?raw=true",
      featuresDocLink:
        "https://developer.spotify.com/documentation" +
        "/web-api/reference/#endpoint-get-several-audio-features",
      resumeSite: {
        repo: "resume-site",
        title: "Resume Site",
        techs: [""]
      },
      gameboyMicroGameCollection: {
        repo: "gameboy_micro_game_collection",
        title: "Gameboy Micro Game Collection",
        techs: ["GB"]
      },
      chessBot: {
        repo: "chessbot",
        title: "Chess Bot",
        techs: ["Discord API", "Image generation", "redis", "Docker"]
      },
      pickUpBot: {
        repo: "pickupbot",
        title: "Pick Up bot",
        techs: ["Discord API", "YouTube-api", "Docker"]
      },
      muhBot: {
        repo: "muhbot",
        title: "Muh Bot",
        techs: ["Discord API", "Google speech API", "redis", "Docker"]
      },
      isItSka: {
        repo: "IsItSka",
        title: "Is it ska?",
        techs: ["Spotify API", "scikit-learn", "Docker", "Flask"]
      },
      vibes: {
        repo: "vibes",
        title: "Vibes",
        techs: ["Open Weather API", "Discord API", "React", "Docker"]
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
      },
      capstone: {
        repo: "Capstone-2019-Data-Sharing",
        title: "Final year uni Project",
        techs: ["Flask", "Blockchain", "Docker"]
      },
      temptris: {
        repo: "Temptris",
        title: "Temptris",
        techs: ["Monogame", "Open Weather"]
      },
      pascalBrainFuck: {
        repo: "PascalBrainFuck",
        title: "Pascal Brain Fuck",
        techs: ["Bad words"]
      },
      numbersOrDie: {
        repo: "NumbersOrDie",
        title: "Numbers or Die",
        techs: ["Swingame"]
      },
      shapesCanMoveAndSpeak: {
        repo: "ShapesCanMoveAndSpeak",
        title: "Shapes can move and speak",
        techs: ["Swingame"]
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

.code-text {
  padding-left: 20px;
  padding-block-start: 20px;
  padding-block-end: 20px;
}

.code-block {
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  background: #1e1e1e;
  color: #5394c4;
}

#vibe-img {
  max-width: 480px;
}

#chess-img {
  max-width: 240px;
  max-height: 240px;
}

.play-button {
  width: 100px;
  height: 30px;
}
</style>
