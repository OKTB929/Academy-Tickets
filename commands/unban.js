const Discord = require('discord.js');
const erorrs = require('../util/errors.js');

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('BAN_MEMBERS'))
    return erorrs.noPerms(message, 'BAN_MEMBERS');

  if (!args[1]) return message.channel.send('Please give me a valid ID!');

  let bannedMember;
  try {
    bannedMember = await bot.users.fetch(args[1]);
  } catch (e) {
    if (!bannedMember) return message.channel.send("That's not a valid ID!");
  }

  try {
    await message.guild.fetchBan(args[1]);
  } catch (e) {
    message.channel.send('This user is not banned.');
    return;
  }

  let reason = args.slice(2).join(' ');
  if (!reason) reason = 'None Provided';

  if (!message.guild.me.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR']))
    return message.channel.send("I can't do that!");
  try {
    message.guild.members.unban(bannedMember, { reason: reason });
    message.channel.send(`${bannedMember.tag} was unbanned.`);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports.config = {
  name: 'unban',
  aliases: [],
  usage: 'unban @user',
  description: 'Unban a member in the server!',
};