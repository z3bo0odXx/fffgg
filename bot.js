// Start Of Bot
const pretty = require("pretty-ms");

const Discord = require("discord.js");
const moment = require('moment');
const client = new Discord.Client();
const bot = new Discord.Client();
const hero = client;
const fs = require("fs");
botconfig = JSON.parse(fs.readFileSync('./jsonfile/botconfig.json', 'utf8'));
client.login(botconfig.token)
const ms = require("ms");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = botconfig.prefix



var mysql = require("mysql")

var db_config = {
  host: "localhost",
  user: "root",
  password: "SSbboott11",
  database: "SBot"
}
var con;
client.on('warn', console.warn);

client.on('error', console.error);

function handleDisconnect() {
  con = mysql.createConnection(db_config);

  con.connect(function(err) {
    if(err) {
      console.log("IJS Found error to connect to the database: ", err);
      setTimeout(handleDisconnect, 2000); 
    } else {
      console.log("\033[92m%s\x1b[0m", "Success: " + "\x1b[0mIJS - Database connected successfully!");
    }

  });
  con.on('error', function(err) {
    console.log('db error');
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();
    } else {
          throw err;
    }
  });
}

handleDisconnect();

client.on('message', async function(message) {
    const cmd = (a,b,c,d) => {
        return;
        }
        let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
        let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
      con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' AND id = '${message.author.id}'`, (e, rows) => {
        if(e) throw e;
        if(!rows || !rows[0] || rows.lenght < 0) {
          con.query(`INSERT INTO top (id, gid, txp) VALUES ('${message.author.id}', '${message.guild.id}', 1)`);
        } else {
          if(message.content === "confirm") return;
            con.query(`UPDATE top SET txp = ${parseInt(rows[0].txp)+1} WHERE id = '${message.author.id}' AND gid = '${message.guild.id}'`)
        }
      })
  if(message.content.toLowerCase() === prefix + "top") {
    cmd("top", "Send a leaderboard for all active members in the server", "top", "Info");
    //
    con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY txp DESC`, (e, rows) => {
      con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY vxp DESC`, (e, rowa) => {
    var text = '';
    var voice = '';
  for(var i = 0; i < 5; i++) {
    if(rows[i]) {
      let user = client.users.get(rows[i].id);
     
      let is = '';
      if(rows[i].id == message.author.id) {
        is = "**"
      } else {
        is = '';
      }
  
       text += `${is}#${parseInt(i)+1} | <@${rows[i].id}> XP: \`${rows[i].txp}\`${is}\n` 
  
    }
      }
   for(var i = 0; i < 5; i++) {
      if(rowa[i]) {
        let user = client.users.get(rowa[i].id);
       
        let is = '';
        if(rowa[i].id == message.author.id) {
          is = "**"
        } else {
          is = '';
        }
          voice += `${is}#${parseInt(i)+1} | <@${rowa[i].id}> XP: \`${rowa[i].vxp}\`${is}\n` 
    
      }
        }
    
   
  const embed2 = new Discord.RichEmbed()
  
  .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor(" #191919")
  .addField(`**:speech_balloon: | TOP 5 TEXT**`, `${text}  \n  **:thinking: | For More: \`${prefix}top text\`**`, true)
  .addField("**:microphone2: | TOP 5 VOICE**", `${voice} \n **:thinking: | For More: \`${prefix}top voice\`**`, true)
  .setFooter(message.author.tag, message.author.displayAvatarURL)
  
  message.channel.send(embed2)
    
  })
    })
  }
      if(message.content.toLowerCase() === (prefix + 'top text')) {
        cmd("top text", "Send a leaderboard for all active members in the server", "top text", "Info");
        con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY txp DESC`, (e, rows) => {
          var text = '';
          
         {
          for (var i = 0; i < 10; i++) {
  
            if(rows[i]) {
              let user = client.users.get(rows[i].id);
             
              let is = '';
              if(rows[i].id == message.author.id) {
                is = "**"
              } else {
                is = '';
              }
          
  
               text += `${is}#${parseInt(i)+1} <@${rows[i].id}> XP: \`${rows[i].txp}\`${is}\n` 
          
            }
        }
  
        const embed2 = new Discord.RichEmbed()
  
        .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor(" #191919")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${text}`, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
  
        message.channel.send(embed2)
          }
        })
      }
      if(message.content.toLowerCase() === (prefix + 'top voice')) {
        cmd("top voice", "Send a leaderboard for all active members in the server", "top voice", "Info");
        con.query(`SELECT * FROM top WHERE gid = '${message.guild.id}' ORDER BY vxp DESC`, (e, rows) => {
          var text = '';
          var voice = '';
         for(var i = 0; i < 10; i++){
          if(rows[i]) {
            let user = client.users.get(rows[i].id);
           
            let is = '';
            if(rows[i].id == message.author.id) {
              is = "**"
            } else {
              is = '';
            }
        
  
             text += `${is}#${parseInt(i)+1} <@${rows[i].id}> XP: \`${rows[i].vxp}\`${is}\n` 
        
          }
        }
        const embed2 = new Discord.RichEmbed()
  
        .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor(" #191919")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${text}`, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
  
        message.channel.send(embed2)
          
        })
      }
  
  con.query(`SELECT * FROM top WHERE gid='${message.guild.id}'`, (err, rows) => {
      if(message.content === prefix + "reset all") {
        if(!message.member.hasPermission("MANAGE_GUILD")) return;
        message.channel.send("**:warning: | لتأكيد عملية تصفير جميع النقاط , قم بكتابة : ```confirm```**").then(async msg => {
          try{
          let conf = await message.channel.awaitMessages(m => m.content === "confirm", { max: 1, time: 20000, errors: ["time"]}).then(c => {
            message.delete();
              msg.edit(`**${t} | تم تصفير جميع النقاط**`);
              con.query(`UPDATE top SET txp=0 WHERE gid = '${message.guild.id}'`)
              con.query(`UPDATE top SET txp=0 WHERE gid = '${message.guild.id}' AND id='${message.author.id}'`)
              con.query(`UPDATE top SET vxp=0 WHERE gid = '${message.guild.id}'`)
              con.query(`UPDATE top SET vxp=0 WHERE gid = '${message.guild.id}' AND id='${message.author.id}'`)
  
            })
          } catch(e) {
            message.delete();
          }
        })
        }
      if(message.content === prefix + "reset text") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
        message.channel.send("**:warning: | لتأكيد عملية تصفير جميع النقاط الكتابية , قم بكتابة : ```confirm```**").then(async msg => {
          try{
          let conf = await message.channel.awaitMessages(m => m.content === "confirm", { max: 1, time: 20000, errors: ["time"]}).then(c => {
            message.delete();
              msg.edit(`**${t} | تم تصفير جميع النقاط**`);
              con.query(`UPDATE top SET txp=0 WHERE gid = '${message.guild.id}'`)
              con.query(`UPDATE top SET txp=0 WHERE gid = '${message.guild.id}' AND id='${message.author.id}'`)
        
  
            })
          } catch(e) {
            message.delete();
          }
        })
      }
      if(message.content === prefix + "reset voice") {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
        message.channel.send("**:warning: | لتأكيد عملية تصفير جميع النقاط الكتابية , قم بكتابة : ```confirm```**").then(async msg => {
          try{
          let conf = await message.channel.awaitMessages(m => m.content === "confirm", { max: 1, time: 20000, errors: ["time"]}).then(c => {
            message.delete();
              msg.edit(`**${t} | تم تصفير جميع النقاط**`);
              
              con.query(`UPDATE top SET vxp=0 WHERE gid = '${message.guild.id}'`)
              con.query(`UPDATE top SET vxp=0 WHERE gid = '${message.guild.id}' AND id='${message.author.id}'`)
  
            })
          } catch(e) {
            message.delete();
          }
        })
      }
    })
  })


client.on("message", message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    const command = message.content.split(" ")[0];

    if (command == prefix + "vkick") {

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return;
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if (!message.mentions.users) {
            message.reply(`**${f} | منشن عضو لطردة من الروم**`)
            return;
        }

        if (!member.voiceChannel) {
            message.reply(`**${f} | لم أتمكن من اِيجاد العضو في أي روم**`)
            return;
        }
        message.guild.createChannel('- SBot || VKicK .', 'voice').then(c => {
            member.setVoiceChannel(c).then(() => {
                c.delete(305).catch(console.log)




            });
        });
    }
});




const jimp = require('jimp');
const Canvas = require("canvas");
client.on('message', message => {
    if (message.content == ('$clock')) {
        const w = ['./img/wc4.png'];

        let Image = Canvas.Image,
            canvas = new Canvas.Canvas(400, 400),
            ctx = canvas.getContext('2d');
        var radius = canvas.height / 2;
        var currentTime = new Date(),
            hours = currentTime.getHours(),
            minute = currentTime.getMinutes();
        var second = currentTime.getSeconds();
        ctx.translate(radius, radius);
        radius = radius * 0.90

        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 169);
        })


        ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;

        })
        let user = message.mentions.users.first();
        var men = message.mentions.users.first();
        var heg;
        if (men) {
            heg = men
        } else {
            heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
        var ment = message.mentions.users.first();
        var getvalueof;
        if (ment) {
            getvalueof = ment;
        } else {
            getvalueof = message.author;
        } //ما خصك ,_,
        let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
        jimp.read(url, (err, ava) => {
            if (err) return console.log(err);
            ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                if (err) return console.log(err);


                function drawFace(ctx, radius) {
                    var grad;
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                    ctx.fillStyle = 'white';
                    ctx.fill();
                    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
                    grad.addColorStop(0, '#333');
                    grad.addColorStop(0.5, 'black');
                    grad.addColorStop(1, '#333');
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = radius * 0.1;
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
                    ctx.fillStyle = '#333';
                    ctx.fill();
                }
                drawClock();

                function drawClock() {
                    drawFace(ctx, radius);
                    drawNumbers(ctx, radius);
                    drawTime(ctx, radius);
                }

                function drawNumbers(ctx, radius) {
                    var ang;
                    var num;
                    ctx.font = radius * 0.15 + "px arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    for (num = 1; num < 13; num++) {
                        ang = num * Math.PI / 6;
                        ctx.rotate(ang);
                        ctx.translate(0, -radius * 0.85);
                        ctx.rotate(-ang);
                        ctx.fillText(num.toString(), 0, 0);
                        ctx.rotate(ang);
                        ctx.translate(0, radius * 0.85);
                        ctx.rotate(-ang);
                    }
                }

                function drawTime(ctx, radius) {

                    if (hours > 12) {
                        hours -= 12;
                    } else if (hours == 0) {
                        hours = "12";
                    }
                    if (minute < 10) {
                        minute = '0' + minute;
                    }
                    //hour
                    hours = hours % 12;
                    hours = (hours * Math.PI / 6) +
                        (minute * Math.PI / (6 * 60)) +
                        (second * Math.PI / (360 * 60));
                    drawHand(ctx, hours, radius * 0.5, radius * 0.07);
                    //minute
                    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
                    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
                }

                function drawHand(ctx, pos, length, width) {
                    ctx.beginPath();
                    ctx.lineWidth = width;
                    ctx.lineCap = "round";
                    ctx.moveTo(0, 0);
                    ctx.rotate(pos);
                    ctx.lineTo(0, -length);
                    ctx.stroke();
                    ctx.rotate(-pos);
                }






                var currentTime = new Date(),
                    hours2 = currentTime.getHours(),
                    minutes2 = currentTime.getMinutes(),
                    seconds2 = currentTime.getSeconds();

                if (hours2 > 12) {
                    hours2 -= 12;
                } else if (hours2 == 0) {
                    hours2 = "12";
                }
                if (minutes2 < 10) {
                    minutes2 = '0' + minutes2;
                }

                message.channel.send((`**:clock: | الساعة الحالية : ${hours2}:${minutes2}:${seconds2}**`));



                message.channel.sendFile(canvas.toBuffer());




            })
        })
    }
});

client.on('message', message => {
    if (!message.channel.guild) return;
    let emoji = {
        yes: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'True')}`,
        wrong: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Wrong')}`,
        congrats: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Congrats')}`,
        online: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Online')}`,
        dnd: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'DND')}`,
        idle: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Idle')}`,
        offline: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Offline')}`,
        discord: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Discord')}`,
        shield: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'shield')}`,
        bot: `${hero.guilds.find(r => r.id === '525039237939200001').emojis.find(e => e.name === 'Bot')}`
    }
    if (message.content.startsWith(prefix + 'members')) {
        var edited = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .addField('❯ Members', `» ${emoji.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emoji.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emoji.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n» ${emoji.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emoji.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emoji.discord} \`${message.guild.memberCount}\``, true);
        message.channel.send(edited);
    }
});




const shorten = require('isgd');
client.on('message', message => {
    let gl = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "GlowPartner");
    if (message.content.startsWith(prefix + 'short')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.channel.send(`**${gl} | الاِستخدام: $short \`LINK\`. **`)
        if (!args[1]) {
            shorten.shorten(args[0], function (res) {
                if (res.startsWith('Error:')) return message.channel.send(`**${gl} الاِستخدام: $short \`LINK\`. **`);
                message.channel.send(`**${gl} | الرابط المختصر : ${res}**`);
            })
        } else {
            shorten.custom(args[0], args[1], function (res) {
                if (res.startsWith('Error:')) return message.channel.send(`**${gl} الرابط المختصر : ${res}**`);
                message.channel.send(`**${gl} | الرابط المختصر : ${res}**`);
            })
        }
    }
});












const {
    readFile,
    readFileSync
} = require('fs-nextra');

const cnvs = require("canvas");
const {
    get
} = require('snekfetch');

let inv = JSON.parse(fs.readFileSync("./userD.json", "UTF8"))

const invs = JSON.parse(fs.readFileSync("./invites.json", "UTF8"))

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    wait(1000);

    client.guilds.forEach(g => {
        if (g.members.get(client.user.id).hasPermission("MANAGE_GUILD"))
            g.fetchInvites().then(guildInvites => {
                invs[g.id] = guildInvites;
            });
    });
});

client.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
        const ei = invs[member.guild.id];
        invs[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        inv[member.user.id + member.guild.id].inviter = invite.inviter.id;
        fs.writeFile("./invites.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
    });
});

client.on('message', async message => {
    if (message.content.startsWith(prefix + "id")) {
        let mem = message.mentions.members.first() || message.member;
        let auth = message.mentions.users.first() || message.author;
        const imageUrlRegex = /\?size=2048$/g;
        const name = mem.displayName.length > 10 ? mem.displayName.substring(0, 11) + "..." : mem.displayName;

        const {
            body: ava
        } = await get(auth.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

        const img = await readFile("./id_1.png");
        const millis = new Date().getTime() - auth.createdAt.getTime();
        const now = new Date();
        const createdAt = millis / 1000 / 60 / 60 / 24;
        const millisj = new Date().getTime() - mem.joinedAt.getTime();
        const nowj = new Date();
        const joinedAt = millisj / 1000 / 60 / 60 / 24;

        if (!inv[mem.id + message.guild.id]) inv[mem.id + message.guild.id] = {
            inviter: "Not stored in database",
            totalSecs: 0
        }

        fs.writeFile("./userD.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
        // Invites
        const guildInvites = await message.guild.fetchInvites();
        let invites = 0;
        guildInvites.forEach(i => {
            if (i.inviter.id === auth.id) {
                invites += i.uses;
            }
        }) // اصلا البوت معاه انفايتات؟؟؟؟

        let inviter = client.users.get(inv[mem.id + message.guild.id].inviter);

        const {
            body: bot
        } = await get(message.guild.iconURL.replace(imageUrlRegex, "?size=128"));
        let cnvs = require("canvas-constructor");
        let canvas = new cnvs.Canvas(417, 181)
        canvas.addImage(img, 0, 0, 417, 181)
        canvas.addRoundImage(bot, 7, 1, 29, 29, 25)
        canvas.setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
        canvas.setShadowOffsetY(3) // Drop the shadow by 5 pixels.
        canvas.setShadowBlur(03) // Blur the shadow by 10.
        canvas.save()
            .addRoundImage(ava, 320, 55, 78, 78, 39)
            .setTextAlign("center")
            .setTextFont("8pt Cairo")
        canvas.setColor((mem.highestRole.hexColor === "#000000") ? "#ffffff" : mem.highestRole.hexColor)
        canvas.addText(name, 360, 162)
        canvas.setColor("#FFFFFF")
        canvas.addText(createdAt.toFixed(), 192, 77)
        canvas.addText((joinedAt.toFixed().length >= 3) ? joinedAt.toFixed() : joinedAt.toFixed() + " يوم", 257.5, 77)
        canvas.addText("0", 195, 130)
        canvas.addText("0", 258, 130)
        canvas.addText(`${inv[mem.id+message.guild.id].totalSecs} ثانية`, 205, 163)
        canvas.addText((invites === 1 || invites === 0) ? invites + " عضو" : invites + " أعضاء", 120, 128)
        canvas.addText((inviter) ? inviter.username : "لم يتم تحديدة", 110, 77)
        if (inviter) {
            const {
                body: buffer
            } = await get(inviter.avatarURL.replace(imageUrlRegex, "?size=128"))

            canvas.addRoundImage(buffer, 14, 59, 30, 30, 15)

        }

        //.addText("Joined at: ", 120, 100)
        message.channel.send({
            file: canvas.toBuffer()
        })
    }
})



let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

})