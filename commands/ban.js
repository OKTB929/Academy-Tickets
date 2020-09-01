const Discord = require('discord.js');
const errors = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
  let bReason = args.slice(2).join(' ');
  if (!message.member.hasPermission('BAN_MEMBERS'))
    return errors.noPerms(message, 'BAN_MEMBERS');
    
  let bUser = message.guild.member(
    message.mentions.members.first() || message.guild.members.cache.get(args[1])
  );
  if (!bUser)
    return message.channel.send('Please mention a user in the server!');
  if (bUser.hasPermission('ADMINISTRATOR'))
    return message.channel.send("That person can't be banned!");
  if (!bReason) bReason = 'None Provided';
  message.guild.member(bUser).ban(bReason);
  message.channel.send(
    `${bUser} has been banned from **${message.guild.name}**!`
  );
};

module.exports.config = {
  name: 'ban',
  aliases: [],
  usage: 'ban @user (reason)',
  description: 'Ban a user from the server!',
};