const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let messagetoembed = args.splice(1).join(" ");

    let embed = new MessageEmbed()
        .setTitle(messagetoembed)

    message.channel.send(embed)
}


module.exports.config = {
    name: 'embed',
    aliases: [],
    usage: 'embed <message>',
    description: 'Embeds the given message!'
}