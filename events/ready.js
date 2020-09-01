module.exports = (bot, ready) => {
	bot.user.setActivity('OK!help for help | Coding!', {type: 'WATCHING'});
	console.log(`Logged in as ${bot.user.tag}!`);
};
