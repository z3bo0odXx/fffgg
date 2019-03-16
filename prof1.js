const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const pretty = require("pretty-ms");
const moment = require("moment");
const botconfig = JSON.parse(fs.readFileSync('./jsonfile/botconfig.json', 'utf8'));
const prefix = "$"
let gamesTime = 15000;

bot.login(botconfig.token);
const dailies = require("./dailies.json")
const sqlite3 = require("sqlite3");
const sql = new sqlite3.Database("./edited.sqlite");

bot.on('ready', () => {
  console.log(`On Know`)
})
bot.on('message', message => {
  if (message.channel.type == "dm") return console.log(message.author.username + ` => type this (${message.content}) in Dm`);
  if (message.author.bot) return;


  // T E X T - S Y S T E M //
  function getUserData(id) {
    sql.get(`select * from scores where userId = "${id}"`).then(row => {
      return row;
    }).catch(e => {
      sql.run(`INSERT INTO scores (
      userId, winNu ,
      loseNu,gamesNu,
      pointsFkk,points3oasm,
      pointslogo,pointsimoje,
      pointssr3h,pointsa3lam,
      xp , credit,
      level , like,
      ane , background,
      vcpoints, vclevel,
      guildId, xpguild
      ) VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,?,?,?,?,?,?,?,?, ?, ? , ?)`, [message.author.id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '$عني', 'default', 1, 0, message.guild.id, 0]);
      return sql.get(`select * from scores where userId = "${id}"`);
    });
  }
  bot.on('message', async message => {
    if (message.channel.type == "dm") return console.log(message.author.username + ` => type this (${message.content}) in Dm`);
    if (message.author.bot || message.system) return;
    /* T E X T - S Y S T E M */
    if (message.content.startsWith(prefix + "daily") || message.content.startsWith(prefix + "هدية")) {
      let cooldown = 8.64e+7;
      let lastDaily = dailies[message.author.id]
      if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = (cooldown - (Date.now() - lastDaily));
        message.channel.send(`**:stopwatch: |  ${message.author.username}, هناك مدة زمنية محددة للحصول علي هدية جديدة :  \`${pretty(timeObj, {verbose:true})}\`**`)
      } else {
        const amount = 500;
        dailies[message.author.id] = Date.now();
        sql.run(`UPDATE scores SET credit = ${row.credit + amount} WHERE userId = ${message.author.id}`);
        message.channel.send(`**:atm: | ${message.author.username}, لقد أستلمت : \`${amount}\` كـهدية يومية **`)
        fs.writeFile("./dailies.json", JSON.stringify(dailies, null, 2), (err) => {
          if (err) console.log(err);
        });
      };
    };
    if (message.content.startsWith(prefix + "credits") || message.content.startsWith(prefix + "credit")) {
      let row = getUserData(message.author.id);
      if (message.mentions.users.size < 1) {
        return message.channel.send(`**:credit_card:  | ${message.author.username}, لديك :  ` + "``$" + `${row.credit} ` + "``" + ` من الكريديت **`).catch(error => message.channel.send(`**:white_check_mark: | تم تفعيل حسابك البنكي **`));
      } else {
        let transferto = message.mentions.users.first();
        if (transferto.bot) return message.channel.send(`**:robot:  |  ${message.author.username}, البوتات لا تمتلك ليفيل وكريديت . :wink:**`);
        if (transferto.id === message.author.id) return message.channel.send(`من جدك ؟`);
        let transfer = message.content.split(" ").slice(2).join("");
        if (row.credit < transfer) return message.channel.send(`**:thinking: | ${message.author.username}, ليس لديك المال الكافي لذلك**`)
        //getting data from database for the target
        let transfertoRow = getUserData(transferto.id);
        if (!transfer) return message.channel.send(`**:credit_card:  |  ${transferto.username}, لديك : ` + "``$" + `${transfertoRow.credit} ` + "``" + ` من الكريديت**`);
        if (isNaN(transfer) || transfer < 1) return message.channel.send("**:x: | يرجي أدخال رقم صحيح **");
        //awaiting for the confirm message
        function codeGen() {
          return Math.floor(Math.random() * (9 - 0 + 1) + 0);
        }
        let code = `${codeGen()}${codeGen()}${codeGen()}${codeGen()}`;
        message.channel.send(`➡  | لتحويل مبلغ : ${transfer}
      الى : ${transferto}
      يرجاء كتابة الرقم التالي: \`\`\`${code}\`\`\``).then(codeMessage => {
          message.channel.awaitMessages(m => m.author.id === message.author.id, {
            time: 20000,
            max: 1,
            errors: ["time"]
          }).then(messages => {
            let msg = messages.first();
            codeMessage.delete();
            if (msg.content !== code) return message.channel.send(`خطأ`);
            //transfering the money 
            sql.run(`UPDATE scores SET credit = credits - ${parseInt(transfer)} WHERE userId = ${message.author.id}`);
            sql.run(`UPDATE scores SET credit = credits + ${parseInt(transfer)} WHERE userId = ${transferto.id}`);
            //sending messages
            message.channel.send(` **➡  |  تمت عملية التحويل  
          🕊 |  ${transferto} : ${message.author.username}, لقد قمت بأرسال  ` + "$`" + transfer + "`" + ` لـ ** `)
            transferto.send(`**:atm: | تمت عملية التحويل** \`\`\`\n لقد حولت : ${transfer}  لـ  ${message.author.username} . (ID: ${message.author.id})\`\`\``)
            bot.channels.get("550305753488031764").send(`ايدي المرسل : \`${transferto.id}\`
          اسم المستقبل : \`${transferto.username}\`
          ايدي المستقبل : \`${message.author.id}\`
          اسم المرسل : \`${message.author.username}\`
          المبلغ : \`${transfer}\`
          `);
          })
        });
      };
    };
  });
})