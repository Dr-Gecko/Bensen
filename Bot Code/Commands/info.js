module.exports = {
    name: 'info',
    description: 'Bot info',
    execute(message, args){
        message.channel.send(`
        Bot Information:
        Duck's Name: Bensen
        Name: Stabs-A-Lot
        Version Name: Mothman
        Version Number: 1.0.1
        `)
    }
}
