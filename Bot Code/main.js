const Discord = require('discord.js');
const {token} = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });
const version = require('./package.json');
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
const { MessageEmbed } = require('discord.js');


const exampleEmbed = new MessageEmbed()
	    .setColor('#000000')
	    .setTitle('Rules')
	    .setDescription('Server Rules')
	    .addFields(
	    { name: 'Rule 1:', value: 'Do not be unnecessarily mean or cruel, sarcasm is allowed but make sure the other person knows its sarcastic.', inline: false },
	    { name: 'Rule 2:', value: 'Do not be over the top vulgar, slip ups are allowed but do not be over the top.', inline: false },
            { name: 'Rule 3:', value: 'Do not post anything you would not want a parent seeing. That includes anything NSFW. ', inline: false },
            { name: 'Rule 4:', value: 'Act your age and do not try to upset other people, we are here to have fun not target other kids.', inline: false},
            { name: 'Rule 5:', value: 'Do not forget to take it easy and have fun!', inline: false},
    	    )


const prefix = '-';

for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Hi I am Bensen I am now online! Try any of my commands in any of the servers I am in \n")
});
client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.find('988844144749326378').send(`Welcome <@${guildMember.user.id}`)
});
client.on("messageCreate", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'boop'){
        client.commands.get('boop').execute(message, args)
    }
    if(command === 'embed'){
        message.channel.send({ embeds: [exampleEmbed] })
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
    if(command === 'time'){
        client.commands.get('time').execute(message, args)
    }
    if(command === 'redpanda'){
        client.commands.get('moshu').execute(message, args)
    }
});
client.login(token);
