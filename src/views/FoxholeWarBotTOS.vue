<template>
    <body class="foxholewarbottos">
        <h1 style="font-size: 55px">Foxhole War Bot - Terms of Service</h1>
        <br>
        <h1>Collection of Guild Data:</h1>
        <p>The bot only collects the id and the owner of the guild that it joined. It keeps this data to inform about any problems or erros that occur. Once the bot leaves the guild this data is destroyed.</p>
        <h1>Collection of Message Content:</h1>
        <p>The bot doesnt collect the contents of any message. Once a command with the needed arguments gets called it uses that content to return the function it has for that command. Once that is completed the content is destroyed.</p>
        <h1>Database Structure:</h1>
        <p>As mentioned the only info the bot stores is the Guild ID, the owner's ID and the parameter of which is unique for each server and is not a personal information - The Game this bot is a tool for = shards aka servers you play on and its respective urls for the API.</p>
        <h1>Any Other Concers:</h1>
        <p>If you want to ask anything else you can refer to <a href="https://discord.gg/9wzppSgXdQ">The Support Discord Server</a>. Or message me personally: Saniee#0007 (Discord), <a href="mailto:asamsku10@gmail.com">Email</a></p>
    </body>
</template>
<style lang="scss">
.foxholewarbottos {
    height: 815px;
}
h2 {
    color: aqua;
}
h1 {
    color: aqua;
}
a {
  color: aquamarine;
}
a:hover {
  color: aqua;
}
p {
    font-size: 20px;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
  metaInfo: {
    title: 'FoxholeWarBot TOS'
  }
};
</script>