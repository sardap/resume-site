<template>
  <div class="home">
    <div>
      <img
        alt="Photo of Paul"
        :src="`./photos/${paulPhotoActive}`"
        @click="photoClick"
      />
      <p>My name is Paul I turn sleep deprivation into compiler errors</p>
    </div>
    <div></div>
    <h2>Key Points</h2>
    <div class="wrapper">
      <ul class="aboutul">
        <li>
          Languages I have some level of skill in:<br />
          Go, C#, C, Python, Typescript, C++, Pascal and Java
        </li>
        <li>
          Technologies I have some level in proficiency order
          <ul>
            <li>
              AWS including but not limited to: SQS, EC2, ECS, Route53, S3 and
              Cloud formation.
            </li>
            <li>Docker and Kubernetes</li>
            <li>Databases: (Redis, Mongo, Postgres and SQL)</li>
            <li>Linux</li>
            <li>WSDL's</li>
            <li>REST APIS</li>
            <li>Unity</li>
          </ul>
        </li>
        <li>Have been programming for {{ yearsProgramming }} Years</li>
        <li>
          Programming professionally for {{ yearsProfProgramming }} Year{{
            yearsProfProgramming > 1 ? s : ""
          }}
        </li>
        <li>
          Have been involved with 4 papers
          <a href="https://scholar.google.com.au/citations?user=QfnqhZ4AAAAJ"
            >Google scholar</a
          >
        </li>
        <li>
          Constantly work on
          <router-link to="/projects">personal projects</router-link> which you
          can play in this browser!
        </li>
      </ul>
    </div>
    <h2>Work Experience</h2>
    <div class="wrapper" v-for="(row, index) in workExpRow" :key="index">
      <div class="workexp">
        <h3 class="company">
          <a :href="row.companyLink">{{ row.company }}</a>
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
    <div class="wrapper">
      <h3 class="company">Swinburne University of Technology</h3>
      <div class="workexp">
        <div class="role">
          <p>Course</p>
          <p>Bachelor of Computer Science</p>
        </div>
        <div class="date">
          <p>Awarded Date</p>
          <p>2019</p>
        </div>
        <div class="date">
          <p>GPA</p>
          <p>3.76</p>
        </div>
        <p class="wrapper">Other key info</p>
        <p class="responsibilities"></p>
        <ul>
          <li>SSEE Summer Scholarship 2017-2018 recipient</li>
          <li>Achieved 100 in Intro to Programming</li>
          <li>Achieved 100 in Object Oriented Programming</li>
          <li>
            Achieved over 90% in
            <ul>
              <li>Final year project Semester 2</li>
              <li>Languages in software development</li>
              <li>Topics in Computer Science</li>
              <li>Data Structures and Patterns</li>
              <li>Fundamentals of Data Management</li>
              <li>Creating Web Applications</li>
              <li>Software Development for Mobile Devices</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <h3 class="company">Swinburne University of Technology</h3>
      <div class="workexp">
        <div class="role">
          <p>Course</p>
          <p>Certificate IV in Integrated Technology Networking</p>
        </div>
        <div class="date">
          <p>Awarded Date</p>
          <p>2015</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { Options, Vue } from "vue-class-component";

const paulPhoto = "face.png";
const paulPhotoReal = "faceFunny.png";

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
      workExpRow: [
        {
          company: "Telstra",
          companyLink: "https://www.telstra.com.au/",
          role: "Software Engineer",
          responsibilities: "Good question",
          links: null,
          startDate: moment("02-2020", "MM-YYYY"),
          endDate: null
        },
        {
          company: "Telstra",
          companyLink: "https://www.telstra.com.au/",
          role: "Graduate Software Engineer",
          responsibilities:
            "12 Months Graduate Program including two rotations." +
            " Rotation one: with team which runs Atlassian tools" +
            " at Telstra. Was a programmer who worked on various" +
            " automation tools / dashboards to assist the team in" +
            " running said tools. Directly worked with Bamboo API," +
            " Jira API and Crowd API. AWS tools such as Lambda" +
            " functions (in GO), EC2, Route53, ECS and Cloudwatch." +
            " Rotation Two worked on adapters which talk directly to " +
            " 3G and 4G network elements. These adapters are written in" +
            " Typescript using the loopback 4 framework. With communication" +
            " to the network elements being" +
            " via wsdl, HTTP or a raw TCP connection sending a byte stream." +
            " Giving me great experience in talking to legacy systems from" +
            " modern systems. Created and enhanced bamboo plans to" +
            " automaticity test and create these plans.",
          links: null,
          startDate: moment("01-2020", "MM-YYYY"),
          endDate: moment("02-2021", "MM-YYYY")
        },
        {
          company: "Defence Science and Technology Group",
          companyLink: "https://www.dst.defence.gov.au/",
          role: "Summer Vacation Intern",
          responsibilities:
            "Worked as part of a team as 3 with Cyber Electronic Warfare" +
            " Division" +
            " on creating a 4G simulation to allow better security testing." +
            " Including topology discovery" +
            " Personally wrote A freeDiameter plugin in C which allowed us to" +
            " send pure diameter traffic more easily enabling us to test" +
            " more." +
            " Simulation script in Python which would flood the network" +
            " analyse responses and would create a topology of the Diameter" +
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
          company: "Swinburne University of Technology",
          companyLink: "https://www.swinburne.edu.au/",
          role: "Research Intern",
          responsibilities:
            "Worked with Dr Alan Colman and Dr Jabed Morshed" +
            " on 4 Research papers which can all be found on Google scholar." +
            " Primary author for one paper was mostly responsible for" +
            " assisting with the design, Proof of concepts implementations.",
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
          startDate: moment("01-2017", "MM-YYYY"),
          endDate: moment("11-2019", "MM-YYYY")
        },
        {
          company: "Swinburne University of Technology",
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
      ],
      photoClickCount: 0,
      paulPhotoActive: paulPhoto
    };
  },
  methods: {
    photoClick() {
      this.photoClickCount++;
      if (this.photoClickCount > 50) {
        this.paulPhotoActive = paulPhotoReal;
      }
    }
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
