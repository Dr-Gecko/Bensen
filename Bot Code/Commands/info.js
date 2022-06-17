module.exports = {
    name: 'info',
    description: 'Bot info',
    execute(message, args){
        message.channel.send(`
        Bot information: 
        Duck's Name: Bensen
        Name: Stabs-A-Lot
        Version Name: Chimera
        Version Number: 1.0.1
        My Author: https://github.com/Dr-Gecko
        Repository for my code: https://github.com/Dr-Gecko/Sir-Stabs-A-Lot
        `)
    }
}
