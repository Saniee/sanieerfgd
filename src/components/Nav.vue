<template>
  <body>
    <ul>
      <img src="../assets/images/favicon.png" height="60px">   
      <li><a style="text-decoration: none">Saniee</a></li>
      <li class="push"></li>
      <li><a><router-link to="/">Home</router-link></a></li> 
      <li><a><router-link to="/mygames">My Games</router-link></a></li>  
      <li><a><router-link to="/code_py">Code.py</router-link></a></li>
      <li><a><router-link to="/myfavoritefilmsserials">My Favorite Films/Serials</router-link></a></li>
      <li><a><router-link to="/about">About Me</router-link></a></li>
    </ul>
  </body>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 15px 0px;
  overflow: hidden;
  background-color: #27EDE3;
}
.push {
  margin-right: auto;
}
li a {
  vertical-align:middle;
  color: #1A1A1A;
  padding: 40px 5px;
  text-decoration: underline;

  &.router-link-exact-active {
    color: #27EDE3;
    background-color: #1A1A1A;
  }
}
</style>