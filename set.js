const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require("fs");
const pretty = require("pretty-ms");
const bot = new Discord.Client();

const hero = client;
const Data = {};
botconfig = JSON.parse(fs.readFileSync('./jsonfile/botconfig.json','utf8')); 
client.login(botconfig.token)

const prefix = "$";

  

  
    const sWlc = require('./jsonfile/wel.json')
    client.on('message', message => {
        var sender = message.author
        let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
        let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
        if(!message.guild) return
        if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
            channel1: "log"
        }
        
        const channel1 = sWlc[message.guild.id].channel
        if(message.content.startsWith(prefix + "settings setwel")) {
          if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          let newChannel = message.content.split(' ').slice(2).join(" ")
          if(!newChannel) return message.channel.send(`** ${f} | ${prefix}settings setwel \`[Channel name]\`**`)
          if(!message.guild.channels.find(`name`,newChannel)) return message.channel.send(`**${f} | I can\'t find this channel.**`)
          sWlc[message.guild.id].channel = newChannel
          sWlc[message.guild.id].channel = newChannel
          fs.writeFile("./jsonfile/wel.json", JSON.stringify(sWlc, null, 2), (err) => {
            if(err) console.log(err)
          });
      
          message.channel.send(`**${t} | ${message.guild.name}'s welcome channel has been changed to ${newChannel} **`);
        }
      });
    
    
      client.on('ready',async () => {
        console.log("Running.");
        client.guilds.forEach(r => {
          if(!Data[r.id]) {
            r.fetchInvites().then(data => {
              Data[r.id] = data;
            });
          } else {
            return;
          }
        });
      });
    
      client.on('guildMemberAdd', async member => {
        if(!sWlc[member.guild.id]) return;
        let json = require('./jsonfile/wel.json');
        let guild = member.guild.id;
        if(!Data[guild] || !json[guild]) {
          return console.log(`An Error Happend in: ${member.guild.name}, Couldn't fetch the data`);
        } else {
        let data = Data[guild];
        let channel = json[guild].channel;
        if(!channel) return console.log(`The Needed channel couldn't be found`);
    
        let msg = `- {{MEMBER}} Invited By: {{INVITER}}`;
        member.guild.fetchInvites()
        .then(invites => {
          let finder = invites.find(i => data.get(i.code).uses < i.uses);
          let inviter = finder.inviter || message.guild.owner;
          msg = msg.replace('{{MEMBER}}', member);
          msg = msg.replace('{{INVITER}}', inviter);
          member.guild.channels.find(r => r.name === channel)
          .send(msg);
          })
         .catch(e => {
          console.log(e.message);
          member.guild.channels.find(r => r.name === channel)
          .send(`- ${member} Invited By: <@${member.guild.owner.id}>.`);
         });
      }
        const millis = new Date().getTime() - member.user.createdAt.getTime();
        const now = new Date();
        const createdAt = millis / 1000 / 60 / 60 / 24;
      
        const welem = new Discord.RichEmbed()
      
        .setColor("black")
        .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
        .setAuthor(member.user.tag, member.user.avatarURL);
        
      
      await member.guild.channels.find(x=> x.name === sWlc[member.guild.id].channel).send(welem)
      
          
      });
    
    
    
    
    

    


  
    
    const sRole = require("./jsonfile/Roles.json")


    client.on('message', message => {

      if(!message.guild) return
      if(!sRole[message.guild.id]) sRole[message.guild.id] = {
          rolesAndMessages: []
      };
  
      var attentions = {};
      attentions[message.guild.id] = { };
      const role = sRole[message.guild.id].role
      if(message.content.startsWith(prefix + "settings setrole")) {
        if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        let args = message.content.split(/[ ]+/);
        message.channel.send( message.author + ', **⇏ | قم بوضع اسم الرتبة الان**').then( (m) =>{
          m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 }).then ( (m1) => {
              m1 = m1.first();
              attentions[message.guild.id]['role'] = m1.content;
              if (!message.guild.roles.find("name", m1.content)) return message.channel.send(`**⇏ | ${message.author}, لايوجد رتبة بهذا الاسم**`);;
          m.channel.send( message.author + ', **⇏ | :writing_hand: قم بوضع الامر الذي تريد من الاعضاء كتابته للحصول على الرتبة **' )
  
          m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
          m2 = m2.first();
          attentions[message.guild.id]['msg'] = m2.content;
  
          message.channel.send(`**⇏ | هل تريد اكمال العملية ؟
  الرتبة : ${attentions[message.guild.id]['role']}
  الامر : ${attentions[message.guild.id]['msg']}  **`).then(msge => {
          msge.react('✅').then( r => {
          msge.react('❌')
  
          const oneFilterBB = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
          const threeFilterBB = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          const oneBY = msge.createReactionCollector(oneFilterBB, { time: 60000});
          const threeBY = msge.createReactionCollector(threeFilterBB, { time: 60000});
          oneBY.on('collect', r => {
              msge.delete();
              message.channel.send(`${message.author}  **⇏ | تمت اضافة الرتبة والامر بنجاح **`)
              
          channel = attentions[message.guild.id]['role']
          msgx = attentions[message.guild.id]['msg'] = m2.content;
          sRole[message.guild.id].rolesAndMessages.push({msg : msgx, role: channel}); 
  
        fs.writeFile("./jsonfile/Roles.json", JSON.stringify(sRole, null, 2), (err) => {
          if(err) console.log(err)
        });
  
          })
          threeBY.on('collect', r => {
              msge.delete();
              message.reply("**⇏ | تم الغاء العملية**")
              })
          })
      })
          
          })
  });
  })
  return;
      }
  
      for (let i = 0; i < sRole[message.guild.id].rolesAndMessages.length; i++) {
          let d = sRole[message.guild.id].rolesAndMessages[i];
          if (d.msg == message.content) {
              if (message.guild.member(message.author).roles.find("name", d.role)) return message.channel.send(`**⇏ | ${message.author}, انت تملك الرتبة بالفعل**`);;
              message.member.addRole(message.guild.roles.find('name',d.role));
            
                  message.channel.send(`**⇏ | ${message.author} تم اعطائك رتبة ${d.role} بنجاح**`);
              break;
          };
      };
  });


        ///         if(message.content.startsWith(prefix + "settings toggleMedia")) {

  let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
  client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if(message.content.startsWith(prefix + "settings AntiBots On")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`**${t} | \`ON\`.**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  
  
  client.on('message', message => {
    let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
    let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
    if(message.content.startsWith(prefix + "settings AntiBots Off")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**${t} | \`OFF\`.**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
  
  })