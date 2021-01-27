<template>
  <div class="home">
    <div>
      <img alt="Photo of Paul" src="./photos/face.png" />
      <p>My name is paul I turn sleep deprivation into compiler errors</p>
    </div>
    <div></div>
    <h2>About</h2>
    <div class="wrapper">
      <ul class="aboutul">
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
    <div class="wrapper" v-for="(row, index) in workExpRow" :key="index">
      <div class="workexp">
        <h3 class="company">
          <a :href="row.companyLink">{{ row.comapny }}</a>
        </h3>
        <div class="role">
          <p>Role</p>
          <p>{{ row.role }}</p>
        </div>
        <div class="date">
          <p>End Date</p>
          <p>
            {{
              row.endDate
                ? `${row.endDate.year()}-${`${row.endDate.month() +
                    1}`.padStart(2, "0")}`
                : "current"
            }}
          </p>
        </div>
        <div class="date">
          <p>Start Date</p>
          <p>
            {{ row.startDate.year() }}-{{
              `${row.startDate.month() + 1}`.padStart(2, "0")
            }}
          </p>
        </div>
        <p class="responsibilities">{{ row.responsibilities }}</p>
        <ul class="links" v-if="row.links !== null">
          <li v-for="(link, jndex) in row.links" :key="jndex">
            <a :href="link.link">{{ link.text }}</a>
          </li>
        </ul>
        <hr />
      </div>
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
          role: "Software Engineer",
          responsibilities: "Good question",
          links: null,
          startDate: moment("02-2020", "MM-YYYY"),
          endDate: null
        },
        {
          comapny: "Telstra",
          companyLink: "https://www.telstra.com.au/",
          role: "Graduate Software Engineer",
          responsibilities:
            "12 Month Graduate Program inclduing two Rotations." +
            " Rotation one: with team which runs Atlassian tools" +
            " at telstra. Was a programmer who worked on varouis" +
            " automation tools / dashboards to assist the team in" +
            " running said tools. Directly worked with Bamboo API," +
            " Jira API and Crowd API. AWS tools such as Lambda" +
            " functions (in GO), EC2, Route53, ECS and Cloudwatch.",
          links: null,
          startDate: moment("01-2020", "MM-YYYY"),
          endDate: moment("02-2021", "MM-YYYY")
        },
        {
          comapny: "Defence Science and Technology Group",
          companyLink: "https://www.dst.defence.gov.au/",
          role: "Graduate Software Engineer",
          responsibilities:
            "Worked as part of a team as 3 with Cyber Electronic Warfare" +
            " Division" +
            " on creating a 4G simulation to allow better security testing." +
            " Inclduing topology discovery" +
            " Personaly wrote A freeDiameter plugin in C which allowed us to" +
            " send pure dimater traffic more easily enabling us to test" +
            " more." +
            " Simulation script in Python which would flood the network" +
            " anyalse responses and woudl create a topogly of the Diameter" +
            " network based on those responses",
          links: [
            {
              text: "presentation on the topic",
              link: "https://youtu.be/URRjnjwJKfw?t=910"
            }
          ],
          startDate: moment("11-2018", "MM-YYYY"),
          endDate: moment("02-2019", "MM-YYYY")
        },
        {
          comapny: "Swinburne University of Technology",
          companyLink: "https://www.swinburne.edu.au/",
          role: "Research Intern",
          responsibilities:
            "Worked with Dr Alan Colman and Dr Jabed Morshed" +
            " on 4 Reserach papers Which can all be found on google scholar." +
            " Primary author for one paper was mostly responsible for" +
            " assisting with the desgin, Proof of concepts implementations.",
          links: [
            {
              text:
                "Blockchain versus database: a critical analysis cites" +
                " (cites 40)",
              link: "https://ieeexplore.ieee.org/abstract/document/8456055/"
            },
            {
              text:
                "Blockchain as a notarization service for data sharing with" +
                " personal data store (cites 21)",
              link: "https://ieeexplore.ieee.org/abstract/document/8456052/"
            },
            {
              text:
                "Blockchain for fraud prevention: a work-history fraud" +
                " prevention system (cites 18)",
              link: "https://ieeexplore.ieee.org/abstract/document/8456149/"
            },
            {
              text:
                "Continuous Authorization in Subject-Driven Data Sharing" +
                " Using Wearable Devices",
              link: "https://ieeexplore.ieee.org/abstract/document/8887319/"
            }
          ],
          startDate: moment("01-2018", "MM-YYYY"),
          endDate: moment("11-2019", "MM-YYYY")
        },
        {
          comapny: "Swinburne University of Technology",
          companyLink: "https://www.swinburne.edu.au/",
          role: "Classroom Tutor / Laboratory demonstrator",
          responsibilities:
            "Introduction to Programming tought in Pascal, C and" +
            " ruby for Higher-Ed students, Responsible" +
            " for lesson plan additions, curriculum delivery over 2-hour" +
            " period to up to 25 students, work assessment, and scrutinising" +
            " tests. Also includes HelpDesk consultation assisting students" +
            " one-on-one.",
          links: null,
          startDate: moment("01-2017", "MM-YYYY"),
          endDate: moment("11-2019", "MM-YYYY")
        }
      ]
    };
  },
  methods: {}
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

.links {
  text-align: center;
  margin-block-start: 5px;
}

li {
  margin: 10px;
}

.role {
  float: left;
  text-align: center;
}

.date {
  margin-left: 15px;
  margin-right: 15px;
  float: right;
  text-align: center;
}

.workexp {
  display: inline-block;
  text-align: left;
  max-width: 45em;
}

.company {
  text-align: center;
}

.responsibilities {
  margin: 0 auto;
  clear: both;
}

.aboutul {
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

hr {
  margin-block-start: 30px;
}

table,
th,
td {
  border: 1px solid black;
}
</style>
