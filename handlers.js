  
const fs = require("fs");

module.exports = (bot) => {
    fs.readdir("./events/", (err, files) => {
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        console.log(`${jsfiles.length} events loaded!`);
        jsfiles.forEach((f, i) => {
            require(`./events/${f}`);
        });
    });

    fs.readdir('./commands/', (err, file) => {
        let jsfile = file.filter(f => f.split('.').pop() === 'js');
        console.log(`${jsfile.length} commands loaded!`);
        jsfile.forEach((f, i) => {
            let pull = require(`./commands/${f}`);
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name);
            });
        });
    });
};