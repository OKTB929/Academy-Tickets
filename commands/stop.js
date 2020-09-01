const Discord = require("discord.js");
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const ownerid = '747902939926102077';
    const secondstowait = '0.1';

    if (message.author.id !== ownerid) return errors.noPerms(message, `ID: ${ownerid}`);

    let embed = new Discord.MessageEmbed()
        .setTitle(`Bot will go offline in ${secondstowait} seconds...`)
        .setColor(color)

    const a = await message.channel.send(embed)
    setTimeout(async () => {
        embed.setTitle("Bot Stopped.")
        await a.edit(embed)
        await bot.destroy()
    }, secondstowait * 1000);
}


module.exports.config = {
    name: "stop",
    aliases: [],
    usage: "stop",
    description: "Stops the bot!",
}