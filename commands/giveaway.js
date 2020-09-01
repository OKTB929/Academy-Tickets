const Discord = require("discord.js");
const errors = require('../util/errors.js');
const { color } = require('../config.json');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if (message.channel.name !== "giveaway-setup") return;
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to start giveaways!")
    if (!args[1]) return message.channel.send(`You did not specify your time!`);
    if (args[1] && ms(args[1]) == undefined) return message.channel.send(`You did not specify your time!`);
    let channel = message.guild.channels.cache.find(channel => channel.name === "giveaways");
    if (!channel)
        return message.channel.send(
            `Couldn't find the giveaways channel!`
        );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`Giveaway created!`);
    let Embed = new Discord.MessageEmbed()
        .setTitle(`${prize}`)
        .setDescription(
            `React with 🎉 to enter!
            Hosted by: ${message.author}`)
        .setTimestamp(Date.now() + ms(args[1]))
        .setColor(color)
        .setFooter("Ends:")
    channel.send("|| <@&725800084343750825> ||")
    channel.send("🎉 **GIVEAWAY!** 🎉")
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
        if (m.reactions.cache.get("🎉").count <= 1) {
            return channel.send(
                `Not enough people reacted for me to draw a winner!`
            );
        }

        let winner = m.reactions.cache
            .get("🎉")
            .users.cache.filter((u) => !u.bot)
            .random();
        channel.send(
            `Congratulations ${winner}! You won the **${prize}**!`
        );
    }, ms(args[1]));
}


module.exports.config = {
    name: "giveaway",
    aliases: [],
    usage: "giveaway <time> <item>",
    description: "Give something away!",
}