const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  // These intents allow the client to access information about guilds, messages, and members 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for 'messageCreate' events, which are triggered whenever a message is sent in a guild
client.on('messageCreate', (msg) => {
  // Check if the message was sent in a specific channel (specified by its ID)
  if (msg.channelId === process.env.channelid) {
    // Ban the member who sent the message deleting 7 days of messages, with a reason
    msg.member.ban({ days: 7, reason: 'Spoken in the bait channel :monkaS:?!' })
      .then(console.log)
      .catch(console.error);
  }
});

// Log the client in using the Discord API token specified
client.login(process.env.token);
