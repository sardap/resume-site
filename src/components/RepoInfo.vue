<script setup lang="ts">
import moment from "moment";
import { onMounted, ref, type PropType } from "vue";
import { Technologies } from "@/consts";
import type { CompleteRepo } from "@/backend";

const props = defineProps({
  complete: {
    type: Object as PropType<CompleteRepo>,
    required: true
  },
  title: {
    type: String,
    required: true
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
  let createdAt: string;
  if (!props.createdDate) {
    createdAt = props.complete.repo.created_at;
  } else {
    createdAt = props.createdDate;
  }

  createdDate.value = moment(createdAt)
    .local()
    .format("YYYY-MM-DD");

  starGazers.value = props.complete.repo.stargazers_count;
}
</script>

<template>
  <div :id="complete.repo.name.replace(` `, `_`)">
    <div>
      <h2><a :href="`https://github.com/sardap/${complete.repo.name}`" target="_blank">{{ title }}</a></h2>
      <a :href="`#${complete.repo.name.replace(` `, `_`)}`">Copy Link to this section</a>
    </div>
    <table>
      <tr>
        <th>Created Date</th>
        <th>Languages</th>
        <th>Technologies</th>
      </tr>
      <tr>
        <td>{{ createdDate }}</td>
        <td>{{ complete.langs.join(", ") }}</td>
        <td>{{ techs.map(i => i.toString()).join(", ") }}</td>
      </tr>
    </table>
    <div class="border">
      <div id="card">
        <div v-if="starGazers && starGazers > 0">
          <p class="card-header">Stars</p>
          <p>{{ starGazers }}</p>
        </div>
        <div>
          <p class="card-header" style="margin-top: 10px;">Commits</p>
          <p>{{ complete.commits }}</p>
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
