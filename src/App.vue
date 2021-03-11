<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from './components/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
<style lang="scss">
body {
  background-color: #1A1A1A;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: gray;

    &.router-link-exact-active {
      color: aqua;
    }
  }
}
</style>
