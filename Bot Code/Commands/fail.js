module.exports = {
    name: 'fail',
    description: 'shutdown',
    execute(message, args){
        const user = message.author;
        if(message.member.roles.cache.has('954264080171032618')){
            console.log("Fatal Error Was Detected and User Shut down Bot")
            process.exit();   
        } else{ 
            message.channel.send(`<@${user.id}> you do not have moderator permissions, you can not shut down the bot`);
            console.log("Non Moderator tried to shut down bot.")
        }
    }
}
