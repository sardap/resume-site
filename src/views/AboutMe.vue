<script setup lang="ts">
import { ref } from 'vue';
import moment from "moment";


const paulPhotoFormal = "faceFormal.png";
const paulPhotoOld = "faceFormalOld.png";
const paulPhotoReal = "faceReal.png";
const paulPhotoFunny = "faceFunny.png";

const yearsProgramming = Math.floor(
    moment.duration(moment(new Date()).diff(moment("2016", "YYYY"))).asYears()
);
const yearsProfProgramming = yearsProgramming - 3

const photoLink = ref(paulPhotoFormal);
const photoClickCount = ref(0);

function PhotoClick() {
    photoClickCount.value++;

    if (photoClickCount.value >= 9) {
        photoLink.value = paulPhotoReal;
    } else if (photoClickCount.value >= 6) {
        photoLink.value = paulPhotoFunny;
    } else if (photoClickCount.value >= 3) {
        photoLink.value = paulPhotoOld;
    } else {
        photoLink.value = paulPhotoFormal;
    }
}

interface WorkLink {
    name: string;
    link: string;
}

interface WorkHistory {
    company: string;
    companyLink: string;
    role: string;
    description: string;
    startDate: moment.Moment;
    endDate: moment.Moment | null;
    languages: string[];
    technologies: string[];
    links: WorkLink[];
}

const workHistories: WorkHistory[] = [
    {
        company: "Atlassian",
        companyLink: "https://www.atlassian.com/",
        role: "Software Engineer",
        description:
            "Working with the Reliability Process Group creating automation's" +
            " for company incidents including" +
            " incident ticket creation, Sending automated slack messages," +
            " etc. Utilising Python, Jira API," +
            " Confluence API, Slack API and AWS.",
        startDate: moment("03-2022", "MM-YYYY"),
        endDate: null,
        languages: ["Python"],
        technologies: ["AWS", "Jira API", "Confluence API", "Slack API", "Opsgiene API", "Docker", "Flask"],
        links: [],
    },
    {
        company: "BAE Systems",
        companyLink: "https://www.baesystems.com/en/home",
        role: "Software Engineer",
        description:
            "Worked on a SADM Responsibilities included:" +
            " developing SADM in C++ 20 using EnTT, Creating" +
            " testing automation tools in python" +
            " and Dockerizing SADM.",
        startDate: moment("07-2021", "MM-YYYY"),
        endDate: moment("03-2022", "MM-YYYY"),
        languages: ["C++ 20", "Python"],
        technologies: ["EnTT", "Docker"],
        links: [
            {
                name: "SADM",
                link: "https://www.baesystems.com/en-aus/what-we-do/sadm"
            }
        ],
    },
    {
        company: "Telstra",
        companyLink: "https://www.telstra.com.au/",
        role: "Software Engineer",
        description:
            "12-Months Graduate Program followed by joining the network" +
            " software team including two rotations:" +
            " Rotation one: Agile tools team member. Worked on" +
            " various automation tools / dashboards including which" +
            " involved using Bamboo API," +
            " Jira API and Crowd API and the following AWS tools including" +
            " Lambda functions (in GO), EC2, Route53, ECS and Cloudwatch." +
            " Rotation Two: Worked on Adapters which talk directly to" +
            " 2G, 3G and 4G network elements. Adapters are written in" +
            " Typescript using the loopback 4 framework, with" +
            " communication to the network elements being via wsdl," +
            " HTTP or a raw TCP connection sending a byte stream." +
            " Responsible for creating and enhancing bamboo plans," +
            " including automatically testing. This work provided with" +
            " great experience in talking to legacy systems from modern" +
            " systems.",
        startDate: moment("01-2020", "MM-YYYY"),
        endDate: moment("07-2021", "MM-YYYY"),
        languages: ["Typescript", "Python", "Go", "Java"],
        technologies: ["Bamboo API", "Jira API", "Crowd API", "AWS", "Loopback 4", "WSDL", "Docker"],
        links: [],
    },
    {
        company: "Defense Science and Technology Group",
        companyLink: "https://www.dst.defence.gov.au/",
        role: "Summer Vacation Intern",
        description:
            "Cyber Electronic Warfare Division. Worked as part of a team of" +
            " 3 to create a 4G simulation allowing" +
            " for better security testing." +
            " Included topology discovery. Personally wrote a free Diameter" +
            " plugin in C, allowing us to send pure Diameter" +
            " traffic more easily" +
            " and enabling us to test more. Simulation script was written in" +
            " Python which would flood the network, analyse responses, and" +
            " then create a topology of the Diameter network based on those" +
            " responses.",
        startDate: moment("11-2018", "MM-YYYY"),
        endDate: moment("02-2019", "MM-YYYY"),
        languages: ["C", "Python"],
        technologies: ["4G", "Diameter", "Docker"],
        links: [
            {
                name: "presentation on the topic",
                link: "https://youtu.be/URRjnjwJKfw?t=910"
            }
        ],
    },
    {
        company: "Swinburne University of Technology",
        companyLink: "https://www.swinburne.edu.au/",
        role: "Research Intern",
        description:
            "Worked with Dr Alan Colman and Dr Jabed Morshed on four Research" +
            " papers on BlockChain, one of" +
            " which I was primary author." +
            " Papers were presented at the 2018 17th IEEE International" +
            " Conference On Trust, Security And Privacy In Computing And" +
            " Communications and the 12th IEEE International Conference" +
            " On Big Data Science And Engineering (TrustCom/BigDataSE).",
        startDate: moment("01-2017", "MM-YYYY"),
        endDate: moment("11-2019", "MM-YYYY"),
        languages: ["C#", "Python"],
        technologies: ["Blockchain", "Research"],
        links: [
            {
                name:
                    "Blockchain versus database: a critical analysis cites" +
                    " (cites 40)",
                link: "https://ieeexplore.ieee.org/abstract/document/8456055/"
            },
            {
                name:
                    "Blockchain as a notarization service for data sharing with" +
                    " personal data store (cites 21)",
                link: "https://ieeexplore.ieee.org/abstract/document/8456052/"
            },
            {
                name:
                    "Blockchain for fraud prevention: a work-history fraud" +
                    " prevention system (cites 18)",
                link: "https://ieeexplore.ieee.org/abstract/document/8456149/"
            },
            {
                name:
                    "Continuous authorization in Subject-Driven data sharing" +
                    " Using Wearable Devices",
                link: "https://ieeexplore.ieee.org/abstract/document/8887319/"
            }
        ],
    },
    {
        company: "Swinburne University of Technology",
        companyLink: "https://www.swinburne.edu.au/",
        role: "Classroom Tutor / Laboratory demonstrator",
        description:
            "Introduction to Programming taught in Pascal, C and" +
            " ruby for Higher-Ed students, Responsible" +
            " for lesson plan curriculum delivery over 2-hour" +
            " period to up to 25 students, work assessment, and proctoring" +
            " tests. Also includes HelpDesk consultation assisting students" +
            " one-on-one.",
        startDate: moment("01-2017", "MM-YYYY"),
        endDate: moment("11-2019", "MM-YYYY"),
        languages: ["Pascal", "C", "Ruby"],
        technologies: ["Doubtfire"],
        links: [],
    }
];

function getWorkingLength(work: WorkHistory): string {
    const endDate = work.endDate ? work.endDate : moment(new Date());
    const startDate = work.startDate;
    const duration = moment.duration(endDate.diff(startDate));

    if (duration.asYears() > 1) {
        let result = `${duration.asYears().toFixed(0)} Year`;
        if (duration.asYears() >= 2) {
            result += "s";
        }
        return result;
    }

    return `${duration.asMonths().toFixed(0)} Months`;
}

</script>

<template>
    <div>
        <img alt="Photo of Paul" :src="`./photos/${photoLink}`" @click="PhotoClick" />
        <p>Backend Software Developer.</p>
    </div>
    <br />
    <h2>Key Points</h2>
    <div class="about-me">
        <ul class="about-ul">
            <li>
                Languages I have used in the last 2 years:<br />
                Python, Typescript, Javascript, Go, Rust, C++ and C
            </li>
            <li>
                Languages I have used to a large amount but not recently:<br />
                Java, C#, Pascal and Kotlin
            </li>
            <li>
                Technologies I have some level proficiency in:
                <ul>
                    <li>
                        AWS including but not limited to: SQS, EC2, ECS, Route53, S3 and
                        Cloud formation.
                    </li>
                    <li>Docker and Kubernetes</li>
                    <li>Databases: (Redis, Mongo, Postgres and SQL)</li>
                    <li>Linux</li>
                    <li>WSDL's and SOAP interfaces</li>
                    <li>REST APIS</li>
                    <li>Unity</li>
                </ul>
            </li>
            <li>
                Awarded Bachelor of Computer Science from Swinburne University in
                2019.
            </li>
            <li>Have been programming for {{ yearsProgramming }} Years</li>
            <li>
                Programming professionally for {{ yearsProfProgramming }} Years
            </li>
            <li>
                Published researcher through involvement with 4 papers (primary author on one)
                <a href="https://scholar.google.com.au/citations?user=QfnqhZ4AAAAJ">Google scholar</a>
            </li>
            <li>
                Constantly work on
                <router-link to="/personal-projects">personal projects</router-link> some you
                see in this browser!
            </li>
        </ul>
    </div>
    <hr />
    <h2>Work Experience</h2>
    <div v-for="work in workHistories">
        <h3><a :href="work.companyLink" target="_blank">{{ work.company }}</a></h3>
        <table>
            <tr>
                <th>Role</th>
                <th>Languages</th>
                <th>Technologies</th>
            </tr>
            <tr>
                <td>{{ work.role }}</td>
                <td>{{ work.languages.join(', ') }}</td>
                <td>{{ work.technologies.join(', ') }}</td>
            </tr>
            <tr>
                <br />
            </tr>
            <tr>
                <th>Start</th>
                <th>End</th>
                <th>Length</th>
            </tr>
            <tr>
                <td>{{ work.startDate.format("YYYY-MM") }}</td>
                <td>{{ work.endDate ? work.endDate.format("YYYY-MM") : `Current` }}</td>
                <td>{{ getWorkingLength(work) }}</td>
            </tr>
        </table>
        <br />
        <p>{{ work.description }}</p>
        <div v-if="work.links.length > 0">
            <ul class="about-ul">
                <li v-for="link in work.links"><a :href="link.link">{{ link.name }}</a></li>
            </ul>
        </div>
        <hr v-if="work != workHistories[workHistories.length - 1]" class="work-divider" />
    </div>
    <hr />
    <h2>Education</h2>
    <div>
        <div>
            <h3>Swinburne University of Technology</h3>
            <div>
                <table>
                    <tr>
                        <th>Course</th>
                        <th>Awarded date</th>
                        <th>GPA</th>
                    </tr>
                    <tr>
                        <td>Bachelor of Computer Science</td>
                        <td>2019</td>
                        <td>3.76</td>
                    </tr>
                </table>
                <p>Other info please hire me</p>
                <div class="about-me">
                    <ul class="about-ul">
                        <li>SSEE Summer Scholarship 2017-2018 recipient</li>
                        <li>Achieved 100 in Introduction to Programming</li>
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
        </div>
    </div>
</template>

<style>
h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: x-large;
}

th {
    font-weight: bold;
    padding-right: 10px;
}

table {
    width: 100%;
    table-layout: fixed;
}

.work-divider {
    height: 1px;
    opacity: 0.25;
}

.about-me {
    display: flex;
    justify-content: center;
    text-align: left;
}
</style>
