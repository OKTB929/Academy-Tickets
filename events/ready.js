module.exports = (bot, ready) => {
	console.log(`${bot.user.tag} is now online!`);
	bot.user.setActivity("AT!help for help | Coding!", {
		 type: "STREAMING",
		 url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	   });
 };