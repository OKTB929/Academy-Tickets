const Discord = require("discord.js");
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
   
    message.channel.send("Hello there! My devs are  OKTBv2#2646 and Master#7751 and my prefix is OK! ")
}


module.exports.config = {
    name: "info",
    aliases: [],
    usage: "",
    description: "gives info about the bot",
}