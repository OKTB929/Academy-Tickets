const Discord = require('discord.js');
const bot = new Discord.Client();

require('dotenv').config();

const fs = require('fs');

const requireAll = require('require-all');

const files = requireAll({
	dirname: `${__dirname}/events`,
	filter: /^(?!-)(.+)\.js$/,
});

bot.removeAllListeners();

for (const name in files) {
	const event = files[name];
	bot.on(name, event.bind(null, bot));
}

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
	let jsfile = files.filter(f => f.split('.').pop() === 'js');

	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			bot.aliases.set(alias, pull.config.name);
		});
		//console.log(`${f} loaded!`)
	});
	console.log(`${jsfile.length} commands loaded!`);
});

bot.login(process.env.TOKEN);