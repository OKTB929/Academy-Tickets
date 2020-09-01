const Discord = require("discord.js");
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command!');

    let deleteAmount;

    if (!args[1]) return message.channel.send(`Please give me the amount of messages to delete!`);

    if (isNaN(args[1]) || parseInt(args[1]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[1]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[1]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.channel.send(`Successfully deleted **${deleteAmount}** messages!`).then(r => r.delete({ timeout: 5000 }))
}


module.exports.config = {
    name: "clear",
    aliases: [],
    usage: "clear <number>",
    description: "Clears the given amount of messages in the current channel!",
}