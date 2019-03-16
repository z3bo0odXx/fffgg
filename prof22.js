const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const pretty = require("pretty-ms");
const moment = require("moment");
const botconfig = JSON.parse(fs.readFileSync('./jsonfile/botconfig.json','utf8')); 
const prefix = "$"
let gamesTime = 15000;
let client = bot;
bot.login(botconfig.token);
  const dailies = require("./dailies.json")
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
//cmd("clear", "clear <amount (defualt 100) | @user(optional) >", "clear", "Moderation");

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
  const done = {};
let done1 = {};
let done2 = {};
  bot.on('ready', () =>{
      console.log(`On Know`)
  })
 
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let men = message.mentions.users.first() || message.author;
  moment.locale('en')

  if(message.content.startsWith(prefix + "daily")) {


    con.query(`SELECT * FROM scores WHERE userId = '${message.author.id}'`, (err, rows) => {
      if(err) throw err;
 
        con.query(`UPDATE userDI SET creds = '${rows[0].credit + 50}' WHERE id = '${message.author.id}'`)


    })

  }
  if(message.content.startsWith(prefix + 'credit')) {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
        con.query(`SELECT * FROM userDI WHERE id = '${men.id}'`, (err, rows) => {
          if(!rows || !rows[0] || rows.lenght < 0) {
            message.channel.send(`**${men.username}'s :credit_card: balance is \`\`#0\`\`.**`)
          } else {
            message.channel.send(`**${men.username}'s :credit_card: balance is \`\`$${rows[0].creds}\`\`.**`)
        }
      })
  }
  if(message.content.startsWith(prefix + "profile")) {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
    message.channel.startTyping()
    setTimeout(() => {
          message.channel.stopTyping()
}, 1000)
  }
})