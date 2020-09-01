const Discord = require("discord.js");
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let ticketoptions = ["setup", "open", "close", "fc"];
    if (!ticketoptions.includes(args[1])) return message.channel.send("Please provide a valid argument! ```setup, open, close or fc!```")

    if (args[1] == "setup") {
        message.delete()
        const embed = new Discord.MessageEmbed();
        embed.setAuthor(bot.user.username, bot.user.avatarURL());
        embed.setDescription('Please do ``OK!ticket open`` to create a ticket!');
        embed.setColor(color)
        message.channel.send(embed)
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL()}`)
        .setColor(color)
        .setTitle("Closing ticket in 5 seconds!")

    let embed1 = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL()}`)
        .setColor(color)
        .setTitle("Successfully opened ticket!")

    let embed2 = new Discord.MessageEmbed()
        .setTitle('Ticket Support')
        .setDescription('Please briefly explain your problem here and a staff member will get back to you shortly.')
        .setColor(color)
        .setFooter("Please do OK!ticket close when you're finished!")

    if (args[1] == "open") {
        let ticketcategory = message.guild.channels.cache.find(c => c.name == "Support" && c.type == "category")

        if (message.channel.name !== "tickets") return;
        message.delete()
        message.channel.send(embed1)
            .then(msg => {
                msg.delete({ timeout: 2500 })
            })
        message.guild.channels.create(`ticket-${message.author.username}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    allow: 'VIEW_CHANNEL',
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: message.guild.id
                },
            ]
        })
            .then(channel => {
                channel.setParent(ticketcategory.id);
                channel.send(embed2)
            })
    }

    if (args[1] == "close") {
        if (!message.channel.name.startsWith('ticket-')) return;
        message.channel.send(embed)
        setTimeout(() => {
            message.channel.delete()
        }, 5000);
    }

    if (args[1] == "fc") {
        if (!message.channel.name.startsWith('ticket-')) return;
        message.channel.delete()
    }
}


module.exports.config = {
    name: "ticket",
    aliases: [],
    usage: "ticket <second arg>",
    description: "Create or close a ticket!",
}