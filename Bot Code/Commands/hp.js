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
        PM: Private message, coming soon.
        Stab: @ an user and it will say you stabbed the user and show a gif of a animal with a knife.
        Update: Shows latest updates to the bot and links to this repo. 
        Useless: Sends a link to the useless website.
        Redpanda: Sends a random video of red pandas.
        User: Gives user info of a tagged user.
        Who: Sends a message of Bensen introducing himself.

        `)
    }
}
