const Discord = require('discord.js');
const ms = require('ms');
const errors = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
  if (!message.member.permissions.has('MANAGE_GUILD'))
    return errors.noPerms(message, 'MANAGE_GUILD');
  let tomute = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[1])
  );
  let reason = args.slice(3).join(' ');
  if (!tomute) return message.channel.send('Please mention a user!');
  if (tomute.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send('This user cannot be muted!');
  let muterole = message.guild.roles.cache.find(
    (muterole) => muterole.name === 'Muted'
  );
  if (!muterole) return message.channel.send("Couldn't find Muted role!");
  let mutetime = args[2];
  if (!mutetime) return message.channel.send("You didn't specify a time!");
  if (!reason) reason = 'None Provided';
  if (args[2] && ms(args[2]) == undefined)
    return message.channel.send('Please enter a valid time!');

  await tomute.roles.add(muterole.id);
  message.channel.send(
    `<@${tomute.id}> has been temporally muted for ${ms(ms(mutetime))}!`
  );

  setTimeout(function () {
    tomute.roles.remove(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
};

module.exports.config = {
  name: 'tempmute',
  aliases: ['temp-mute', 'tmute'],
  usage: 'tempmute @user',
  description: 'Temporally mute a user in the server!',
};
