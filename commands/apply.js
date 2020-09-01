const Discord = require("discord.js");
const errors = require('../util/errors.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (message.channel.name !== 'staff-applications' && message.channel.name !== 'apply-for-staff '&& message.channel.name !== 'staff-application' && message.channel.name !== '✏【𝗦𝘁𝗮𝗳𝗳-𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀') return;
    message.delete()
    //return message.channel.send("Staff Applications are currently closed!").then(r => r.delete({ timeout: 5000 }))

    let embed = new Discord.MessageEmbed()
        .setTitle(`Application started in DM by ${message.author.username}!`)
        .setColor(color)

    message.channel.send(embed)
        .then(msg => {
            msg.delete({ timeout: 5000 })
        })

    const filter = m => m.author.id === message.author.id;

    let startembed = new Discord.MessageEmbed()
        .setTitle(`Application Started - Type "cancel" at any time to cancel the application!`)
        .setColor(color)

    let q1embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("How old are you?")

    let q2embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Do you know that if you go against the rules you will be demoted")

    let q3embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("What is your timezone and when are you most active in your timezone?")

    let q4embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Do you have a mic to communicate via voice chat?")

    let q5embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("When did you first join our server?")

    let q6embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("How much time can you contribute to our server daily/weekly?")

    let q7embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Have you been previously banned or muted? If so, please explain why")

    let q8embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Do you have any previous staff experience? If so, elaborate (Provide proof)")

    let q9embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("What position are you applying for?")

    let q10embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("How will your presence benefit our staff team and server? Is there anything in particular that you believe that you can help improve?")

    let q11embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Have you made any previous applications in the past for our server? (If so please link)")

    let q12embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Are you currently staff on any other server? (Provide proof)")

    let q13embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Do you have an issue with a staff member that will stop you from working with them?")

    let q14embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("How well do you understand the rules?")

    let q15embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Do you understand staff can not scam and must treat all players equally?")

    let confirmembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Type yes if you would like to submit!")

    let cancelembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Canceled.")

    let submitedembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Application Successfully Summited")

    const msg = await message.author.send(startembed)
    msg.channel.send(q1embed)
    msg.channel.awaitMessages(filter, { max: 1 }).then(async q1 => {
        if (q1.first().content == "cancel") {
            return msg.channel.send(cancelembed)
        }
        msg.channel.send(q2embed)
        msg.channel.awaitMessages(filter, { max: 1 }).then(async q2 => {
            if (q2.first().content == "cancel") {
                return msg.channel.send(cancelembed)
            }
            msg.channel.send(q3embed)
            msg.channel.awaitMessages(filter, { max: 1 }).then(async q3 => {
                if (q3.first().content == "cancel") {
                    return msg.channel.send(cancelembed)
                }
                msg.channel.send(q4embed)
                msg.channel.awaitMessages(filter, { max: 1 }).then(async q4 => {
                    if (q4.first().content == "cancel") {
                        return msg.channel.send(cancelembed)
                    }
                    msg.channel.send(q5embed)
                    msg.channel.awaitMessages(filter, { max: 1 }).then(async q5 => {
                        if (q5.first().content == "cancel") {
                            return msg.channel.send(cancelembed)
                        }
                        msg.channel.send(q6embed)
                        msg.channel.awaitMessages(filter, { max: 1 }).then(async q6 => {
                            if (q6.first().content == "cancel") {
                                return msg.channel.send(cancelembed)
                            }
                            msg.channel.send(q7embed)
                            msg.channel.awaitMessages(filter, { max: 1 }).then(async q7 => {
                                if (q7.first().content == "cancel") {
                                    return msg.channel.send(cancelembed)
                                }
                                msg.channel.send(q8embed)
                                msg.channel.awaitMessages(filter, { max: 1 }).then(async q8 => {
                                    if (q8.first().content == "cancel") {
                                        return msg.channel.send(cancelembed)
                                    }
                                    msg.channel.send(q9embed)
                                    msg.channel.awaitMessages(filter, { max: 1 }).then(async q9 => {
                                        if (q9.first().content == "cancel") {
                                            return msg.channel.send(cancelembed)
                                        }
                                        msg.channel.send(q10embed)
                                        msg.channel.awaitMessages(filter, { max: 1 }).then(async q10 => {
                                            if (q10.first().content == "cancel") {
                                                return msg.channel.send(cancelembed)
                                            }
                                            msg.channel.send(q11embed)
                                            msg.channel.awaitMessages(filter, { max: 1 }).then(async q11 => {
                                                if (q11.first().content == "cancel") {
                                                    return msg.channel.send(cancelembed)
                                                }
                                                msg.channel.send(q12embed)
                                                msg.channel.awaitMessages(filter, { max: 1 }).then(async q12 => {
                                                    if (q12.first().content == "cancel") {
                                                        return msg.channel.send(cancelembed)
                                                    }
                                                    msg.channel.send(q13embed)
                                                    msg.channel.awaitMessages(filter, { max: 1 }).then(async q13 => {
                                                        if (q13.first().content == "cancel") {
                                                            return msg.channel.send(cancelembed)
                                                        }
                                                        msg.channel.send(q14embed)
                                                        msg.channel.awaitMessages(filter, { max: 1 }).then(async q14 => {
                                                            if (q14.first().content == "cancel") {
                                                                return msg.channel.send(cancelembed)
                                                            }
                                                            msg.channel.send(q15embed)
                                                            msg.channel.awaitMessages(filter, { max: 1 }).then(async q15 => {
                                                                if (q15.first().content == "cancel") {
                                                                    return msg.channel.send(cancelembed)
                                                                }
                                                                        const a = await msg.channel.send(confirmembed)
                                                                        await a.react('✅')
                                                                        await a.react('❌')
                                                                        a.awaitReactions((reaction, user) => user.id == message.author.id, { max: 1 }).then(async submitcollected => {
                                                                            const reaction = submitcollected.first()

                                                                            if (reaction.emoji.name === '✅') {
                                                                                msg.channel.send(submitedembed)

                                                                                let embed = new Discord.MessageEmbed()
                                                                                    .setTitle("----------NEW-Staff Application----------")
                                                                                    .setColor(color)
                                                                                    .addField("How old are you?", `${q1.first().content}`)
                                                                                    .addField("Do you know that if you go against the rules you will be demoted?", `${q2.first().content}`)
                                                                                    .addField("What is your timezone and when are you most active in your timezone? -", `${q3.first().content}`)
                                                                                    .addField("Do you have a mic to communicate via voice chat?", `${q4.first().content}`)
                                                                                    .addField("When did you frist join our server?", `${q5.first().content}`)
                                                                                    .addField("How much time can you contribute to our server daily/weekly? -", `${q6.first().content}`)
                                                                                    .addField("Have you been previously banned or muted? If so, please explain why -", `${q7.first().content}`)
                                                                                    .addField("Do you have any previous staff experience? If so, elaborate (Provide proof) -", `${q8.first().content}`)
                                                                                    .addField("What position are you applying for?", `${q9.first().content}`)
                                                                                    .addField("How will your presence benefit our staff team and server? Is there anything in particular that you believe that you can help improve? -", `${q10.first().content}`)
                                                                                    .addField("Have you made any previous applications in the past for our server? (If so please link) -", `${q11.first().content}`)
                                                                                    .addField("Are you currently staff on any other server? (Provide proof) -", `${q12.first().content}`)
                                                                                    .addField("Do you have an issue with a staff member that will stop you from working with them? -", `${q13.first().content}`)
                                                                                    .addField("How well do you understand the rules? -", `${q14.first().content}`)
                                                                                    .addField("Do you understand staff can not scam and must treat all players equally? -", `${q15.first().content}`)
                                                                                    .setFooter(`Name of Applicant: ${message.author.username}`)
                                                                                    .setTimestamp()

                                                                                let applicationsChannel = message.guild.channels.cache.find(channel => channel.name == "staff-apps-logs" && message.guild.channels.cache.find(channel => channel.id == "715751332824350801"))                                                                                
                                                                                if (!applicationsChannel) return;
                                                                                applicationsChannel.send(embed)
                                                                            } else {
                                                                                return message.channel.send(cancelembed)
                                                                            }
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            
        
    })
}


module.exports.config = {
    name: "apply",
    aliases: [],
    usage: "apply",
    description: "Apply for staff",
}