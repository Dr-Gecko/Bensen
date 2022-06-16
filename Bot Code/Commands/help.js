module.exports = {
    name: 'help',
    description: 'help command',
    execute(message, args){
        message.channel.send(`
        Here are my commands so far:

        ping: Pong
        author: Gives my Github Profile
        test: So you can live test commands
        repo: Gives link to this repository
        stab: Do prefix @user and it will respond with a photo and tagging the person
        shutdown: This will only work if you have a moderator permission and will shut down the bot
        v: Shows information about the bot
        help: Displays this
        `)

    }
}
