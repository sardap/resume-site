<template>
  <div class="home">
    <div>
      <img alt="Photo of Paul" src="./photos/face.png" />
      <p>My name is paul I turn sleep deprivation into compiler errors</p>
    </div>
    <div></div>
    <h2>About</h2>
    <div class="wrapper">
      <ul>
        <li>Have been programming for {{ yearsProgramming }} Years</li>
        <li>
          Programming professionally for {{ yearsProfProgramming }} Year{{
            yearsProfProgramming > 1 ? s : ""
          }}.
        </li>
        <li>
          Have been involed with 4 Papers
          <a href="https://scholar.google.com.au/citations?user=QfnqhZ4AAAAJ"
            >Google scholar</a
          >
        </li>
        <li>
          Constaly work on
          <router-link to="/projects">personal projects</router-link> which you
          can play in this browser!
        </li>
      </ul>
    </div>
    <h2>Key Skills</h2>

    <h2>Work Experience</h2>
    <div class="wrapper">
      <table>
        <tr>
          <th v-for="(col, index) in workExpCol" :key="index">{{ col }}</th>
        </tr>
        <tr v-for="(row, index) in workExpRow" :key="index">
          <td>
            <a :href="row.companyLink">{{ row.comapny }}</a>
          </td>
          <td>{{ row.role }}</td>
          <td>{{ row.responsibilities }}</td>
          <td>{{ `${row.startDate.year()}-${row.startDate.month() + 1}` }}</td>
          <td>
            {{
              row.endDate
                ? `${row.endDate.year()}-${row.endDate.month() + 1}`
                : "current"
            }}
          </td>
        </tr>
      </table>
    </div>
    <h2>Education</h2>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {
    return {
      yearsProgramming: Math.floor(
        moment
          .duration(moment(new Date()).diff(moment("2016", "YYYY")))
          .asYears()
      ),
      yearsProfProgramming: Math.floor(
        moment
          .duration(moment(new Date()).diff(moment("2020", "YYYY")))
          .asYears()
      ),
      workExpCol: [
        "Company",
        "Role",
        "Responsibilities",
        "Start Date",
        "End Date"
      ],
      workExpRow: [
        {
          comapny: "Telstra",
          companyLink: "https://www.telstra.com.au/",
          role: "Graduate Software Engineer",
          responsibilities: "Good question",
          startDate: moment("01-2020", "MM-YYYY"),
          endDate: null
        },
        {
          comapny: "Swinburne University of Technology",
          companyLink: "https://www.swinburne.edu.au/",
          role: "Research Intern",
          responsibilities:
            "Worked with other researchers on the following projects " +
            "Programming fundamentals in Pascal, C and Ruby. Additionally" +
            " worked in programming help desk where intro students could" +
            " get additional 1 on 1 help.",
          startDate: moment("02-2017", "MM-YYYY"),
          endDate: moment("11-2019", "MM-YYYY")
        },
        {
          comapny: "Swinburne University of Technology",
          companyLink: "https://www.swinburne.edu.au/",
          role: "Classroom Tutor / Laboratory demonstrator",
          responsibilities:
            "Was a classroom tutor for Intro to programming, Covering " +
            "Programming fundamentals in Pascal, C and Ruby. Additionally" +
            " worked in programming help desk where intro students could" +
            " get additional 1 on 1 help.",
          startDate: moment("02-2017", "MM-YYYY"),
          endDate: moment("11-2019", "MM-YYYY")
        }
      ]
    };
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
div {
  margin-block-end: 10px;
}

p {
  margin: 2px;
}

.wrapper {
  text-align: center;
}

ul {
  display: inline-block;
  text-align: left;
}

th {
  padding-left: 9px;
  padding-right: 9px;
}

tr {
  padding-block-end: 10px;
}

table,
th,
td {
  border: 1px solid black;
}
</style>
