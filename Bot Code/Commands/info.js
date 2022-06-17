module.exports = {
    name: 'info',
    description: 'Bot info',
    execute(message, args){
        message.channel.send(`
        Bot information: 
        Duck's Name: Bensen
        Version Name: Spider Snake
        Version Number: 1.0.2
        My Author: https://github.com/Dr-Gecko
        Repository for my code: https://github.com/Dr-Gecko/Sir-Stabs-A-Lot
        `)
    }
}
