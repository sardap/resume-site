<template>
  <div>
    <iframe :src="url" width="275" height="430" allow="autoplay" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    url: String,
  },
  data() {
    return {
      hideGame: true,
    };
  },
})
export default class WgmHd extends Vue {
  url!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
