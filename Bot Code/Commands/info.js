module.exports = {
    name: 'info',
    description: 'Bot info',
    execute(message, args){
        message.channel.send(`
        Name: Stabs-A-Lot
        Version Name: Carl
        Version Number: 0.5.1
        Commands: 9
        `)
    }
}
