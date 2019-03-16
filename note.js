const pretty = require("pretty-ms");

const Discord = require("discord.js");
const moment = require('moment');
const client = new Discord.Client();
const bot = new Discord.Client();
const hero = client;
const Data = {};
const fs = require("fs");
botconfig = JSON.parse(fs.readFileSync('./jsonfile/botconfig.json', 'utf8'));
client.login(botconfig.token)
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
  let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
  let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
  if (message.content.startsWith(prefix + "help")) {
      message.author.send(`**
❯ Informetion Commands | الأوامر التعريفية :


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


» \`$top\` : رؤية متصدرين نقاط التفاعل
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

» \`$reset all\` : لتصفير جميع النقاط الكتابية والصوتية
» \`$reset voice\` : لتصفير النقاط الصوتية
» \`$reset text\` : لتصفير النقاط الكتابية
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



client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    let request = require('snekfetch');
    if (command === `$npm`) {
        // https://www.npmjs.com/package/snekfetch
        if (!args[0]) return message.channel.send(`**${f} | Specify an arg to search for in npmjs.com.**`);
        let url = args.includes(" ") ? args.replace(" ", "-") : args;
        url = `https://registry.npmjs.com/${url[0].toLowerCase()}`;
        request.get(url).then(r => {
                message.channel.send(new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setThumbnail("https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png")
                    .setTitle(`❯ \`${args[0]}\`.`)
                    .setColor("#000")
                    .addField("» **Version**", `- ${r.body['dist-tags'].latest}`, true)
                    .addField("» **License**", `- ${r.body.license}`, true)
                    .addField("» **Homepage**", `- [\`Click Here\`](${r.body.homepage})`, true)
                    .addField("» **Description**", `- ${r.body.description || "- Without description."}`, true)
                    .addField("» **Contributors**", `- ${r.body.contributors ? r.body.contributors.map(r => r.name).join(', ') : "None"}`, true)
                    .addField("» **Keyboards**", `- ${r.body.keywords ? r.body.keywords.map(r => r).join(', ') : "None"}`, true));
            })
            .catch(e => {
                if (e) message.channel.send(`**${f} |  Couldn't find the package \`${args[0]}\` .**`);
                if (e) console.log(e.message);
            });
    }
});



// ❯  , →
const Enmap = require("enmap");
const notes = new Enmap();
// ❯ | \`$text create\` : لإنشاء ملف 
// ❯ | \`$text delete\` : لمسح ملف
client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
    let alias = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ");
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");

    if (notes.get(message.author.id) === undefined) {
        notes.set(message.author.id, []);
    }
    if (alias === 'text') {
        if (args[1] === 'create') {
            let data = notes.get(message.author.id);
            if (data.length >= 8) {
                return message.channel.send(`**${f} | You can't make more than 8 texts, Use \`${prefix}text delete [Note]\` to delete a texts!**`);
            } else {
                let thisName;
                let thisContent;
                let thisRegex = /([a-z,0-9])/g;
                let x = await message.channel.send(`**:information_source: | Type the name of the text**`);
                let i = await message.channel.awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                });
                if (!i.first().content.match(thisRegex)) return message.channel.send(`**${f} | That name isn't valid the name must be like \`test\`**`);
                if (data.filter(r => r.name === i.first().content).length != 0) return message.channel.send(`**${f} | That name is already used**`);
                thisName = i.first().content;

                x = await message.channel.send(`**:information_source: | Type the content of the text**`);
                i = await message.channel.awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                });
                thisContent = i.first().content;

                x = await message.channel.send(new Discord.RichEmbed()
                    .setColor("ORANGE")
                    .setDescription("**⏳ | Saving the text...**"));

                await notes.push(message.author.id, {
                    name: thisName,
                    content: thisContent
                });

                await x.delete().catch(e => {});
                await message.channel.send(new Discord.RichEmbed()
                    .setColor("GREEN")
                    .setDescription(`**${t} | Saved the text!**`));
            }
        } else if (args[1] === 'delete') {
            if (!args[2]) return message.channel.send(`**${f} | You must type the name**`);
            let data = notes.get(message.author.id);
            if (data.filter(r => r.name === args[2]).length === 0) return message.channel.send(`**${f} | Couldn't get that name**`);
            let item = data.filter(r => r.name === args[2])[0];
            let x = await message.channel.send(new Discord.RichEmbed()
                .setColor("ORANGE")
                .setDescription("**⏳ | Deleting the text...**"));

            await notes.remove(message.author.id, item);

            await x.delete().catch(e => {});
            await message.channel.send(new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`**${t} | Deleted the text!**`));
        } else {
            if (!args[1]) return message.channel.send(`**${f} | You must type the name**`);
            let data = notes.get(message.author.id);
            if (data.filter(r => r.name === args[1]).length === 0) return message.channel.send(`**${f} | Couldn't get that name**`);
            let item = data.filter(r => r.name === args[1])[0];

            let o = new Discord.RichEmbed();
            o.setColor("#36393e");
            o.setTitle(`**❯ Displaying information about: \`${item.name}\`**`);
            o.setDescription(`**→ ${item.content}**`);

            await message.channel.send(o);
        }
    }
});

//     let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
// let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");


client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`✅ SBot join new server.`)
        .setDescription(`**
   ⇏ | Server name : \`${guild.name}\`
   ⇏ | Server id: \`${guild.id}\`
   ⇏ | Server owner: ${guild.owner}
   ⇏ | Member Count: \`${guild.memberCount}\`
   ⇏ | Servers Counter : \`${client.guilds.size}\`**`)
        .setColor("#f3ae10")
    client.channels.get("550305699171794954").send({
        embed
    });
});


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + `top-servers`)) {

        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
        message.channel.send(`**⇏ Top 25 Servers: **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .\n11. **${top[10].name}**: ${top[10].memberCount} .\n12. **${top[11].name}**: ${top[11].memberCount} .\n13. **${top[12].name}**: ${top[12].memberCount} .\n14. **${top[13].name}**: ${top[13].memberCount} .\n15. **${top[14].name}**: ${top[14].memberCount} .\n16. **${top[15].name}**: ${top[15].memberCount} .\n17. **${top[16].name}**: ${top[16].memberCount} .\n18. **${top[17].name}**: ${top[17].memberCount} .\n19. **${top[18].name}**: ${top[18].memberCount} .\n20. **${top[19].name}**: ${top[19].memberCount} .\n21. **${top[20].name}**: ${top[20].memberCount} .\n22. **${top[21].name}**: ${top[21].memberCount} .\n23. **${top[22].name}**: ${top[22].memberCount} .\n24. **${top[23].name}**: ${top[23].memberCount} .\n25. **${top[24].name}**: ${top[24].memberCount} .`)
    }
});



client.on('ready', () => {
    console.log(`-------------------------------
    [Start] ${new Date()}`);
    console.log(`[INFO] [Bot Name : [ ${client.user.username}. ]`)
    console.log(`[INFO] [Users Size : [ ${client.users.size}. ]`)
    console.log(`[INFO] [Guild Size : [ ${client.guilds.size}. ]`)
    console.log(`[INFO] [File Do : Admin Commands]`)
    console.log(`[BOT] By : SBot Team
    -------------------------------`)
    client.user.setActivity(`$settings | $help`, {
        type: "WATCHING"
    })
});

const prefix = botconfig.prefix

client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith('$تحقق-مني')) {

        var activated_servers = ['522904523455594496'];

        if (activated_servers.includes('' + message.guild.id + '') || activated_servers.includes(message.guild.id)) {

            let guildr = client.guilds.filter(r => r.ownerID === message.author.id).size;
            if (guildr === 0) {
                message.channel.send(`**${f} | أنت لست أونر في أي سيرفر البوت موجود فية**`)

            } else if (guildr >= 1) {
                if (message.guild.member(message.author).roles.find(x => x.name === `❆ Users.`)) return message.channel.send(`**${f} | ${message.author}, انت تملك الرتبة بالفعل**`);;
                message.channel.send(`**${t} | لقد تم وجود سيرفر أنت أونر وأضفت أس بوت  فية , مبروك الرتبة**`)
                message.member.addRole(message.guild.roles.find(x => x.name === `❆ Users.`));
            }
        } else {
            return;
        }

    }
});


const wiki = require("wikipediajs");
const query = require('querystring');
client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;
    let cmd = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ");
    if (cmd === 'urban') {
        if (!args[1]) return;
        let o = await message.channel.send(`**• Getting data, Please wait...**`);
        let i = new Discord.RichEmbed();
        i.setColor("#36393e");
        let string = query.stringify({
            term: args.slice(1).join(" ")
        });
        fetch(`http://api.urbandictionary.com/v0/define?${string}`)
            .then(async res => res.json())
            .then(async res => {
                let data = res.list;
                if (!data.length || data.length === 0) {
                    o.delete();
                    return message.channel.send(`**• Couldn't search \`${args.slice(1).join(" ").slice(0, 1024)}\`**`);
                }
                let info = data[0];
                i.addField('❯ General', `→ Definition: \`${info.definition}\`\n→ Link: [${info.word}](${info.permalink})\n→ Author: \`${info.author}\``);
                i.addField('❯ Rating', `→ Agreed: \`${info.thumbs_up}\`\n→ Disagreed: \`${info.thumbs_down}\`\n→ Votes: \`${info.thumbs_up + info.thumbs_down}\``);
                i.addField('❯ Example', `→ \`${info.example}\``);
                i.setThumbnail("https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg");
                i.setFooter("Urban Dictionary", "https://s3.amazonaws.com/pushbullet-uploads/ujxPklLhvyK-RGDsDKNxGPDh29VWVd5iJOh8hkiBTRyC/urban_dictionary.jpg?w=188&h=188&fit=crop");
                // ❯  , →
                await o.delete().catch(e => {});
                await message.channel.send(i);
            });
    } else if (cmd === 'wiki') {
        if (!args[1]) return;
        let i = new Discord.RichEmbed();
        i.setColor("#36393e");
        let o = await message.channel.send(`**• Getting data, Please wait...**`);
        wiki.search(args.slice(1).join(" ")).then(async (data) => {
            let pages = data.query.pages;
            let values = Object.values(pages)[0];
            i.setThumbnail("https://english.cdn.zeenews.com/sites/default/files/2015/08/16/391299-wikipedia.jpg");
            i.setFooter("Wikipedia", "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/58af0228b8aa8.jpg");
            i.addField('• General', `→ Length: \`${values.length}\`\n→ Link: [${values.title}](${values.fullurl})\n→ Language: \`${values.pagelanguage}\``);
            await message.channel.send(i);
            await o.delete().catch(e => {});
        });
    }
});




client.on("message", message => {
    if (message.content == "$colors") {
        var fsn = require('fs-nextra');
        fs.readdir('./img/colors', async (err, files) => {
            var f = files[Math.floor(Math.random() * files.length)];
            var {
                Canvas
            } = require('canvas-constructor');
            var x = 0;
            var y = 0;
            let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
            if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return replies.err(message, `**${f} | Can\'t found any color. **`)
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                x += 100;
                if (x > 100 * 12) {
                    x = 100;
                    y += 80;
                }
            });
            var image = await fsn.readFile(`./img/colors/${f}`);
            var xd = new Canvas(100 * 11, y + 250)
                .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
                .setTextBaseline('middle')
                .setColor('white')
                .setTextSize(60)
                .addText(`علبة ألوان : ${message.guild.name}`, 375, 40);
            x = 0;
            y = 150;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                x += 75;
                if (x > 100 * 10) {
                    x = 75;
                    y += 80;
                }
                xd
                    .setTextBaseline('middle')
                    .setTextAlign('center')
                    .setColor(role.hexColor)
                    .addBeveledRect(x, y, 60, 60, 15)
                    .setColor('white');
                if (`${role.name}`.length > 2) {
                    xd.setTextSize(30);
                } else if (`${role.name}`.length > 1) {
                    xd.setTextSize(40);
                } else {
                    xd.setTextSize(50);
                }
                xd.addText(role.name, x + 30, y + 30);
            });
            message.channel.sendFile(xd.toBuffer());
        });
    }
})

//• Getting data, Please wait...




client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.split(' ')[0] == `$color`) {
        const embedd = new Discord.RichEmbed()
            .setFooter('Requested by ' + message.author.username, message.author.avatarURL)
            .setDescription(`** ${f} | Can\'t find color with this number.**`)
            .setColor(`ff0000`)

        if (!isNaN(args) && args.length > 0)


            if (!(message.guild.roles.find(x => x.name === `${args}`))) return message.channel.sendEmbed(embedd);


        var a = message.guild.roles.find(x => x.name === `${args}`)
        if (!a) return;
        const embed = new Discord.RichEmbed()

            .setFooter('Requested by ' + message.author.username, message.author.avatarURL)
            .setDescription(`** ${t} | Done give you this color.**`)

            .setColor(`${a.hexColor}`)
        message.channel.sendEmbed(embed);
        if (!args) return;
        setInterval(function () {})
        let count = 0;
        let ecount = 0;
        for (let x = 1; x < 201; x++) {

            message.member.removeRole(message.guild.roles.find(x => x.name === `${x}`))

        }
        message.member.addRole(message.guild.roles.find(x => x.name === `${args}`));


    }
});


client.on('message', async message => {
    if (message.author.bot) return;


    let command = message.content.split(" ")[0].slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if (command == 'delete-colors') {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        message.channel.send(`**${t} | Loading delete colors.**`).then(async m => {
            await message.guild.roles.forEach(role => {
                if (/^\d+$/gi.test(role.name)) {
                    role.delete();
                }
            });
            m.edit(`**${t} | Done, deleted all colors.**`)
        });
    }
});


client.on('message', message => {


    if (message.content.startsWith(prefix + "user")) {

        if (!message.channel.guild) return;

        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(message.author.id);
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            var args = message.content.split(" ").slice(1);
            let user = message.mentions.users.first();
            let roles = message.member.roles.map(r => r).slice(0, 3).toString() + '\n' + message.member.roles.map(r => r).slice(3, 6).toString();
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
            moment.locale('ar-TN');
            var id = new Discord.RichEmbed()

                .setColor("#0a0909")
                .setThumbnail(message.author.avatarURL)
                .addField(`❯ Username: `, `→ **${message.author.username} \`(${message.author.id})\`** `)
                .addField('❯ Times: ', ` → Created At:** \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')}\` **
                → Joined At: **\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}\`**`)
                .addField(`❯ Invites: `, `→ **${inviteCount}**`)
                .addField(`❯ Roles: `,`→ **${roles}**`)

                .setFooter(message.author.username, message.author.avatarURL)
            message.channel.sendEmbed(id);
        })
    }



});

let antijoin = JSON.parse(fs.readFileSync('./antijoin.json', 'utf8'));
client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith(prefix + "settings AntiFake On")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**${f} | Don\'t have perms.**`);
        antijoin[message.guild.id] = {
            onoff: 'On',
        }
        message.channel.send(`**${t} | \`ON\`**`)
        fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
                .catch(err => {
                    console.error(err);
                });
        });
    }

})




client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith(prefix + "settings AntiFake Off")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**${f} | Don\'t have perms.**`);
        antijoin[message.guild.id] = {
            onoff: 'Off',
        }
        message.channel.send(`**${t} | \`OFF\`**`)
        fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
                .catch(err => {
                    console.error(err);
                });
        });
    }

})
client.on('message', message => {
    if (!message.channel.guild) return;
    // ❯  , →
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith(prefix + "settings SetFake")) {
        let time = message.content.split(" ").slice(2).join(" ");
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**${f} | Don\'t have perms.**`);
        if (!time) return message.channel.send(`**${f} | Please type the time of create accounts \`DaysOnly\`**`);
        let embed = new Discord.RichEmbed()
            .addField(`❯ Account Create Time:`, `→ \`${time}\`.`)
            .addField('❯ Requested By:', `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        antijoin[message.guild.id] = {
            created: time,
            onoff: 'On',
        }
        fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) console.error(err)
        })
    }
})

client.on("guildMemberAdd", async member => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (!antijoin[member.guild.id]) antijoin[member.guild.id] = {
        onoff: 'Off'
    }
    if (antijoin[member.guild.id].onoff === 'Off') return;
    if (!member.user.bot) return;
    let accounttime = `${antijoin[member.guild.id].created}`
    let moment2 = require('moment-duration-format'),
        date = moment.duration(new Date() - member.user.createdAt).format("d");

    if (date < accounttime) {
        member.ban(`Member account age is lower than ${antijoin[member.guild.id].created} days.`)
    }
});

const sug = JSON.parse(fs.readFileSync('./sug.json', 'utf8'));
// ❯  , →
client.on('message', message => {
    if (!message.channel.guild) return;
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find(x => x.name === `${room}`)
    if (message.content.startsWith(prefix + "settings SetSug")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**${f} | Don\'t have perms.**`);
        if (!room) return message.channel.send(`** ${f} | Please type the channel name.**`)
        if (!findroom) return message.channel.send(`**${f} | Can\'t found this channel.**`)
        let embed = new Discord.RichEmbed()
            .addField(`❯ Channel:`, `→ \`${room}\`.`)
            .addField(`❯ Requested By:`, `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        sug[message.guild.id] = {
            channel: room,
        }
        fs.writeFile("./sug.json", JSON.stringify(sug), (err) => {
            if (err) console.error(err)
        })
        client.on('message', message => {
            let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
            let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
            // ❯  , →
            if (message.content.startsWith(`$sug`)) {
                if (!message.channel.guild) return;
                let suggest = message.content.split(" ").slice(1);
                if (!suggest) return message.reply(`**${f} | Please type the suggest.**`)
                let findchannel = (message.guild.channels.find(x => x.name === `${sug[message.guild.id].channel}`))
                if (!findchannel) return message.channel.send(`** ${f} | Error: \`Can\'t find the suggestions room.**`)
                message.channel.send(`**${t} | Thanks for your suggest.**`)
                let sugembed = new Discord.RichEmbed()
                    .setTitle('❯ New suggest:')
                    .addField('❯ Suggest By:', `→ \`${message.author}\``)
                    .addField('❯ Suggest:', `→ \`${suggest}\``)
                    .setFooter(client.user.username)
                findchannel.sendEmbed(sugembed)
                    .then(function (message) {
                        message.react('✅')
                        message.react('❌')
                    })
                    .catch(err => {
                        message.reply(`** ${f} | Error: \`Can\'t find the suggestions room.**`)
                        console.error(err);
                    });
            }
        })
    }
})

client.on('message', async message => {
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    let cmd = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ");
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (cmd === 'hypixel') {
        if (!args[1]) return;
        let HypixelAPI = require("hypixel-api");
        let client = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
        let i = new Discord.RichEmbed();
        i.setColor("#36393e");
        let o = await message.channel.send(`**• Collecting data.. please wait.**`);
        client.getPlayer(x => x.name === args[1])
            .then(async player => {
                let stats = player.player.achievements;
                let overall = player;
                const getDays = (createdAt) => {
                    let date = Date.now() - createdAt;
                    // return `${Math.round(date / 1000 / 60 / 60 / 24)} Days ago`;
                    return pretty(date);
                };
                i.setDescription(`**❯ The player \`${overall.player.displayname}\`'s data**`);
                i.setThumbnail(`https://minotar.net/helm/${args[1]}`);
                i.addField('• Rank', (player.rank || player.packageRank || player.newPackageRank || 'undefined').toString().replace(/_/g, ' '), true)
                i.addField('• Client Version', player.mcVersionRp || 'undefined', true)
                i.addField('• Karma', player.karma || 'undefined', true)
                i.addField('• Hypixel Level', player.networkLevel || 'undefined', true)
                i.addField('• SkyWars Kills', `→ Kills Team: \`${stats["skywars_kills_team"]}\`\n→ Kills Solo: 
    \`${stats["skywars_kills_solo"]}\`\n→ Kills Mega: \`${stats["skywars_kills_mega"]}\``, true);
                i.addField('• SkyWars Wins', `→ Wins Team: \`${stats["skywars_wins_team"]}\`\n→ Wins Solo: \`${stats["skywars_wins_solo"]}\`\n→ Wins Mega: \`${stats["skywars_wins_mega"]}\``, true);
                i.addField('• BedWars Stats', `→ Broken Beds: \`${stats["bedwars_beds"] || 0}\`\n→ BedWars Wins: \`${stats["bedwars_wins"] || 0}\`\n→ BedWars Level: \`${stats["bedwars_level"]}\``, true);
                i.addField('• Other Stats', `→ Recent Game: \`${overall.player.mostRecentGameType || "None"}\`\n→ First Joined: \`${getDays(overall.player.firstLogin)}\`\n→ Last Joined: \`${getDays(overall.player.lastLogin)}\``, true);
                i.setFooter('Hypixel Stats | SBot.', 'https://hypixel.net/styles/hypixel-uix/xenforo/og-icon.png');
                await message.channel.send(i);
                await o.delete().catch(e => {});
            })
            .catch(async e => {
                console.log(e.stack);
                await o.delete().catch(e => {});
                return message.channel.send(`**:information_source: | Can\'t found any player with name : \`${args[1]}\` .**`);
            });
    }
});






client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + "steam")) {
        let args = message.content.split(" ");
        if (!args[1]) return;
        let i = new Discord.RichEmbed();
        i.setColor("#36393e");
        let o = await message.channel.send(`**• Collecting data.. please wait.**`);
        require("steam-search").getFirstGameInfo(args.slice(1).join(" "), async function (data, err) {
            if (data !== "no") {
                i.setThumbnail(data.image);
                i.addField('• General', `→ Name: \`${data.title}\`\n→ Price: \`${data.price.includes("$") ? "$" + data.price.split("$")[1] : data.price}\`\n→ Release \`${pretty(Date.now() - new Date(data.release).getTime())}\``);
                i.setFooter("Steam | SBot.", "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png");

                await o.delete().catch(e => {});
                await message.channel.send(i);
            } else {
                await o.delete().catch(e => {});
                return message.channel.send(`**:information_source: | Can\'t found any game with name : \`${args.slice(1).join(" ")}\`**`);
            }
        })
    }
});


client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send(`**${t} | MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n${t} | DiscordAPi: \`${Math.round(client.ping)}\`ms\n${t} | Average: \`${Math.round(client.pings[0])}\`ms.** `)
    }
});

client.on('message', message => {
    var user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("$avt")) {
        message.channel.send(`**:frame_photo: | Avatar link, ${user} :** ${user.avatarURL}`);
    }
});

const fetch = require('node-fetch');

const qs = require('querystring');
client.on('message', async message => {
    let alias = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ").slice(1);

    if (alias == 'docs') {
        if (!args[0]) return;
        const query = args.join(" ");
        const queryString = qs.stringify({
            q: query
        });
        const queryLink = `https://djsdocs.sorta.moe/main/stable/embed?${queryString}`;

        fetch(queryLink)
            .then(res => res.json())
            .then(async res => {
                try {
                    let i = new Discord.RichEmbed();
                    let fields = res.fields;
                    let properties = fields.filter(r => r.name == 'Properties');
                    let methods = fields.filter(r => r.name == 'Methods');
                    let events = fields.filter(r => r.name == 'Events');
                    let params = fields.filter(r => r.name == 'Params');
                    let returns = fields.filter(r => r.name == 'Returns');
                    let examples = fields.filter(r => r.name == 'Examples');
                    i.setColor(res.color);
                    i.setTitle(res.author.name);
                    i.setURL(res.url);
                    i.setDescription(res.description);
                    i.setThumbnail(res.author.icon_url);
                    if (properties.length != 0) {
                        i.addField('- Properties', properties[0].value);
                    }
                    if (methods.length != 0) {
                        i.addField('- Methods', methods[0].value);
                    }
                    if (events.length != 0) {
                        i.addField('- Events', events[0].value);
                    }
                    if (params.length != 0) {
                        i.addField('- Params', params[0].value);
                    }
                    if (returns.length != 0) {
                        i.addField('- Returns', returns[0].value);
                    }
                    if (examples.length != 0) {
                        i.addField('- Examples', examples[0].value);
                    }
                    await message.channel.send(i);
                } catch (e) {}
            });
    }
});

client.on('message', message => {
    if (message.content.split(" ")[0].toLowerCase() === prefix + "delete") {
        const word = message.content;
        const number = word.slice(7, word.length);
        const int = Number(number);
        let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
        let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`**${f} | I don\'t have perms.**`);
        }
        if (int >= 101) {
            return message.channel.send("**:wastebasket: | Only: `100`**");
        }
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return;
        }
        if (int == "") {
            return message.channel.send("**:wastebasket: | Choose number.**");
        } else if (isNaN(int)) {
            return message.reply(`**${f} | only numbers.**`)
        }
        message.channel.bulkDelete(int).then(() => {
            return message.channel.send(`**${t} | Deleted ${int} messages.**`).then(m => m.delete(5000))
        });
    }
})


const pics = JSON.parse(fs.readFileSync('./pics.json', 'utf8'));
client.on('message', message => {
    if (!message.channel.guild) return;
    // ❯  , →
    let room = message.content.split(" ").slice(2);
    let findroom = message.guild.channels.find(r => r.name === `${room}`)
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith(prefix + "settings setMedia")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (!room) return message.channel.send(`**${f} | Type name of room.**`)
        if (!findroom) return message.channel.send(`**${f} | name is incorrect or includes : \`#\`.**`)
        let embed = new Discord.RichEmbed()
            .setTitle(`**❯ media command is open.**`)
            .addField('❯ Room:', `→ \`${room}\`.`)
            .addField('❯ By: ', `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        pics[message.guild.id] = {
                channel: room,
                onoff: 'On'
            },
            fs.writeFile("./pics.json", JSON.stringify(pics, null, 2), (err) => {
                if (err) console.error(err)

            })
    }
})

client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith(prefix + "settings toggleMedia")) {
        if (!message.channel.guild) return;

        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (!pics[message.guild.id]) pics[message.guild.id] = {
            onoff: 'Off'
        }
        if (pics[message.guild.id].onoff === 'Off') return [message.channel.send(`** ${t} | \`ON\`.**`), pics[message.guild.id].onoff = 'On']
        if (pics[message.guild.id].onoff === 'On') return [message.channel.send(`** ${t} | \`OFF\`.**`), pics[message.guild.id].onoff = 'Off']
        fs.writeFile("./pics.json", JSON.stringify(pics, null, 2), (err) => {
            if (err) console.error(err)

        })
    }

})

client.on('message', message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;

    if (!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
    }
    if (pics[message.guild.id].onoff === 'Off') return;

    if (message.channel.name !== `${pics[message.guild.id].channel}`) return;

    let types = [
        'jpg',
        'jpeg',
        'gif',
        'png'
    ]
    if (message.attachments.size <= 0) {
        message.delete();
        message.channel.send(`**🖼️ | ${message.author}, this room for pictures only.**`)
            .then(msg => {
                setTimeout(() => {
                    msg.delete();
                }, 5000)
            })
        return;
    }
    if (message.attachments.size >= 1) {
        let filename = message.attachments.first().filename
        console.log(filename);
        if (!types.some(type => filename.endsWith(type))) {
            message.delete();
            message.channel.send(`**🖼️ | ${message.author}, this room for pictures only.**`)
                .then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 5000)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
})
client.on('message', message => {
    // ❯  , →
    if (message.content.startsWith(prefix + "settings infoMedia")) {
        let embed = new Discord.RichEmbed()
            .addField('❯ Info:', `→ \`${pics[message.guild.id].onoff}\``)
            .addField('❯ Room: ', `→ \`${pics[message.guild.id].channel}\``)
            .addField('❯ By: ', `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
    }
})

client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ");
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
    if (args[0].toLowerCase() === `${prefix}server`) {
        if (!message.member.hasPermission("MANAGE_GUILD")) return;
        let guildCreation = new Date(moment(message.guild.createdAt).format('MMMM DD, YYYY h:mm:ss')).getTime();
        let embedInfo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.guild.iconURL)
            .setColor("#343A40")
            .setThumbnail(message.author.avatarURL || message.guild.iconURL || hero.user.avatarURL)
            .addField('❯ Owner', `» ${message.guild.owner}`, true)
            .addField('❯ Creation', `» ${message.guild.createdAt.toLocaleString()}, **( \`${pretty(Date.now() - guildCreation)}\` )**`, true)
            .addField('❯ Roles', `» Administrator .: \`${message.guild.roles.filter(r => r.hasPermission("ADMINISTRATOR")).size}\`\n» Size .: \`${message.guild.roles.size}\``, true)
            .addField('❯ Channels', `» \`${message.guild.channels.filter(r => r.type === 'text').size} 💬\`\n» \`${message.guild.channels.filter(r => r.type === 'voice').size} 🔊\``, true)
            .addField('❯ Members', `» ${emoji.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emoji.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emoji.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n» ${emoji.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emoji.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emoji.discord} \`${message.guild.memberCount}\``, true);
        message.channel.send(embedInfo);
        // ❯ , »
    }
});

client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`❌ SBot leave from server.`)
        .setDescription(`**
⇏ | Server name : \`${guild.name}\`
⇏ | Server id: \`${guild.id}\`
⇏ | Server owner: ${guild.owner}
⇏ | Member Count: \`${guild.memberCount}\`
⇏ | Servers Counter : \`${client.guilds.size}\`**`)
        .setColor("#f3ae10")
    client.channels.get("550305699171794954").send({
        embed
    });
});

client.on('message', message => {
    let gl = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "First");
    if (message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send(`**${gl} أختر رقم **`);
            return;
        }
        message.channel.send(Math.floor(Math.random() * args.join(' ')));
        if (!args[0]) {
            message.edit('1')
            return;
        }
    }
});

client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.split(" ")[0] === `${prefix}emojis`) {
        message.channel.send(new Discord.RichEmbed()
            .setColor("36393e")
            .addField(`- Server Emojis:`, message.guild.emojis.map(r => r).join("  ")));
    }
});

client.on('message', message => {
    let sc = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "Loading");
    if (message.content === prefix + "donate") {
        message.channel.send(`**${sc} | للتبرع قم بالتحويل للرابط التالي : \n - http://paypal.me/EnzoRuelz .**`)
    }
});



client.on('message', edited => {
  let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
  let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    let args = edited.content.split(" ").slice(1).join(" ")
    if (edited.content.startsWith(prefix + 'create-colors')) {
        if (!args) return edited.channel.send('**:information_source: |  أكتب عدد الألوان التي تريدها مع الأمر**');
        if (!edited.member.hasPermission('MANAGE_ROLES')) return;
        edited.channel.send(`**${t} | تم صنع :  \`${args}\` لون**`);
        setInterval(function () {})
        let count = 0;
        let ecount = 0;
        for (let x = 1; x < `${parseInt(args)+1}`; x++) {
            edited.guild.createRole({
                name: x,
                color: 'RANDOM'
            })
        }
    }
});



client.on('message', message => {
  let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
  let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mmove')) {
        if (message.member.hasPermission("MOVE_MEMBERS")) {
            if (message.mentions.users.size === 0) {
                return message.channel.send("** :x: أستعمل : \`$move [MEMBERNAME]\` **")
            }
            if (message.member.voiceChannel != null) {
                if (message.mentions.members.first().voiceChannel != null) {
                    var authorchannel = message.member.voiceChannelID;
                    var usermentioned = message.mentions.members.first().id;
                    var embed = new Discord.RichEmbed()
                        .setTitle("Succes!")
                        .setColor("#000000")
                        .setDescription(`**${t} | تم نقل : <@${usermentioned}> لرومك**`)
                    var embed = new Discord.RichEmbed()
                        .setTitle(`**${t} | تم نقلك في  سيرفر : ${message.guild.name}**`)
                        .setColor("RANDOM")
                        .setDescription(`** ✅ | <@${message.author.id}> قام بنقلك لرومة \nداخل سيرفر : ${message.guild.name}**`)
                    message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                    message.guild.members.get(usermentioned).send(embed)
                } else {
                    message.channel.send(`** ${f} | لا يمكنك نقل : " + message.mentions.members.first() + " يجب أن يكون في روم صوتي لنقلة **`)
                }
            } else {
                message.channel.send(`**${f} | يجب أن تكون في روم لنقل أحد**`)
            }
        } else {
            message.react("❌")
        }
    }
});



const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
client.on('message', msg => {
    if (msg.content.startsWith(prefix + 'أحسب')) {
        let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
        if (args.length < 1) {
            msg.reply('**:information_source: | قم بوضع مسئلة حسابية **');
        } else {
            let answer;
            try {
                answer = math.eval(question);
            } catch (err) {
                msg.reply(`** :x: خطأ **`);
            }

            const embed = new Discord.RichEmbed()
                .addField("**:arrow_right: | السؤال : **: ", `**\`\`\`${question}\`\`\`**`, true)
                .addField("**:arrow_right: | الاِجابة : **: ", `**\`\`\`${answer}\`\`\`**`, true)
            msg.channel.send(embed)
        }
    };
});


client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if (message.content.startsWith(prefix + 'moveall')) {
        if (!message.member.hasPermission("MOVE_MEMBERS")) return;
        if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
        if (message.member.voiceChannel == null) return message.channel.send(`**${f} | عليك أن تكون في روم صوتي**`)
        var author = message.member.voiceChannelID;
        var m = message.guild.members.filter(m => m.voiceChannel)
        message.guild.members.filter(m => m.voiceChannel).forEach(m => {
            m.setVoiceChannel(author)
        })
        message.channel.send(`**${t} | تم نقل جميع الأعضاء لرومك**`)


    }
});