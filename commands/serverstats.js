const Discord = require('discord.js');
const errors = require('../util/errors.js')
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, 'ADMINISTRATOR');

    await message.guild.channels.create('SERVER STATS', { type: 'category' });

    let serverstatscategory = message.guild.channels.cache.find(c => c.name == "SERVER STATS" && c.type == "category")

    await message.guild.channels.create(`All Members: ${message.guild.memberCount}`, {
        type: 'voice',
        parent: `${serverstatscategory.id}`,
        permissionOverwrites: [
            {
                deny: 'CONNECT',
                allow: 'VIEW_CHANNEL',
                id: message.guild.id
            }
        ]
    })
    await message.guild.channels.create(`Members: ${message.guild.members.cache.filter(member => !member.user.bot).size}`, {
        type: 'voice',
        parent: `${serverstatscategory.id}`,
        permissionOverwrites: [
            {
                deny: 'CONNECT',
                allow: 'VIEW_CHANNEL',
                id: message.guild.id
            }
        ]
    })
    await message.guild.channels.create(`Bots: ${message.guild.memberCount - message.guild.members.cache.filter(member => !member.user.bot).size}`, {
        type: 'voice',
        parent: `${serverstatscategory.id}`,
        permissionOverwrites: [
            {
                deny: 'CONNECT',
                allow: 'VIEW_CHANNEL',
                id: message.guild.id
            }
        ]
    })

    let embed = new Discord.MessageEmbed()
        .setTitle(`Server Stats Channels Created!`)
        .setColor(color)

    await message.channel.send(embed)
}


module.exports.config = {
    name: 'serverstats',
    aliases: [],
    usage: 'serverstats',
    description: 'Set up server stats for the current server!'
}