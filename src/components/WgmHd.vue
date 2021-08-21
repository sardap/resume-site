<template>
  <div>
    <div v-if="hideGame" class="play-button">
      <button v-on:click="hideGame = false">
        Play!
      </button>
      <p>This can take a while to load...</p>
    </div>
    <div v-if="!hideGame">
      <iframe :src="url" width="960" height="640" allow="autoplay" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    url: String
  },
  data() {
    return {
      hideGame: true
    };
  }
})
export default class WgmHd extends Vue {
  url!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background: url(https://media1.giphy.com/media/XZL090E18RxixkON2U/giphy.gif)
    center no-repeat;
}
div.sub,
iframe {
  margin-left: -190px;
  background-color: #777;
}

.play-button {
  background: grey;
  padding: 100px;
}

button {
  width: 100px;
  height: 30px;
}
</style>
