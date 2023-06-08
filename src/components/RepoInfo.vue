<script setup lang="ts">
import moment from "moment";
import { onMounted, ref, type PropType } from "vue";
import { Technologies, backendSite } from "@/consts";
import { getCommits, getRepo } from "@/backend";

const props = defineProps({
  repo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  languages: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  techs: {
    type: Array as PropType<Technologies[]>,
    required: true
  },
  createdDate: {
    type: String,
    required: false
  }
});

onMounted(async () => {
  await getRepoInfo();
});

const createdDate = ref<string | null>(null);
const starGazers = ref<number | null>(null);
const commits = ref<number | null>(null);

const getRepoInfo = async () => {
  const repo = await getRepo(props.repo);

  let createdAt: string;
  if (!props.createdDate) {
    createdAt = repo.created_at;
  } else {
    createdAt = props.createdDate;
  }

  createdDate.value = moment(createdAt)
    .local()
    .format("YYYY-MM-DD");

  starGazers.value = repo.stargazers_count;

  commits.value = await getCommits(props.repo);
}
</script>

<template>
  <div :id="repo.replace(` `, `_`)">
    <div>
      <h2><a :href="`https://github.com/sardap/${repo}`" target="_blank">{{ title }}</a></h2>
      <a :href="`#${repo.replace(` `, `_`)}`">Copy Link to this section</a>
    </div>
    <table>
      <tr>
        <th>Created Date</th>
        <th>Languages</th>
        <th>Technologies</th>
      </tr>
      <tr>
        <td v-if="createdDate">{{ createdDate }}</td>
        <td v-else>Loading...</td>
        <td v-if="languages.length > 0">{{ languages.join(", ") }}</td>
        <td v-else>Loading...</td>
        <td>{{ techs.map(i => i.toString()).join(", ") }}</td>
      </tr>
    </table>
    <div class="border">
      <div id="card">
        <!-- <div id="created-date">
          <p class="card-header">Created Date</p>
          <p v-if="createdDate">{{ createdDate }}</p>
          <p v-else>Loading...</p>
        </div>
        <div id="languages">
          <p class="card-header">Languages</p>
          <p v-if="languages.length > 0" :key="languages.length">{{ languages.join(", ") }}</p>
          <p v-else>Loading...</p>
        </div>
        <div id="technologies">
          <p class="card-header">Technologies</p>
          <p>{{ techs.map(i => i.toString()).join(", ") }}</p>
        </div> -->
        <div v-if="starGazers && starGazers > 0">
          <p class="card-header">Stars</p>
          <p>{{ starGazers }}</p>
        </div>
        <div>
          <p class="card-header" style="margin-top: 10px;">Commits</p>
          <p v-if="commits" :key="commits">{{ commits }}</p>
          <p v-else>Loading...</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
table {
  width: 100%;
  table-layout: fixed;
}

th {
  padding-right: 0px;
  font-weight: bold;
}

p {
  margin: 1px;
}

.info-line {
  padding: 5px;
}

#card {
  max-width: 30em;
}

#created-date {
  display: inline-block;
  vertical-align: top;
  width: 33%;
}

#technologies {
  display: inline-block;
  vertical-align: top;
  width: 33%;
}

#languages {
  display: inline-block;
  vertical-align: top;
  width: 33%;
}

.card-header {
  font-weight: bold;
}

.border {
  max-width: 30em;
  margin: 0 auto;
  padding-block-start: 1em;
  padding-block-end: 1em;
}

.card-info {
  margin-left: auto;
  margin-right: auto;
}
</style>
