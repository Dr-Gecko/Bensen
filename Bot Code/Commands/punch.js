module.exports = {
    name: 'punch',
    description: 'Command to stab other users',
    execute(message, args){
        const user = message.author;
        const victim = message.mentions.users.first();
        return message.channel.send(`Hey <@${victim.id}> <@${user.id}> punched the shit out of you, get fucked lol \n https://c.tenor.com/ItMJ_7SaN5oAAAAC/reactions-punch.gif`);

    }
}
