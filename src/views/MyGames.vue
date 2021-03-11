<template>
  <body>
    <div class="mygames">
      <h1>My Games</h1>
      <p>
        I mainly did games through Unity or Unreal, My last game was a game
        named
        <a href="https://saniee.itch.io/blockslide" target="_blank"
          >Blockslide</a
        >, it has a style of Subway Surfer,
      </p>
      <p>but it has some added things like destruction.</p>
      <p>
        My second game is
        <a href="https://saniee.itch.io/destructionmania" target="_blank"
          >Destruction Mania</a
        >, it wasnt finished becouse the files got corrupt though you can still
        play it!
      </p>
      <p>
        This page is mostly as history since im not going to make games for some
        time. And idk when ill come back do doing one.
      </p>
      <vueper-slides fractions progress fade :touchable="false">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
          :image="slide.image"
        />
      </vueper-slides>
      <br />
      <br>
      <h1>A video from Destruction Mania</h1>
      <iframe
        class="center"
        src="https://www.youtube.com/embed/v2ewkCRuNhc"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        width="1195"
        height="672"
        frameborder="0"
      ></iframe>
      <p><a href="#">^ back to top ^</a></p>
    </div>
  </body>
</template>

<style lang="scss">
.mygames {
  h1 {
    color: aqua;
  }
  a {
    color: aquamarine;
  }
  a:hover {
    color: aqua;
  }
}
.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: aqua;
}
</style>


<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "MyGames",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Destruction Mania",
        content: "Made in UE4",
        image:
          "https://img.itch.zone/aW1hZ2UvMzk5NDkzLzE5Nzk5MjkucG5n/347x500/WZOs7e.png",
      },
      {
        title: "Blockslide",
        content: "Made in Unity",
        image: "https://img.itch.zone/aW1nLzI5MzE2OTQucG5n/347x500/AR9Rzg.png",
      },
    ],
  }),
};
</script>