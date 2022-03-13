<template>
  <body>
    <ul>
      <a><router-link to="/"><img src="../../assets/design/favicon.png" height="60px"></router-link></a>  
      <li><a style="text-decoration: none; margin" id="name">Saniee</a></li>
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
li a {
  font-family: 'Sanchez', serif;
  font-size: 18pt;
  vertical-align: middle;
  color: #1A1A1A;
  padding: 53px 0px;
  text-decoration: none;

  &.router-link-exact-active {
    text-decoration: underline;
    color: #27EDE3;
    background-color: #1A1A1A;
  }
}
</style>