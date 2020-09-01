const Discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs');

require('dotenv').config();

module.exports = (bot, message) => {
    const prefix = 'OK!';

    if (message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase()
    let args = message.content.substring(prefix.length).split(" ");

    if (message.mentions.has(bot.user) && !args[1] && message.content !== "@everyone" && message.content !== "@here") {
        message.channel.send(`My prefix here is ${prefix}`)
    }

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(bot, message, args)
}