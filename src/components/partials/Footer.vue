<template>
    <body id="design">
        <ul>
            <li><a>©Saniee</a><a href="mailto:asamsku10@gmail.com"><img id="mail" src="../../assets/design/mail.png" width="60px"></a></li>
        </ul>
    </body>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap%27');
#design {
    color: #207974;
    font-family: 'Sanchez', serif;
    font-size: 18pt;
}
#mail { 
  float: right;
  margin: 0;
  padding: 0;
}
ul {
    list-style-type: none;
    text-align: left;
    background-color: #27EDE3;
    padding: 25px;
    margin: 0;
}
li a {
    font-family: 'Sanchez', serif;
    font-size: 18pt;
    color: #1A1A1A;
    margin: 8px;
}
</style>