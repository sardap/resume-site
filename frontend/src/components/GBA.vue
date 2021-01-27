<template>
  <div>
    <embed :src="url" width="480" height="320" />
    <p>A: Key Z, B: Key X, Select: Key Backspace, Start: Enter</p>
    <p>Pause: ESC</p>
    <br />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    url: String
  }
})
export default class GBA extends Vue {
  url!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
