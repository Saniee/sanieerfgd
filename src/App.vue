<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/mygames">My Games</router-link> |
      <router-link to="/code_py">Code.py</router-link> |
      <router-link to="/myfavoritefilmsserials">My Favorite Films/Serials</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: rgb(49, 48, 48);
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
