module.exports = {
    name: 'frog',
    description: 'Sends a random frog video from the list below',
    execute(message, args){
        var links = [
            "https://www.youtube.com/watch?v=ki_IgX-8Bi0",
            "https://www.youtube.com/watch?v=3XvG9FdpTQQ",
            "https://www.youtube.com/watch?v=2J4p_SYIs60",
            "https://www.youtube.com/watch?v=ey2eqpyOlBU",
            "https://www.youtube.com/watch?v=nQt-jVOo1oA",
            "https://www.youtube.com/watch?v=NukRJsfgUAw"
            ];
         var randVideo = links[Math.floor(Math.random() * links.length)];
        message.channel.send(randVideo)
    }
}