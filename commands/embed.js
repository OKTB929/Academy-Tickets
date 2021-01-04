const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Embeds the given message',
    execute(message, args) {
      let messagetoembed = args.splice(0).join(" ");
  
          let embed = new MessageEmbed()
              .setTitle(messagetoembed)
      
      message.channel.send(embed)
    }
  }


