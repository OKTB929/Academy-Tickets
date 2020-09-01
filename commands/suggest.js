const Discord = require("discord.js");
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let suggestionchannel = message.guild.channels.cache.find(r => r.name === 'suggestions') || message.guild.channels.cache.find(r => r.name === 'öneriler') || message.guild.channels.cache.find(r => r.name === 'öneri')|| message.guild.channels.cache.find(r => r.name === '📄suggestions')
    if (!suggestionchannel) return message.channel.send("There is no channel for me to suggest you suggestion try creating a channel called suggestions, öneri or öneriler!").then(r => r.delete({ timeout: 10000 }))
    
    let suggestion = args.splice(1).join(" ");

    if(!suggestion) return message.channel.send(`Please give me a suggestion!`);
    
    let embed = new Discord.MessageEmbed()
    .setTitle("New Suggestion!")
    .setDescription(suggestion)
    .setColor(color)
    const a = await suggestionchannel.send(embed)
    await a.react('✔');
    await a.react('❌')
}

module.exports.config = {
    name: "suggest",
    aliases: ['suggestion', 'addsuggestion'],
    usage: "suggest <suggestion>",
    description: "suggest things",
}