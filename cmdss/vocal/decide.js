const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'decide',
	description: "ouai mais c'est pas toi qui décide",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();

    if (!message.guild.me.hasPermission("SPEAK")) {
        message.channel.send("j'ai pas les permissions :(")
    }

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play("./sons/c'est pas toi qui décide.mp3", {
            volume: 0.5,
        });

        //dispatcher.setVolume(0.1);
        //dispatcher.on("end", end => {
          //  console.log("left channel");

      } else {
        message.reply('Il faut etre dans le : channel vocal');
    
    }
    
    if (message.guild.id == 730433603808264192) {
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
   
        channel.send("[DECIDE] " + user + " a utiliser Decide | " + time + " Le " + date);
    }
    

        }
module.exports.help = {
    name: "decide"
}