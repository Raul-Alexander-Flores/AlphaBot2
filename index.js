const { Client, GatewayIntentBits, Partials, ThreadMember, Collection} = require('discord.js');

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreatMember} = Partials;

const { loadEvents} = require('./Handlers/eventHandler');
const { loadCommands} = require('./Handlers/commandHandler')


const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
});


client.commands = new Collection();
client.config = require('./config.json')

client.login(client.config.token).then(()=>{
    loadEvents(client);
    loadCommands(client);
})