<template>
  <body>
    <ul>
      <a><router-link to="/"><img src="../../assets/design/favicon.png" height="60px"></router-link></a>  
      <li><a style="text-decoration: none; margin" id="name">Saniee</a></li>
      <li class="push"></li>
      <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" @click="show"/>
    </ul>
    <div v-if="showNav">
      <div id="nav-dropdown">
          <li class="push"></li>
          <li><a><router-link to="/">Home</router-link></a></li> 
          <li><a><router-link to="/mygames">My Games</router-link></a></li>  
          <li><a><router-link to="/code_py">Code.py</router-link></a></li>
          <li><a><router-link to="/myfavoritefilmsserials">My Favorite Films/Serials</router-link></a></li>
          <li><a><router-link to="/about">About Me</router-link></a></li>
          <br>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: "NavMobile",

  data: () => {
      return {
          showNav: false
      }
  },  

  methods: {
      show() {
          this.showNav = !this.showNav;
          console.log(this.showNav);
      }
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap%27');
#name {
  font-family: 'Sanchez', serif;
  font-size: 26.258pt;
  margin: 16px;
}
img {
  margin: 8px;
}
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #27EDE3;
}
.push {
  margin-right: auto;
}
li {
    list-style-type: none;
}
li a {
  font-family: 'Sanchez', serif;
  font-size: 18pt;
  vertical-align: middle;
  color: #1A1A1A;
  padding: 0px 0px;
  text-decoration: none;

  &.router-link-exact-active {
    text-decoration: underline;
    color: #27EDE3;
    background-color: #1A1A1A;
  }
}
#nav-dropdown {
    background: #27EDE3;
    transition: 1s transform cubic-bezier(.17,.67,0,1);
}
</style>