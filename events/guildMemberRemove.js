module.exports = (bot, member) => {
  
    let allmemberschannel = member.guild.channels.cache.find(channel => channel.name.startsWith('All Members:') && channel.type === 'voice');
    let onlymemberschannel = member.guild.channels.cache.find(channel => channel.name.startsWith('Members:') && channel.type === 'voice');
    let botsonlychannel = member.guild.channels.cache.find(channel => channel.name.startsWith('Bots:') && channel.type === 'voice');

    if (!allmemberschannel) return;
    if (!onlymemberschannel) return;
    if (!botsonlychannel) return;

    allmemberschannel.setName(`All Members: ${member.guild.memberCount}`);
    onlymemberschannel.setName(`Members: ${member.guild.members.cache.filter(member => !member.user.bot).size}`);
    botsonlychannel.setName(`Bots: ${member.guild.memberCount - member.guild.members.cache.filter(member => !member.user.bot).size}`);
}