// For Red Panda Stuff
module.exports = {
    name: 'moshu',
    description: 'Command to stab other users',
    execute(message, args){
        var links = [
            "https://www.youtube.com/watch?v=UBcVbAFntQo",
            "https://www.youtube.com/watch?v=ERwHvwsGFoE",
            "https://www.youtube.com/watch?v=0M54nXTkhM8",
            "https://www.youtube.com/watch?v=HRwiPJkm1WE",
            "https://www.youtube.com/watch?v=VTz5MtxrDTA",
            "https://www.youtube.com/watch?v=l-O9_Xq8ABM"
            ];
         var randVideo = links[Math.floor(Math.random() * links.length)];
        message.channel.send(randVideo)
    }
}
