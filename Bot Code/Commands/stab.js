module.exports = {
    name: 'stab',
    description: 'Command to stab other users',
    execute(message, args){
        const user = message.author;
        const victim = message.mentions.users.first();
        if (victim){
            return message.channel.send(`<@${user.id}> fucking stabbed you lol <@${victim.id}> :knife: \n https://imgur.com/gallery/6q60R`);
         }
        else{
            message.channel.send('No victim was given, try again by tagging your victim.')
        }
    }
}
