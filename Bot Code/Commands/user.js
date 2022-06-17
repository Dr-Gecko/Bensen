const Discord = require('discord.js');
module.exports = {
    name: 'user',
    description: 'Gives user information',
    execute(message, args){
        const user = message.author;
        const mentioned = message.mentions.users.first();
        if (mentioned){
            message.channel.send(`User Information \n Username: ${mentioned.username} \n Tag: ${mentioned.discriminator} \n ID: ${mentioned.id} \n Bot: ${mentioned.bot}`)
        }
        else{
            message.channel.send(`User Information: \n Username: ${user.username} \n Tag: ${user.discriminator} \n ID: ${user.id} \n Bot: ${user.bot}`)
        }
    }
}
