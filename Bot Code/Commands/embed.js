module.exports = {
    name: 'embed',
    description: 'sends embeded message',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('http://neogeek.com')
	.setAuthor({ name: 'Some name', iconURL: 'http://neogeek.com/sadcat.jpg', url: 'http://neogeek.com/' })
	.setDescription('Some description here')
	.setThumbnail('http://neogeek.com/sadcat.jpg')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('http://neogeek.com/sadcat.jpg')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'http://neogeek.com/sadcat.jpg' });
	  
	    
	    
      message.channel.send(newEmbed);	   

    }
}
