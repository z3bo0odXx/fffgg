const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const hero = client;
const Data = {};
const fs = require("fs");
botconfig = JSON.parse(fs.readFileSync('./jsonfile/botconfig.json', 'utf8'));
client.login(botconfig.token)
const prefix = botconfig.prefix
const ms = require("ms");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  if (msg.content === (prefix + "settings")) {
      const embed = new Discord.RichEmbed()
          .setAuthor('❯ Settings:', 'https://labs-public-dl.xda-cdn.com/images/af6aef8c-4d0a-41f4-8afb-5b8572aa3697.png')
          .addField(`❯ Values: `, `» \`limitsban\`, \`limitskick\`, \`limitsroleD\`, \`limitsroleC\`, \`limitschannelD\`, \`limitstime\`, \`setMedia\`, \`infoMedia\`, \`toggleMedia\`, \`setwel\`, \`setrole\`, \`AntiFake\`, \`SetFake\`, \`SetSug\`, \`AntiBots\``)
          .addField(`❯ Commands: `, `» $settings [limitsban/limitschannelD/...] [vlaue]\n» $settings [AntiFake/AntiFake/...] [On/Off]`)
      msg.channel.send(embed)

  };
});

client.on('message', message => {
  if (message.author.bot) return;
  let wewa = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "WEWA");
  let RainBow = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "RainBowS");
  let Band = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "BanS");
  let gl = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "GlowPartner");
  let ss = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "NONOFUCKYOU");
  let xx = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "NOO");
  let zg = client.guilds.get("525365808352985088").emojis.find(r => r.name === "Money");
  let qq = client.guilds.get("537028830943248385").emojis.find(r => r.name === "524948763890941952");
  let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
  let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
  if (message.content.startsWith(prefix + "help")) {
      message.author.send(`**
❯ Informetion Commands | الأوامر التعريفية :

» \`$stats\` : معلومات عن البوت
» \`$settings\` : رؤية ما يمكن إعدادة في البوت
» \`$ping\` : رؤية سرعة البوت
» \`$invite\` : لدعوة البوت**

`)


  }
});

client.on('message', message => {
  if (message.author.bot) return;
  let Band = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "BanS");
  let RainBow = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "RainBowS");
  if (message.content === prefix + "help") {
      message.author.send(`
**❯ Public Commands | الأوامر العامة :


» \`$colors\` : رؤية علبة الألوان
» \`$color [Number]\` : لإختيار لونك
» \`$npm\` : للحصول على بكج من (Npmjs.)
» \`$text create\` : لإنشاء ملف 
» \`$text delete\` : لمسح ملف
» \`$docs\` : للعثور على أشياء من : (Discord.js Docs.)
» \`$user\` : معلومات عن الشخص 
» \`$wiki\` : للبحث في موقع ويكيبيديا
» \`$urban\` : للبحث في موسوعه (urban)
» \`$avt\` : رؤية صورتك الشخصية + صورة شخص أخر
» \`$id\` : معلومات حسابك
» \`$members\` : لرؤية عدد الأعضاء مع فلتر خاص لكل شخص 
» \`$short\` : لاِختصار الروابط
» \`$server\` : معلومات عن السيرفر
» \`$roll\` : القرعة
» \`$donate\` : للتبرع للبوت
» \`$steam\` : معرفة تفاصيل عن لعبة في متجر ستيم
» \`$clock\` : لرؤية الساعة 
» \`$hypixel\` : لرؤية أحصائيآت في هآيبكسل **
                        
`)
      // ❯ , »   


  }
});









client.on('message', message => {
  if (message.author.bot) return;
  let Band = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "BanS");
  if (message.content === prefix + "help") {
      message.author.send(`
**❯ Staff Commands | الأوامر الإدارية :


» \`$welcome\` : أوامر الولكم
» \`$points\` : للنقاط | \`\`[مسابقآت|فعاليات]\`\`
» \`$delete\` : مسح عدد ما من الرسائل  
» \`$ban\` : إعطاء حظر
» \`$kick\` : إعطاء طرد
» \`$mmove\` : لنقل أحد من روم لأخر
» \`$moveall\` : لسحب جميع الأعضاء لرومك
» \`$vkick\` : لطرد عضو من روم محدد  **

                          `);


  }
});


const os = require('os');
client.on('message', message => {

  let totalDMs = client.channels.filter(function (s) {
      if (s.type && s.type === 'dm') {
          return true;
      }
      return false;
  })

  let totalTextChannels = client.channels.filter(function (s) {
      if (s.type && s.type === 'text') {
          return true;
      }
      return false;
  })

  let cpu = os.cpus();
  let cpuArray = cpu[0].model.replace(/\s+/g, " ").trim().split(" ");
  let cpuCores = cpu.length;
  let cpuSpeed = (cpu[0].speed / 1000) + "MHZ";
  if (message.content.startsWith(prefix + "stats") || message.content.startsWith(prefix + "bot")) {
      message.channel.send({
          embed: new Discord.RichEmbed()
              .setColor('RANDOM')
              .setTitle('❯ | Stats.')
              .addField('» Ping:', `**\`${client.ping}\`ms.**`)
              .addField('» RAM Usage:', `**\`${(process.memoryUsage().rss / 1048576).toFixed()}\`MB.**`)
              .addField('» Guilds:', `**\`${client.guilds.size}\`**`)
              .addField('» Channels:', `**\`${client.channels.size}\`**`)
              .addField('» Users:', `**\`${client.users.size}\`**`)
              .addField('» Name/Tag:', `**\`${client.user.tag} | (${client.user.id})\`**`)
              .addField('» Platform:', `**\`${os.platform()}\`**`)
              .addField('» CPU:', `**\`${cpuArray[0]} ${cpuArray[1]}\`**`)
              .addField('» CPU Specs:', `**\`${cpuCores} @ ${cpuSpeed}\`**`)
              .addField('» Private Conversations:', `**\`${totalDMs.size}\`**`)
              .addField('» Host:', `**\`FlixHost\`**`)
              .addField('» WebSite:', `**\`http://s-bot.gq/\`**`)
              .addField('» Developers:', `**<@418715344614588428> , <@516618898850709504> , <@475396751549792277> , <@474954770742771712>**`)
      })
  }
})


client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`
**❯ Profile & Games Commands | أوامر البروفايل والألعاب :
                                                  
                                      
» \`$credit\` : رؤية رصيدك
» \`$profile\` : رؤية بروفايلك
» \`$background [1-27]\` : لرؤية الخلفيات
» \`$buy\` : للحصول خلفية
» \`$rep\` : لإعطاء ريب 
» \`$note\` : لوضع وصف عنك في بروفايلك
» \`$daily\` : اخذ مكافئتك اليومية
» \`$fa\` : لعبة اسرع كتابة
» \`$le\` : لعبة فكك
» \`$ma\` : لعبة رياضيات**

                                      `);


  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "invite" || message.content === prefix + "inv") {
      message.author.send(`**https://discordapp.com/oauth2/authorize?client_id=522899794369445890&permissions=8&scope=bot**`);


  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.channel.send(`**:information_source: | Help Menu in DM , رسالة المساعدة في الخاص .**`);


  }
});