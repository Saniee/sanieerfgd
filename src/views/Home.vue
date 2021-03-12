<template>
  <body>
    <div class="home" >
      <br>
        <div class="text">
          <h1 style="padding-left: 0px; padding-top: 150px;margin-bottom: 0px;margin-top: 0px;padding-right: 250px;">Hello. I'm</h1>
          <h1 style="padding-bottom: 250px;padding-right: 20px;" class="gradient">Saniee</h1>
        </div>
        <div class="svg">
        </div>
      <br>
    </div>
  </body>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap%27');
@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap%27');
.home {
  color: white;
  background: url('../assets/design/bg.svg');
  background-size: 100%;
  height: 650px;
}
.text {
  position: relative;
  font-family: 'Oswald', sans-serif;
  height: 650px;
  width: 50%;
  float: left;
  font-size: 22pt;
  margin: 0px;
}
.svg {
  background: url('../assets/design/bgDragon.svg');
  float: right;
  background-size: 90%;
  background-repeat: no-repeat;
  height: 650px;
  width: 49%;
}
/* Gradient */
.gradient {
    margin: 0px;
    font-size: 70pt;
    font-family: 'Sanchez', serif;
    user-select: none;
    color: white;
    background: repeating-linear-gradient( -45deg, red 0%, white 7.14%, rgb(0, 0, 0) 14.28%, rgb(0, 255, 255) 21.4%, #27EDE3 28.56%, blue 35.7%, purple 42.84%, red 50% );
    background-size: 100%;
    background-clip: border-box;
    background-size: 250vw 250vw;
    background-clip: unset;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-animation: n 1.5s both;
    animation: lgbt 10s linear infinite;
    animation-timing-function: ease, linear;
    animation-timing-function: ease-in-out;
}
/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}
@-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
}
@keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
}
/* keyframes */
@keyframes lgbt {
    0% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 100%;
    }
}
@keyframes p {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      opacity: 1;
    }
}
@keyframes cc {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
}
</style>
<script>
export default {
  name: "Home",
  components: {},
};
</script>
