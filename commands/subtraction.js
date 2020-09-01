const Discord = require("discord.js");
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const num1 = +args[1]
    const num2 = +args[2]

    message.channel.send(`The sum of ${num1} and ${num2} is ${num1 - num2}!`)
}


module.exports.config = {
    name: "subtract",
    aliases: [],
    usage: "subtract <number 1> from <number 2>",
    description: "Subtract two numbers!",
}