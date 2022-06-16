module.exports = {
    name: 'restart',
    description: 'restarts bot',
    execute(message, args){
        const user = message.author;
        if(message.member.roles.cache.has('954264080171032618')){
            process.exit();
        }
    }
}
