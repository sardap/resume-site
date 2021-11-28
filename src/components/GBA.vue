<template>
  <div>
    <div v-if="showGba">
      <embed :src="url" width="480" height="320" />
      <p>A: Key Z, B: Key X, Select: Key Backspace, Start: Enter</p>
      <p>Pause: ESC</p>
      <br />
    </div>
    <div v-else>
      <p>
        Embed GBA is not supported on mobile download it
        <a :href="link">here</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    url: String,
  },
  data() {
    const showGba = window.innerWidth > 500;
    let link = null;
    if (!showGba) {
      link = `https${(this.url as string).split("https")[2]}`;
    }

    return {
      link: link,
      showGba: showGba,
    };
  },
})
export default class GBA extends Vue {
  url!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
