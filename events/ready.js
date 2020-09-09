module.exports = (bot, ready) => {
	("OK!help", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      });
	console.log(`Logged in as ${bot.user.tag}!`);
};
