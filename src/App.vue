<template>
  <div>
    <Header />
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/projects">projects</router-link>
    </div>
    <hr />
    <div class="buffer" />
    <router-view />
    <hr />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Header,
    Footer
  },
  created() {
    document.title = "Paul Sarda";
  }
})
export default class App extends Vue {}
</script>

<style>
.buffer {
  margin: 20px;
}

#app {
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #192129;
  background-color: azure;
}

#nav {
  padding: 3px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
