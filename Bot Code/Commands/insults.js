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
       "You make the predators from the Chris Hansen show seem likeable",
       "I would rather shove a pencil in my urethra then talk to you any longer",
       "I would rather let a actual bear castrate me then listen to you spew shit out of your mouth any longer.",
       "Your voice sounds like what nails on chalkboard wants to be when it grows up.",
       "You are a good reason of why birth control should be more accessable",
       "I thought I couldn't hate anyone more then myself yet here you are proving me wrong",
       `When your mom calls you special she means it in the way of "whoops fuck I dropped you down the stairs"`

    ]
    var insulted = insults[Math.floor(Math.random() * insults.length)];
    if(victim) {
        message.channel.send(`<@${victim.id}> `+ insulted)
    }
    else{ 
        message.channel.send(`<@${user.id}> `+ insulted)
    }
    }
}
