<template>
  <body>
    <div class="home" v-if="!mobileView">
      <br />
      <div class="text">
        <h1 style="width: 100%; margin-left: 50%">Hello. I'm</h1>
        <h1
          class="gradient"
          style="font-size: 80.5pt; margin-left: 50%; width: 100%"
        >
          Saniee
        </h1>
        <h1 style="font-size: 40.5pt;color: teal;margin-left: 50%; width: 100%">Hello, I am a Student of IT and Electrical Engineering</h1>
        <h1 style="font-size: 40.5pt;color: aqua;margin-left: 50%; width: 100%">Have a look around!</h1>
      </div>
      <br />
    </div>
    <div class="homeMobile" v-if="mobileView">
      <br />
      <div class="text">
        <h1 style="width: 100%; margin-left: 50%">Hello. I'm</h1>
        <h1
          class="gradient"
          style="font-size: 60.5pt; margin-left: 50%; width: 100%"
        >
          Saniee
        </h1>
        <h1 style="font-size: 30.5pt;color: teal;margin-left: 50%; width: 100%">Hello, I am a Student of IT and Electrical Engineering</h1>
        <h1 style="font-size: 30.5pt;color: aqua;margin-left: 50%; width: 100%">Have a look around!</h1>
      </div>
      <br />
    </div>
  </body>
</template>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap%27");
@import url("https://fonts.googleapis.com/css2?family=Sanchez&display=swap%27");
.home {
  height: 815px;
  background-repeat: no-repeat;
}
.homeMobile {
  background-size: 100%, auto;
  height: 815px;
}
.text {
  color: white;
  position: relative;
  font-family: "Oswald", sans-serif;
  height: 650px;
  width: 50%;
  float: left;
  font-size: 25pt;
  margin: 0px;
}
/* Gradient */
.gradient {
  margin: 0px;
  font-size: 70pt;
  font-family: "Sanchez", serif;
  user-select: none;
  color: white;
  background: repeating-linear-gradient(
    -45deg,
    red 0%,
    white 7.14%,
    rgb(0, 0, 0) 14.28%,
    rgb(0, 255, 255) 21.4%,
    #27ede3 28.56%,
    blue 35.7%,
    purple 42.84%,
    red 50%
  );
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

  data: () => {
    return {
      mobileView: false,
    };
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
  },

  // created() {
  //   this.handleView();
  // },

  onUpdated() {
    this.handleView();
  },

  components: {},
  metaInfo: {
    title: "Home",
  },
};
</script>
