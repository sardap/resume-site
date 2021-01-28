<template>
  <div>
    <h1>Paul Sarda</h1>
    <a href="mailto:paul@sarda.dev">
      <p>paul@sarda.dev</p>
    </a>
    <a href="https://github.com/sardap?tab=repositories">
      <p>Github: https://github.com/sardap</p>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {}
</script>
<style scoped></style>
