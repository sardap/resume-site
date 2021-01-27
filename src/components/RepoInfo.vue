<template>
  <div>
    <div>
      <a :href="repoLink"
        ><h2>{{ title }}</h2></a
      >
    </div>
    <div class="border">
      <div v-if="loaded !== false">
        <div class="parent info-line">
          <p class="child inline-block-child">Languages:</p>
          <p
            class="child inline-block-child"
            v-for="(lang, index) in langs"
            :key="index"
          >
            {{ index !== langs.length - 1 ? `${lang},` : lang }}
          </p>
        </div>
        <div class="parent info-line">
          <p class="child inline-block-child">Used Technologies:</p>
          <p
            class="child inline-block-child"
            v-for="(tech, index) in techs"
            :key="index"
          >
            {{ index !== techs.length - 1 ? `${tech},` : tech }}
          </p>
        </div>
        <div class="parent info-line">
          <p class="child inline-block-child">Craeted Date:</p>
          <p class="child inline-block-child">{{ createdDate }}</p>
        </div>
        <div v-if="starGazers > 0" class="parent">
          <p class="child inline-block-child">Stars:</p>
          <p class="child inline-block-child">{{ starGazers }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import moment from "moment";

const LangsBlockList = [
  "Makefile",
  "Shell",
  "HLSL",
  "CSS",
  "HTML",
  "ShaderLab"
];

@Options({
  props: {
    repo: String,
    title: String,
    techs: {
      type: Array,
      required: true
    }
  },
  methods: {
    getRepoInfo() {
      fetch(`https://api.github.com/repos/sardap/${this.repo}`)
        .then(response => response.json())
        .then(apiRes => {
          this.createdDate = moment(apiRes.created_at)
            .local()
            .format("YYYY-MM-DD");

          this.starGazers = apiRes.stargazers_count;

          fetch(apiRes.languages_url)
            .then(response => response.json())
            .then(apiRes => {
              this.langs = [];
              Object.keys(apiRes).forEach(i => {
                if (!LangsBlockList.includes(i)) {
                  this.langs.push(i);
                }
              });

              this.loaded = true;
            });
        });
    }
  },
  created() {
    this.getRepoInfo();
  },
  data() {
    return {
      repoLink: `https://github.com/sardap/${this.repo}`,
      loaded: false
    };
  }
})
export default class GBA extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/shared.css";
p {
  margin: 1px;
}

.info-line {
  padding: 5px;
}

.border {
  border-style: solid;
  border-width: thin;
  max-width: 25em;
  margin: 0 auto;
  padding-block-start: 1em;
  padding-block-end: 1em;
}
</style>
