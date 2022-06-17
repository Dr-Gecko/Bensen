module.exports = {
    name: 'stab',
    description: 'Command to stab other users',
    execute(message, args){
        const user = message.author;
        const victim = message.mentions.users.first();
        if (victim){
            return message.channel.send(`<@${user.id}> fucking stabbed you lol <@${victim.id}> :knife: \n https://media3.giphy.com/media/26u461AjcZOsx1Cww/giphy.gif`);
         }
        else{
            message.channel.send('No victim was given, try again by tagging your victim.')
        }
    }
}