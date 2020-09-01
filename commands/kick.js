const Discord = require('discord.js');
const errors = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
  let kReason = args.slice(2).join(' ');
  if (!message.member.hasPermission('KICK_MEMBERS'))
    return errors.noPerms(message, 'KICK_MEMBERS');
  let kUser = message.guild.member(
    message.mentions.members.first() || message.guild.members.cache.get(args[0])
  );
  if (!kUser)
    return message.channel.send('Please mention a user in the server!');
  if (kUser.hasPermission('ADMINISTRATOR'))
    return message.channel.send("That person can't be kicked!");
  if (!kReason) kReason = 'None Provided';
  message.guild.member(kUser).kick(kReason);
  message.channel.send(
    `${kUser} has been kicked from **${message.guild.name}**!`
  );
};

module.exports.config = {
  name: 'kick',
  aliases: [],
  usage: 'kick @user',
  description: 'Kick a user from the server!',
};