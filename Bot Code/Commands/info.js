module.exports = {
    name: 'info',
    description: 'Bot info',
    execute(message, args){
        message.channel.send(`
        Duck's Name: Bensen
        Name: Stabs-A-Lot
        Version Name: indrik
        Version Number: 1.0.1
        `)
    }
}
