module.exports = {
    name: 'insults',
    description: 'Insults users',
    execute(message, args){
    const victim = message.mentions.users.first();
    const user = message.author;
    var insults = [
        "You make the trolls from frozen look like super models.",
        "Your cooking makes actual dog shit look tasty.",
        "Being around a narcissist is more fun then taking to you.",
        "You are proof that Friedrich Nietzsche was right, god is dead and your existance is why.",
        "I think there is a word in german that descibes you pretty well, its Scheisse.",
        "Go fuck a biscuit.",
    ]
    var insulted = insults[Math.floor(Math.random() * insults.length)];
    if(victim.id === '987050488409235508') {
        message.channel.send("Do I look that fucking stupid where I would insult myself?")
        message.channel.send(`<@${user.id}>`+ insulted)
    }
    else{ 
        message.channel.send(`<@${victim.id}>`+ insulted)
    }
    }
}
