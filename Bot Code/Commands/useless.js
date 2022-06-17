module.exports = {
    name: 'useless',
    description: 'Takes user to the useless website',
    execute(message, args){
        message.channel.send('https://theuselessweb.com/');
    }
}