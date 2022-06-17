module.exports = {
    name: 'possum',
    description: 'Sends a random possum video from the list below',
    execute(message, args){
        var links = [
            "https://www.youtube.com/watch?v=bRIVTEBaLkA"
            ];
         var randVideo = links[Math.floor(Math.random() * links.length)];
        message.channel.send("Here is a random possum video: " + randVideo)
    }
}