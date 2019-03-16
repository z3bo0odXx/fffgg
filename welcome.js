const Discord = require('discord.js');
const superagent = require("superagent");
const moment = require("moment");
const fs = require("fs");
const bot = new Discord.Client();

const config = require("./db/config.json");

const prefix = config.prefix;
const ownerID = config.ownerID;

bot.on('message', message => {
    

    
    
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let messageArray = message.content.split(" ").slice(prefix.length)


    if (message.author.bot) return;
    if (!message.content.startsWith(prefix))return;


    try {
    
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];


        

	
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args);

    } catch (e) {
    
        return undefined;
    }


});

const { Canvas } = require("canvas-constructor"); // You can't make images without this.

bot.on("guildMemberRemove", async (member, client, message, args, level) => {  
            const guild = member.guild
            var namam = member.user.username
            var jadim = namam.length > 22 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
            
                        var background = JSON.parse(fs.readFileSync("./db/backgroundl.json", "utf8"))
        if (!background[guild.id]) background[guild.id] = {}
        //if (!background[guild.id].nick) background[guild.id].nick = 'https://cdn.discordapp.com/attachments/478872920576360450/482558376052523008/download.jpg';
        if (!background[guild.id].nick) background[guild.id].nick = 'https://e.top4top.net/p_1036fhbbp1.png';
              fs.writeFile("./db/backgroundl.json", JSON.stringify(background), (err) => {
                if (err) console.log(err)
             });

            let bk = background[guild.id].nick;
            var {body: background} = await superagent.get(`${background[guild.id].nick}`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(1080, 591)
                .addImage(avatar, 295, 50, 256, 256, 128)
                //.setTextFont('50px System')
                .addImage(background, 0, 0, 1080, 591)
                .setColor('#000000')
                .setTextAlign('center')
                .setTextFont('40px Arial')
                .addText(`${member.user.tag}`, 527, 476)
                .setColor('#ffffff')
                .setTextAlign('center')
                .setTextFont('36px Arial')
                .addText(`${member.user.discriminator}`, 110, 498)
                .addText(`leave`, 920, 498)
	            //.addText(`Number ${member.guild.memberCount} `, 95, 200)
                .addRoundImage(avatar, 371, 89, 340, 340, 170)
                .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./db/leave.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./db/leaveonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }
    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./db/leave.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;
            
            channel.send(`**مع السلامة** ${member.user.tag} **نراك لاحقآ . **`)+channel.send(new Discord.Attachment(await createCanvas()));
    }
});
bot.on("guildMemberAdd", async (member, client, message, args, level) => {  
	    const guild = member.guild;
            var namam = member.user.username
            var jadim = namam.length > 22 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
                        var background = JSON.parse(fs.readFileSync("./db/backgroundj.json", "utf8"))
        if (!background[guild.id]) background[guild.id] = {}
        //if (!background[guild.id].nick) background[guild.id].nick = 'https://cdn.discordapp.com/attachments/478872920576360450/482558376052523008/download.jpg';
        if (!background[guild.id].nick) background[guild.id].nick = 'https://e.top4top.net/p_1036fhbbp1.png';
              fs.writeFile("./db/backgroundj.json", JSON.stringify(background), (err) => {
                if (err) console.log(err)
             });

	    let bk = background[guild.id].nick;
            var {body: background} = await superagent.get(`${background[guild.id].nick}`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));


            return new Canvas(1080, 591)
                .addImage(avatar, 295, 50, 256, 256, 128)
                //.setTextFont('50px System')
                .addImage(background, 0, 0, 1080, 591)
                .setColor('#000000')
                .setTextAlign('center')
                .setTextFont('40px Arial')
                .addText(`${member.user.tag}`, 527, 476)
                .setColor('#ffffff')
                .setTextAlign('center')
                .setTextFont('36px Arial')
                .addText(`${member.user.discriminator}`, 110, 498)
                .addText(`join`, 920, 498)
	            //.addText(`Number ${member.guild.memberCount} `, 95, 200)
                .addRoundImage(avatar, 371, 89, 340, 340, 170)
                .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./db/welcome.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./db/welcomeonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }
    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./db/welcome.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;
  
            channel.send(`أهلا وسهلآ في سيرفر **${guild.name}**, **${member.user.username}!** نتمني لك قضاء وقت ممتع في السيرفر .\nأنت العضو رقم : **${member.guild.memberCount}** !`)+channel.send(new Discord.Attachment(await createCanvas()));
    }
});



bot.login(config.token);