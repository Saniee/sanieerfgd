<template>
  <body>
      <div class="home">
      <br>
      <h1>Welcome to the <a class="gradient">new and improved</a> website!</h1>
      <br>
      <h1>Welcome to Saniee.rf.gd!</h1>
      <h1>You can see my skills and some accomplishments.</h1>
      <h1>This website is made by <a class="gradient">Saniee</a></h1>
      <img src="../assets/images/favicon.png" width="25%" height="25%">
      <h2>Art by dae#4907</h2>
    </div>
  </body>
</template>

<style lang="scss">
template {
    background-color: grey;
}
a.gradient {
    user-select: none;
    color: white;
    background: repeating-linear-gradient( -45deg, red 0%, white 7.14%, rgb(0, 0, 0) 14.28%, rgb(0, 255, 255) 21.4%, aqua 28.56%, blue 35.7%, purple 42.84%, red 50% );
    background-size: auto;
    background-clip: border-box;
    background-size: 250vw 250vw;
    background-clip: unset;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-animation: n 1.5s both;
    animation: n 1.3s both, lgbt 10s linear infinite;
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
@keyframes n {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(30px);
      transform: translateY(30px);
      opacity: 1;
      transform: skew(-0.5deg, -0.9deg);
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
.home {
  color: black;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
