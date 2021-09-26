<template>
  <div id="app">
    <NavDesktop v-if="!mobileView" />
    <NavMobile v-if="mobileView" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import NavDesktop from "./components/partials/NavDesktop.vue";
import NavMobile from "./components/partials/NavMobile.vue";
import Footer from "./components/partials/Footer.vue";
export default {
  name: "app",

  data: () => {
    return {
      mobileView: false,
      showNav: false,
    };
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
  },

  components: {
    NavDesktop,
    NavMobile,
    Footer,
  },

  created() {
    this.handleView();
  },

  metaInfo: {
    title: "Saniee.rf.gd",
    titleTemplate: "%s | Saniee.rf.gd",
  },
};
</script>
<style lang="scss">
body {
  background-color: #1a1a1a;
  color: white;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
