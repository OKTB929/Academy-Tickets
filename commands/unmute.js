const Discord = require('discord.js');
const errors = require('../util/errors.js');
module.exports.run = async (bot, message, args) => {
  if (!message.member.permissions.has('MANAGE_MEMBERS'))
    return errors.noPerms(message, 'MANAGE_MEMBERS');
  let muterole = message.guild.roles.cache.find(
    (muterole) => muterole.name === 'Muted'
  );
  if (!muterole) return message.channel.send('Cannot find Muted role!');
  let mMember = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[1])
  );
  if (!mMember) return message.channel.send('Please mention a user!');
  let reason = args.slice(2).join(' ');
  if (!reason) reason = 'None Provided';

  message.channel.send(`Successfully unmuted ${mMember}!`);
  mMember.roles.remove(muterole);
};

module.exports.config = {
  name: 'unmute',
  aliases: [],
  usage: 'unmute @user',
  description: 'Unmute a muted user in the server!',
};