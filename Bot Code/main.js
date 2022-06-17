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
    console.log("Hi I am Bensen I am now online! Try any of my commands in any of the servers I am in \n")
});

client.on("messageCreate", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'boop'){
        client.commands.get('boop').execute(message, args)
    }
    if(command === 'flip'){
        client.commands.get('flip').execute(message, args)
    }
    if(command === 'frog'){
        client.commands.get('frog').execute(message, args)
    }
    if(command === 'h'){
        client.commands.get('help').execute(message, args)
    }
    if(command === 'hp'){
        client.commands.get('hp').execute(message, args)
    }
    if(command === 'info'){
        client.commands.get('info').execute(message, args)
    }
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }
    if(command === 'pong'){
        client.commands.get('pong').execute(message, args)
    }
    if(command === 'possum'){
        client.commands.get('possum').execute(message, args)
    }
    if(command === 'stab'){
        client.commands.get('stab').execute(message, args)
    }
    if(command === 'redpanda'){
        client.commands.get('moshu').execute(message, args)
    }
    if(command === 'update'){
        client.commands.get('update').execute(message, args)
    }
    if(command === 'useless'){
        client.commands.get('useless').execute(message, args)
    }
    if(command === 'user'){
        client.commands.get('user').execute(message, args)
    }
    if(command === 'who'){
        client.commands.get('who').execute(message, args)
    }
});
client.login(token);
