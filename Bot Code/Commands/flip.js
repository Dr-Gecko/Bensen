module.exports = {
    name: 'flip',
    description: 'Flips a coin!',
    execute(message, args){
    var coin = [
        "Heads",
        "Tails"
    ]
    message.channel.send("Flipping a coin:")
    var coinflip = coin[Math.floor(Math.random() * coin.length)];
    message.channel.send(coinflip)
    }
}
