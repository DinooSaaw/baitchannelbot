const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
  if (msg.channelId === process.env.channelid) {
    msg.member.ban({ days: 7, reason: 'Spoken in the bait channel :monkaS:?!' })
      .then(console.log)
      .catch(console.error);
  }
})

client.login(process.env.token);