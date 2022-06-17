module.exports = {
    name: 'hp',
    description: 'Private Messages Command User',
    execute(message, args){
        const user = message.author;
        user.send(`        
        Here are my commands so far:
        
        Boop: Sends a gif of a dogs snoot being booped.
        Flip: Flips a coin.
        Frog: Sends a random video of frogs.
        H: Displays this.
        HP: Displays this in a private message.
        Info: Displays information about me.
        Ping: Pong!
        Pong: Ping!
        Possum: Sends a random possum video.
        Stab: @ an user and it will say you stabbed the user and show a gif of a animal with a knife. 
        Redpanda: Sends a random video of red pandas.`)
    }
}