<template>
  <div>
    <iframe
      title="WasmBoy Iframe Embed"
      width="320"
      height="288"
      allowfullscreen="true"
      :src="fullURL"
    >
    </iframe>
    <p>A: Key X, B: Key z, Select: Key Backspace, Start: Enter</p>
    <p>Pause: ESC</p>
    <br />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    url: String
  },
  data() {
    return {
      fullURL: `https://wasmboy.app/iframe/?rom-url=${this.url}`
    };
  }
})
export default class GB extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
