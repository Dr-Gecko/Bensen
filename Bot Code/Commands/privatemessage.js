module.exports = {
    name: 'pm',
    description: 'Private Messages Command User',
    execute(message, args){
        const user = message.author;
        user.send(`Hi I am Bensen and this command is coming soon!`)
    }
}