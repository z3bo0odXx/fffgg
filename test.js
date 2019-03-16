const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const bot = new Discord.Client({disableEveryone: true});
bot.on('error', console.error);
bot.on("error", _ => _);
bot.on('error', (err) => console.error(err));
let hero = bot;

const Jimp = require("jimp");
const jimp = require('jimp');
const moment = require("moment");
const pretty = require("pretty-ms");

const SQLite = require("better-sqlite3");
const Canvas = require('canvas');
const sql = new SQLite('./profile.sqlite');
const sqll = new SQLite('../Sbot/edited.sqlite')
const prettyMs = require('pretty-ms');
const prefix = "$";
let done1 = {};

bot.on('message', message => {
         

	if (message.content === prefix + "background 1") {
		if(!message.channel.guild) return;

var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`1\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 1\`**`)
.setImage('https://i.postimg.cc/0ybP3BBL/1.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});




bot.on('message', message => {
         
 
	if (message.content === prefix + "background 2") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`2\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 2\`**`)
.setImage('https://i.postimg.cc/Z5rVTT23/2.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 3") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`3\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 3\`**`)
.setImage('https://i.postimg.cc/GtGqHdtZ/3.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});


bot.on('message', message => {
         
 
	if (message.content === prefix + "background 4") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`4\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 4\`**`)
.setImage('https://i.postimg.cc/jdCj02Wg/4.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 5") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`5\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 5\`**`)
.setImage('https://i.postimg.cc/pT220LbB/5.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 6") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`6\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 6\`**`)
.setImage('https://i.postimg.cc/y6GHRPdj/6.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 7") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`7\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 7\`**`)
.setImage('https://i.postimg.cc/0QHLpk8j/7.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 8") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`8\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 8\`**`)
.setImage('https://i.postimg.cc/05K8c3hF/8.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 9") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`9\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 9\`**`)
.setImage('https://i.postimg.cc/mgmfbN07/9.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 10") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`10\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 10\`**`)
.setImage('https://i.postimg.cc/L5KGyy1F/10.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 11") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`11\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 11\`**`)
.setImage('https://i.postimg.cc/kgv8DDcQ/11.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 12") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`12\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 12\`**`)
.setImage('https://i.postimg.cc/6Q18GZGv/12.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});


bot.on('message', message => {
         
 
	if (message.content === prefix + "background 13") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`13\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 13\`**`)
.setImage('https://i.postimg.cc/R0qF90bV/13.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 14") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`14\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 14\`**`)
.setImage('https://i.postimg.cc/63JNS6kP/14.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});


bot.on('message', message => {
         
 
	if (message.content === prefix + "background 15") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`15\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 15\`**`)
.setImage('https://i.postimg.cc/Pr3nHMGY/15.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 16") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`16\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 16\`**`)
.setImage('https://i.postimg.cc/QtkvyQkB/16.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});


bot.on('message', message => {
         
 
	if (message.content === prefix + "background 17") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`17\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 17\`**`)
.setImage('https://i.postimg.cc/prrkJz0M/17.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 18") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`18\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 18\`**`)
.setImage('https://i.postimg.cc/CLfsMFX7/18.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 19") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`19\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 19\`**`)
.setImage('https://i.postimg.cc/9FTg8tmc/19.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});


bot.on('message', message => {
         
 
	if (message.content === prefix + "background 20") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`20\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 20\`**`)
.setImage('https://i.postimg.cc/KzBgSzR3/20.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 21") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`21\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 21\`**`)
.setImage('https://i.postimg.cc/Qxws5q6s/21.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});


bot.on('message', message => {
         
 
	if (message.content === prefix + "background 22") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`22\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 22\`**`)
.setImage('https://i.postimg.cc/9MFss4xJ/22.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 23") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`23\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 23\`**`)
.setImage('https://i.postimg.cc/zGCMBw6x/23.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 24") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`24\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 24\`**`)
.setImage('https://i.postimg.cc/FKs4Xnzy/24.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 25") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`25\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 25\`**`)
.setImage('https://i.postimg.cc/hvVwd9h4/25.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 26") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`26\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 26\`**`)
.setImage('https://i.postimg.cc/5tjR3cjR/26.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});

bot.on('message', message => {
         
 
	if (message.content === prefix + "background 27") {
	 
	 if(!message.channel.guild) return;
var id = new  Discord.RichEmbed()
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(`❯ BackGround: `,`→ Number: **\`27\`**`)
.addField(`❯ To get: `,`→ Type: **\`$buy 27\`**`)
.setImage('https://i.postimg.cc/1thrNbF6/27.jpg')
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);

}
 
 
 
});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  const profile = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'profile';").get();
  if (!profile['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE profile (UserID TEXT PRIMARY KEY, GuildID TEXT, xp INTEGER, lvl INTEGER, coins INTEGER, bg INTEGER, note TEXT, likes INTEGER, rep INTEGER, w0 INTEGER, w1 INTEGER, w2 INTEGER, w3 INTEGER, w4 INTEGER, w5 INTEGER);").run();
  }
  const rep = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'rep';").get();
  if (!rep['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE rep (UserID, LikedUser TEXT PRIMARY KEY, GuildID TEXT, Time TEXT);").run();
  }
  const liked = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'liked';").get();
  if (!liked['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE liked (UserID, LikedUser TEXT PRIMARY KEY, GuildID TEXT, Time TEXT);").run();
  }

  const about = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'about';").get();
  if (!about['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE about (UserID TEXT PRIMARY KEY, career TEXT, age TEXT, club TEXT, model TEXT, study TEXT, future TEXT, life TEXT, words TEXT);").run();
  }

  
  bot.setInterval(() =>{
    let d = Date.now()
  
   let rep = sql.prepare(`SELECT * FROM rep`).all()
      if(!rep)return;
      for (var i = 0; i < rep.length ; i++){
        if(rep[i].Time < d){
          sql.prepare(`DELETE FROM rep WHERE UserID = '${rep[i].UserID}' AND Time = ${rep[i].Time}`).run();
          
        }
      }
  }, 5000)
  
});


function generateXp() {
  let min = 2
  let max = 7
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



bot.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type ==="dm") return;

let coinAmt = Math.floor(Math.random() * 3) + 1;
let baseAmt = Math.floor(Math.random() * 3) + 1;
let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
  let profile = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()

  let sqlstr;

  if(!profile){
    sqlstr = `INSERT INTO profile (UserID, GuildID, xp, lvl, coins, bg, note, likes, rep, w0, w1, w2, w3, w4, w5) VALUES ('${message.author.id}', '${message.guild.id}', ${generateXp()}, '1', '0', '1', 'لا يوجد | للتحديد : $note', '0', '0', '1', '0', '0', '0', '0', '0')`
  }
  else if(coinAmt === baseAmt){
    let coins = profile.coins
    let xp = profile.xp
    sqlstr = `UPDATE profile SET coins = ${coins + coinAmt}, xp = ${xp + generateXp()} WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
  }
  else{
    let xp = profile.xp
    sqlstr = `UPDATE profile SET xp = ${xp + generateXp()} WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
    let curlvl = profile.lvl;
    let nxtLvl = profile.lvl * 1000;
    if(nxtLvl <= profile.xp){
      sqlstr = `UPDATE profile SET lvl = ${curlvl + 1} WHERE UserID = '${message.author.id}'`;
      sql.prepare(sqlstr).run();
      let lvlico = message.author.displayAvatarURL;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(lvlico)
    .setTitle(" :up: | LEVEL UP.")
    .setColor("#6E0A51")
    .addField("- YourLevel: ", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
  }
  sql.prepare(sqlstr).run();

let about = sql.prepare(`SELECT * FROM about WHERE UserID = '${message.author.id}'`).get()



  if(!about){
    sqlstr = `INSERT INTO about (UserID, career, age, club, model, study, future, life, words) VALUES ('${message.author.id}', '#منصبي', '#عمري', '#نادي', '#قدوتي', '#تخصصي', '#طموحي', '#حكمتي', '#خاطري')`
     sql.prepare(sqlstr).run();
  }
});

bot.on('message',async message => {
	if(message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
	let args = message.content.split(" ").slice(1);
	let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
	let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
	let cmd = message.content.split(" ")[0].substring(prefix.length);
	if(cmd === "rep") {
					let pUser = message.mentions.users.first();

			if(message.mentions.users.size < 1) return message.channel.send(`** ${f} | \`$rep @EdiTeD.\`**`).then(msg => {msg.delete(5000)});
			if(pUser.bot) return message.channel.send(`**:robot:  | do you love this bot? :joy:**`);
			if(pUser.id === message.author.id) return message.channel.send(`**${f} | You can\'t rep yourself.**`);
			let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${pUser.id}'`).get()
		
				if(!rows) return message.reply(`**${f} | \`غير مسجل بعد\`**`);

				let id = message.author.id;
				if (!!done1[id] && (new Date).getTime() - done1[id] < 86400000) {
				let r = (new Date).getTime() - done1[id];
				r = 86400000 - r;
				 const embed = new Discord.RichEmbed()
				 .setTitle(':timer: | WAITING!.', message.author.displayAvatarURL)
				 .addField(':clock: | Time left: ',`${pretty(r, {verbose:true})}`)
				 .setColor('RANDOM')
				 message.channel.send({embed: embed});
				 }else {

				if(rows.length < 1) return message.reply(`** ${f} | \`غير مسجل بعد\`**`);
				let LUser  = rows.likes;
									sqlstr = `UPDATE profile SET likes = ${LUser + 1} WHERE UserID = '${pUser.id}'`;
									sql.prepare(sqlstr).run()
									done1[id] = (new Date).getTime();

									return message.reply(`**${t} | you are give\'s rep to this user.**`);
								 

				 }
					
	
	
} else if(cmd === "profile") {
	let bg = require("./bg.json");
let wesam = require("./wesam.json");
const talkedRecently = new Set();
let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
let color;
let arrow;

let timeoute = new Discord.RichEmbed()
.setColor("#C2C2C2")
.setTitle(":timer: | WAITING, 20sec.");
if (talkedRecently.has(message.author.id)) {
	
	message.channel.send(timeoute).then(msg => {msg.delete(5000)});
} else {

let puser = message.guild.member(message.mentions.users.first() || message.author);
if (!message.mentions.users.size < 1){
  
let rows  =  sql.prepare(`SELECT * FROM profile WHERE UserID = '${puser.id}'`).get();
let row = sqll.prepare(`SELECT * FROM scores WHERE userId ='${puser.id}'`).get();
let rankedtext = sql.prepare(`SELECT * FROM (SELECT a1.UserID, a1.xp , COUNT (a2.xp) rank 
FROM profile a1, profile a2 
WHERE a1.xp < a2.xp OR (a1.xp=a2.xp AND a1.UserID = a2.UserID) 
GROUP BY a1.UserID, a1.xp 
ORDER BY a1.xp DESC, a1.UserID DESC) WHERE UserID = '${puser.id}'`).get()
	let sqlstr;
	if(!rows) return message.reply(`**${f} | لم يتم تسجيله بقاعدة البيانات بعد**`).then(msg => {msg.delete(5000)});
		
let ubackg = rows.bg;
let uw0 = rows.w0;
let uw1 = rows.w1;
let uw2 = rows.w2;
let uw3 = rows.w3;
let uw4 = rows.w4;
let uw5 = rows.w5;
let uCoins = row.credit;
let curlvl = rows.lvl;
let curxp = rows.xp;
let curbg = bg[ubackg].bg;
let w0 = wesam[uw0].w;
let w1 = wesam[uw1].w;
let w2 = wesam[uw2].w;
let w3 = wesam[uw3].w;
let w4 = wesam[uw4].w;
let w5 = wesam[uw5].w;
let nn = rows.note;
let curlikes = rows.likes;
let currep = rows.rep;
let currk = rankedtext.rank;
let nxtLvlXp = curlvl * 1000;
let difference = nxtLvlXp - curxp;
if(currep >= 0){
	color = '#FFFFFF'
	arrow = '↑'
}

else{
	color = '#FFFFFF'
	arrow = '↓'
}
let words = []
let ad = ''
words = nn.split(" ");
for(let i =0 ; i < words.length ; i++){
ad = ad + words[i] + ' ';
if(i === 10 || i === 20 || i === 30){
	ad = ad + `\n`
}
}


let Image = Canvas.Image,
canvas = Canvas.createCanvas(400, 400),
ctx = canvas.getContext('2d');
	ctx.patternQuality = 'bilinear';
	ctx.filter = 'bilinear';
	ctx.antialias = 'subpixel';
	ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
fs.readFile(curbg,async function (err, Background) {
if (err) return console.log(err);
let ground = new Image;
ground.src = Background;
await ctx.drawImage(ground, 0, 0, 400, 400);

})


	jimp.read(w0,async function (err, ava) {
		if (err) return console.log(err);
		ava.getBuffer(jimp.MIME_PNG,async function (err, w0b) {
			if (err) return console.log(err);
	
			let prof = new Image;
			prof.src = w0b;
		  
		   await ctx.drawImage(prof, 284, 207, 20, 20);
		})
	})
	jimp.read(w1,async function (err, ava) {
		if (err) return console.log(err);
		ava.getBuffer(jimp.MIME_PNG,async function (err, w1b)  {
			if (err) return console.log(err);
	
			let prof = new Image;
			prof.src = w1b;
			await ctx.drawImage(prof, 311, 207, 20, 20);
		})
	})
	jimp.read(w2,async function (err, ava) {
		if (err) return console.log(err);
		ava.getBuffer(jimp.MIME_PNG,async function (err, w2b) {
			if (err) return console.log(err);
	
			let prof = new Image;
			prof.src = w2b;
		   await ctx.drawImage(prof, 339, 207, 20, 20);
		})
	})
	jimp.read(w3,async function (err, ava)  {
		if (err) return console.log(err);
		ava.getBuffer(jimp.MIME_PNG,async function (err, w3b)  {
			if (err) return console.log(err);
	
			let prof = new Image;
			prof.src = w3b;
			await ctx.drawImage(prof, 284, 228, 20, 20);
		})
	})
	jimp.read(w4,async function (err, ava)  {
		if (err) return console.log(err);
		ava.getBuffer(jimp.MIME_PNG,async function (err, w4b)  {
			if (err) return console.log(err);
	
			let prof = new Image;
			prof.src = w4b;
			await ctx.drawImage(prof, 311, 228, 20, 20);
		})
	})
	jimp.read(w5,async function (err, ava)  {
		if (err) return console.log(err);
		ava.getBuffer(jimp.MIME_PNG,async function (err, w5b)  {
			if (err) return console.log(err);
	
			let prof = new Image;
			prof.src = w5b;
			await ctx.drawImage(prof, 339, 228, 20, 20);
		})
	})


			jimp.read(puser.user.displayAvatarURL, (err, ava) => {
				if (err) return console.log(err);
				ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
					if (err) return console.log(err);

				   let ava = new Image;
					ava.src = buf;
					ctx.drawImage(ava, 155, 72, 91, 91);


					ctx.font = '12px Arial';
					ctx.fontSize = '12px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "left";
					ctx.fillText(ad, 45, 275);
					
					//ur name
					ctx.font = '23px Arial';
					ctx.fontSize = '23px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "right";
					ctx.fillText(puser.user.username, 250, 225);
					ctx.font = '16px Arial';
					ctx.fontSize = '16px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`$${uCoins}`, 315, 165);
					ctx.font = '10px Arial';
					ctx.fontSize = '10px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`${1000 - difference}/1000`, 200, 347);
					ctx.font = '12px Arial';
					ctx.fontSize = '12px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`TOTAL EXP: ${curxp}`, 200, 362);
					ctx.font = '20px Arial';
					ctx.fontSize = '20px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`#${currk}`, 88, 165);
					ctx.font = '32px Arial';
					ctx.fontSize = '32px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`${curlvl}`, 315, 105);
					ctx.font = '32px Arial';
					ctx.fontSize = '32px';
					ctx.fillStyle = color;
					ctx.textAlign = "center";
					ctx.fillText(`♥${curlikes}`, 88, 105);
					message.channel.startTyping();
					setTimeout(function() {
			message.channel.send({files: [canvas.toBuffer()]});
			message.channel.stopTyping(true);
		}, 1000)
				})
			})
		

		
talkedRecently.add(message.author.id);
	setTimeout(() => {
	  talkedRecently.delete(message.author.id);
	}, 20000);
}
else{
let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
let row = sqll.prepare(`SELECT * FROM scores WHERE userId = '${message.author.id}'`).get()
  if(rows.length < 1) return message.reply(`**${t} | تم تسجيلك حاول بعد 20 ثانية**`).then(msg => {msg.delete(5000)});
let rankedtext = sql.prepare(`SELECT * FROM (SELECT a1.UserID, a1.xp , COUNT (a2.xp) rank 
FROM profile a1, profile a2 
WHERE a1.xp < a2.xp OR (a1.xp=a2.xp AND a1.UserID = a2.UserID) 
GROUP BY a1.UserID, a1.xp 
ORDER BY a1.xp DESC, a1.UserID DESC) WHERE UserID = '${message.author.id}'`).get()

let ubackg = rows.bg;
let uw0 = rows.w0;
let uw1 = rows.w1;
let uw2 = rows.w2;
let uw3 = rows.w3;
let uw4 = rows.w4;
let uw5 = rows.w5;
let uCoins = row.credit;
let curlvl = rows.lvl;
let curxp = rows.xp;
let curbg = bg[ubackg].bg;
let w0 = wesam[uw0].w;
let w1 = wesam[uw1].w;
let w2 = wesam[uw2].w;
let w3 = wesam[uw3].w;
let w4 = wesam[uw4].w;
let w5 = wesam[uw5].w;
let nn = rows.note;
let curlikes = rows.likes;
let currep = rows.rep;
let currk = rankedtext.rank;
let nxtLvlXp = curlvl * 1000;
let difference = nxtLvlXp - curxp;
if(currep >= 0){
	color = '#FFFFFF'
	arrow = '↑'
}

else{
	color = '#FFFFFF'
	arrow = '↓'
}
let words = []
let ad = ''
words = nn.split(" ");
for(let i =0 ; i < words.length ; i++){
ad = ad + words[i] + ' ';
if(i === 10 || i === 20 || i === 30){
	ad = ad + `\n`
}
}


let Image = Canvas.Image,
canvas = Canvas.createCanvas(400, 400),
ctx = canvas.getContext('2d');
	ctx.patternQuality = 'bilinear';
	ctx.filter = 'bilinear';
	ctx.antialias = 'subpixel';
	ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
fs.readFile(curbg, async function (err, Background) {
if (err) return console.log(err);
let ground = new Image;
ground.src = Background;
await ctx.drawImage(ground, 0, 0, 400, 400);

})



jimp.read(w0,async function (err, ava) {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG,async function (err, w0b) {
	if (err) return console.log(err);

	let prof = new Image;
	prof.src = w0b;
  
   await ctx.drawImage(prof, 284, 207, 20, 20);
})
})
jimp.read(w1,async function (err, ava) {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG,async function (err, w1b)  {
	if (err) return console.log(err);

	let prof = new Image;
	prof.src = w1b;
	await ctx.drawImage(prof, 311, 207, 20, 20);
})
})
jimp.read(w2,async function (err, ava) {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG,async function (err, w2b) {
	if (err) return console.log(err);

	let prof = new Image;
	prof.src = w2b;
   await ctx.drawImage(prof, 339, 207, 20, 20);
})
})
jimp.read(w3,async function (err, ava)  {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG,async function (err, w3b)  {
	if (err) return console.log(err);

	let prof = new Image;
	prof.src = w3b;
	await ctx.drawImage(prof, 284, 228, 20, 20);
})
})
jimp.read(w4,async function (err, ava)  {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG,async function (err, w4b)  {
	if (err) return console.log(err);

	let prof = new Image;
	prof.src = w4b;
	await ctx.drawImage(prof, 311, 228, 20, 20);
})
})
jimp.read(w5,async function (err, ava)  {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG,async function (err, w5b)  {
	if (err) return console.log(err);

	let prof = new Image;
	prof.src = w5b;
	await ctx.drawImage(prof, 339, 228, 20, 20);
})
})

			jimp.read(message.author.displayAvatarURL, (err, ava) => {
				if (err) return console.log(err);
				ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
					if (err) return console.log(err);

				   let ava = new Image;
					ava.src = buf;
					ctx.drawImage(ava, 155, 72, 91, 91);

					ctx.font = '12px Arial';
					ctx.fontSize = '12px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "left";
					ctx.fillText(ad, 45, 275);
					
					//ur name
					ctx.font = '23px Arial';
					ctx.fontSize = '23px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "right";
					ctx.fillText(message.author.username, 250, 225);
					ctx.font = '16px Arial';
					ctx.fontSize = '16px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`$${uCoins}`, 315, 165);
					ctx.font = '10px Arial';
					ctx.fontSize = '10px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`${1000 - difference}/1000`, 200, 347);
					ctx.font = '12px Arial';
					ctx.fontSize = '12px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`TOTAL EXP : ${curxp}`, 200, 362);
					ctx.font = '20px Arial';
					ctx.fontSize = '20px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`#${currk}`, 88, 165);
					ctx.font = '32px Arial';
					ctx.fontSize = '32px';
					ctx.fillStyle = "#FFFFFF";
					ctx.textAlign = "center";
					ctx.fillText(`${curlvl}`, 315, 105);
					ctx.font = '32px Arial';
					ctx.fontSize = '32px';
					ctx.fillStyle = color;
					ctx.textAlign = "center";
					ctx.fillText(`♥${curlikes}`, 88, 105)
					message.channel.startTyping();
					setTimeout(function() {
			message.channel.send({files: [canvas.toBuffer()]});
			message.channel.stopTyping(true);
		}, 1000)
				})
			})
		
talkedRecently.add(message.author.id);
	setTimeout(() => {
	  talkedRecently.delete(message.author.id);
	}, 20000);
}
}

} else if(cmd === "note") {
			let noty = args.join(" ");
			let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
      let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if(message.mentions.users.size >= 1) return message.reply(`**${f} | Error in command.**`);
    if(noty.length < 1) return message.reply(`**${f} | please type your note.**`)
    if(noty.length > 180) return message.reply(`**${f} | don\'t type note with up 180 leter.**`)

		let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
		let row = sqll.prepare(`SELECT * FROM scores WHERE userId = '${message.author.id}'`).get()

    let sqlstr;
    let uCoins = row.credit;


    sqlstr = `UPDATE profile SET note = "${noty}" WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();


    return message.reply(`**${t} | Done, changed your note.**`).then(msg => {msg.delete(5000)});
} else if(cmd === "[fljhaccsjackjbadlefklcaghajkjgshsnkwdndbwhjbqw2kjv2hj12oiwy1guy2h1k1p1koinbvuwguiqjlksapofiusiosguIGBANJKSLDF;FPOPSIIHCXUBHJNVKM,LCXKZJH]") {
	const { MessageAttachment } = Discord;
let bg = require("./bg.json");
let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
let ubackg = rows.bg;
  let curbg = bg[ubackg].bg;
  let Image = Canvas.Image,
  canvas = Canvas.createCanvas(800, 800),
  ctx = canvas.getContext('2d');
      ctx.patternQuality = 'bilinear';
      ctx.filter = 'bilinear';
      ctx.antialias = 'subpixel';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
fs.readFile("./img/shopping.jpg", function (err, Background) {
  if (err) return console.log(err);
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 800, 800);
  Jimp.read(curbg, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(Jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

       let ava = new Image;
        ava.src = buf;
        ctx.drawImage(ava, 46, 39, 170, 170);
		message.channel.startTyping();
        message.channel.send({files: [canvas.toBuffer()]});
		message.channel.stopTyping(true);
    });
  });
});

} else if(cmd === "wijqhwioqhwqihwqiwjqoiwhqwh") {
	let target = message.author;

let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${target.id}'`).get()

if(!rows) return message.reply("**:x: | حاول مرة أخرى**");


let curxp = rows.xp;
let curlvl = rows.lvl;
let nxtLvlXp = curlvl * 1000;
let difference = nxtLvlXp - curxp;

let lvlEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("RANDOM")
.addField("- LEVEL: ", curlvl, true)
.addField("- XP: ", curxp, true)
.setFooter(`${difference} XP til level up.`, message.author.displayAvatarURL);

message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});

}
});
bot.on('message', message => {
	
	if(message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
	let cmd = message.content.split(" ")[0].substring(prefix.length);
	if(cmd === "buy") {
		let bg = require("./bg.json");
		let args = message.content.split(" ").slice(1)
		let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
		let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    let bgnum = parseInt(args[0]);
    if(message.mentions.users.size >= 1) return message.reply(`**${f} | Error in command.**`);
    if(!args[0]) return message.reply(`**${f} | please select background.**`)
		if(isNaN(parseInt(args[0]))) return message.reply(`**${f} | you are type incorrect background number.**`);
		if(args[0] > 27) return message.reply(`**${f} | you are type incorrect background number.**`);
    if(!bg[parseInt(args[0])].bg) return message.reply(`**${f} | you are type incorrect background number.**`);
		let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
		let row = sqll.prepare(`SELECT * FROM scores WHERE userId = '${message.author.id}'`).get()

				let sqlstr;
        let uCoins = row.credit;


        sqlstr = `UPDATE profile SET bg = ${parseInt(args[0])} WHERE UserID = '${message.author.id}'`;
				sql.prepare(sqlstr).run()
				return message.reply(`**${t} | Done, changed your background.**`);

				
	}
})
bot.on('message', message => {
	
	if(message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
	let cmd = message.content.split(" ")[0].substring(prefix.length);
	if(cmd === "wm") {
		let args = message.content.split(" ").slice(1)
		let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
		let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
		const devs = ['516618898850709504','475396751549792277','515096989369761802','418715344614588428'];
		if (!devs.includes(message.author.id)) return;
		let pUser = message.mentions.users.first();
if(!pUser)return message.channel.send(`**${f} | select person.**`);
if(message.mentions.users.first() < 1) return message.channel.send(`**${f} | select person.**`);
let rows =  sql.prepare(`SELECT * FROM profile WHERE UserID = '${pUser.id}'`).get()

		let sqlstr;
		sqlstr = `UPDATE profile SET w0 = ${parseInt(args[1])}, w1 = ${parseInt(args[2])}, w2 = ${parseInt(args[3])}, w3 = ${parseInt(args[4])}, w4 = ${parseInt(args[5])}, w5 = ${parseInt(args[6])} WHERE UserID = '${pUser.id}'`;
		sql.prepare(sqlstr).run()


return message.reply(`**${t} | Done, changed wesams.*`);
	}
})

bot.login('NTIyODk5Nzk0MzY5NDQ1ODkw.D1rQmA.lr6ha_AJ_XvBO_aa3h-n8ntLBqs');
