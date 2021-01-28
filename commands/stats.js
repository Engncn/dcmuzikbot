const Discord = require("discord.js");
const config = require("../settings/config.json")
const moment = require("moment");
//let array =
module.exports.run= async(client, message, args) => {
let youiss = new Discord.MessageEmbed()
.setDescription("Youiss v12 Music Bot")
.setFooter("aptal botcu")
//eklenebilir .setFooter("sa-as")vs vs
message.channel.send(youiss)
message.react("📊")//react emoji (değiştirelebilir)

}
module.exports.help = {
name: "stats",
  aliases: ["s","istatistil","youiss"]
}