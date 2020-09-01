const Discord = require('discord.js');
const errors = require('../util/errors.js');
const { color } = require('../config.json');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  const subReddits = ['meme', 'me_irl', 'dankmeme', 'memes', 'dankmemes'];
  const random = subReddits[Math.floor(Math.random() * subReddits.length)];
  const img = await randomPuppy(random);

  const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)
    .setColor(color);

  message.channel.send(embed);
};

module.exports.config = {
  name: 'meme',
  aliases: ['funny'],
  usage: 'meme',
  description: 'Sends a random meme from discord!',
};