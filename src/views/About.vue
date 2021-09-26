<template>
  <body>
    <div class="about">
      <h1 style="color: aqua">About Me</h1>
      <br />

      <h1>My Skills {If you are interested}</h1>

      <p>
        Some knowledge of Java, C#, Python and C++. I mostly work in Node.js or
        recently Typescript, and I have this website done with Vue.js
      </p>

      <br />

      <h1>Actual About Me</h1>

      <p>
        My name is Samuel and im studying in middle school and i like to
        experiment, mostly webstites, games(Not anymore for some time) or even
        discord bots.
      </p>
      <br />
      <p>
        Im from Slovakia. And I am currently studying programming and
        electronics. I am the owner of discord server called Factorio Lounge.
      </p>
      <p>
        Right now im am working on a Discord bot called
        <a style="color: aqua">FoxholeWarBot</a> that you can see on top.gg:
        <a href="https://top.gg/bot/886994381259833374" target="_blank"
          >click me!</a
        >
        And a discord server called <a style="color: aqua">Factorio Lounge</a>,
        invite link:
        <a href="https://discord.gg/tTYkKVT" target="_blank">click me!</a>!
      </p>
      <p>
        I am mostly free but sometimes I work on my bots. Other then that im
        just doing school stuff since covid hit.
      </p>
      <p>
        I am trying to start freelance, so if you are interested hit me up at
        gmail where we can share more contacts.
      </p>
      <p style="color: red">No free work.</p>
      <br />

      <h1>Donations:</h1>

      <p>
        If you a really generous, you can
        <a
          href="https://www.paypal.com/donate?hosted_button_id=GGUQ8PKZVV5MY"
          target="_blank"
          >donate (paypal)</a
        >. Or a QR code:
      </p>
      <img src="../assets/design/QR_Code.png" />
      <br />
      <br />
      <iframe
        src="https://ko-fi.com/saniee/?hidefeed=true&widget=true&embed=true&preview=true"
        style="width: auto; background: #1a1a1a"
        height="680px"
        title="saniee"
      ></iframe>
    </div>
  </body>
</template>

<style lang="scss">
.about {
  height: auto;
  h1 {
    color: aqua;
  }
  h2 {
    color: aqua;
  }
}
a {
  color: aquamarine;
}
a:hover {
  color: aqua;
}
</style>
<script>
export default {
  name: "Home",
  components: {},
  metaInfo: {
    title: "About Me",
  },
};
</script>