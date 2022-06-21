module.exports = {
    name: 'kick',
    description: "duh.",
    execute(message, args){
    const target = message.mentions.users.first();
    if(target){
        if(message.member.roles.cache.has('988861580869533706')){
           const memberTarget = message.guild.members.cache.get(target.id);
           memberTarget.kick();
     }else{
         message.channel.send("You do not have Admin, you can not kick people.")
      }
    }else{
        message.channel.send("You need to tag someone to kick them")
    }
}
}
