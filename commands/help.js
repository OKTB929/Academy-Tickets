const Discord = require("discord.js");
const { color, prefix } = require('../config.json');
const { description, execute } = require("./embed");

module.exports = {
 name: 'help',
 description: "Gives a description about all the commands",
 execute(message, args) {
    let cmds = bot.commands;
    let allcommands = cmds.map(c => `${c.config.name}`)

    if (!args[1]) {
        var embed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .setDescription(allcommands)
            .addFields({ name: 'Prefix', value: '' + prefix + '', inline: true })
            .setColor(color)
            .setFooter(`You can also do ${prefix}help <command>!`)

        message.channel.send(embed);
    } else {
        let command = args[1].toLowerCase()

        if (bot.commands.has(command)) {

            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Command Information`)
                .setDescription(`
            - **Name:** ${command.config.name.toUpperCase()}
            - **Description:** ${command.config.description || "There is no Description for this command."}
            - **Usage:** ${prefix}${command.config.usage || "No Usage"}
            - **Aliases:** ${command.config.aliases || "No Aliases"}
            `)
                .setColor(color)
                .setThumbnail(bot.user.avatarURL())

            message.channel.send(embed);
        }
    }
}
}