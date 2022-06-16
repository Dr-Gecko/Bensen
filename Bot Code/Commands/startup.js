module.exports = {
    name: 'startup',
    description: 'command for when bot starts up',
    execute(message, args){
        message.channel.send('I am online now!');
    }
}
