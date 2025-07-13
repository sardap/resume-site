<script setup lang="ts">
import moment from 'moment'
import { computed, ref, type PropType } from 'vue'
import { Technologies } from '@/consts'
import type { CompleteRepo } from '@/backend'

const props = defineProps({
  complete: {
    type: Object as PropType<CompleteRepo>,
    required: false
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
})

const sectionId = ref(props.title.replace(` `, `_`))
const resolvedCreatedDate = computed(() => getCreatedDate())

function getCreatedDate() {
  let createdAt: string
  if (!props.createdDate) {
    if (props.complete) {
      createdAt = props.complete.repo.created_at
    } else {
      return null
    }
  } else {
    createdAt = props.createdDate
  }

  return moment(createdAt).local().format('YYYY-MM-DD')
}
</script>

<template>
  <div :id="sectionId">
    <div>
      <h2>
        <a
          v-if="complete"
          :href="`https://github.com/sardap/${complete.repo.name}`"
          target="_blank"
          >{{ title }}</a
        >
        <span v-else>{{ title }}</span>
      </h2>
      <a :href="`#${sectionId}`">Copy Link to this section</a>
    </div>
    <table v-if="complete">
      <tbody>
        <tr>
          <th>Created Date</th>
          <th>Languages</th>
          <th>Technologies</th>
        </tr>
        <tr>
          <td>{{ resolvedCreatedDate }}</td>
          <td>{{ complete?.langs.join(', ') }}</td>
          <td>{{ techs.map((i) => i.toString()).join(', ') }}</td>
        </tr>
      </tbody>
    </table>
    <div class="border" v-if="complete">
      <div id="card">
        <div v-if="complete && complete.repo.stargazers_count > 0">
          <p class="card-header">Stars</p>
          <p>{{ complete.repo.stargazers_count }}</p>
        </div>
        <div>
          <p class="card-header" style="margin-top: 10px">Commits</p>
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
