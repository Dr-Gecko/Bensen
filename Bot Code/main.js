const Discord = require('discord.js');
const {token} = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const version = require('./package.json');
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));


const prefix = '-';

for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Bot Is Now Running")
});

client.on("messageCreate", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'v'){
        message.channel.send(`Name: Stabs-A-Lot \n Version: 0.5`)
    }
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }
    if(command === 'author'){
        client.commands.get('author').execute(message, args)
    }
    if(command === 'test'){
        client.commands.get('test').execute(message, args)
    }
    if(command === 'repo'){
        client.commands.get('repo').execute(message, args)
    }
    if(command === 'stab'){
        client.commands.get('stab').execute(message, args)
    }
    if(command === 'shutdown'){
        client.commands.get('fail').execute(message, args)
    }
    if(command === 'h'){
        client.commands.get('help').execute(message, args)
    }
});
client.login("OTg3MDUwNDg4NDA5MjM1NTA4.G1M4l9.uYdGuDeoQXe-Oiein-pr1Mcjl1gb7f5FCX9y4U");
