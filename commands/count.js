const Discord = require("discord.js");
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let secondsinbetween = '1';

    if (secondsinbetween === '0') secondsinbetween = '1';
    let currentnumber = 0;

    setInterval(() => {
        message.channel.send(currentnumber + 1)
        currentnumber++
    }, secondsinbetween * 1000);
}


module.exports.config = {
    name: "count",
    aliases: [],
    usage: "count",
    description: "Makes the bot count!",
}