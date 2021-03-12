<template> 
  <div id="app">
    <Nav />
    <router-view />
    <BackToTop />
    <Footer />
  </div>
</template>
<script>
import Nav from './components/partials/Nav.vue';
import Footer from './components/partials/Footer.vue'
import BackToTop from './components/BackToTop.vue'
export default {
  name: 'app',
  components: {
    Nav,
    Footer,
    BackToTop
  }
}
</script>
<style lang="scss">
body {
  background-color: #1A1A1A;
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
