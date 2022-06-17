module.exports = {
    name: 'boop',
    description: 'boop the snoot',
    execute(message, args){
        var snoots = [
            "https://tenor.com/view/gone-to-the-snow-dogs-boop-boop-the-snoot-boops-cute-dog-gif-13779768",
            "https://c.tenor.com/6XkXZxlaMD8AAAAC/boop-snoot.gif",
            "https://tenor.com/view/boop-dog-doggo-gooddog-good-gif-13203212",
            "https://tenor.com/view/dog-getting-frustrated-stop-it-annoyed-gif-15192974",
            "https://tenor.com/view/boop-dog-gif-18000748",
            "https://tenor.com/view/qtlixi-dog-boop-loop-nose-gif-19103560",
            "https://tenor.com/view/boop-snoot-dog-cute-bully-gif-25146748",
            "https://tenor.com/view/boop-gif-19921685",
            "https://tenor.com/view/ab6ix-woojin-park-woojin-dog-puppy-gif-22043494"
        ]
        var booped = snoots[Math.floor(Math.random() * snoots.length)];
        message.channel.send('Look at the snoot being booped: ' + booped);
    }
}
