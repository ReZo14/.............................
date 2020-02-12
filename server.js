const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://vesta-bot.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Enmap = require("enmap");
const cd = require("countdown");
const pretty = require("pretty-ms"); // npm i pretty-ms
const totime = require("to-time");
const dbg = new Enmap({ name: "Giveaway" });
console.log("[ Giveaways is Lunched. ]");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//كود للتجربة

client.on("message", message => {
  if (message.content === "v!help") {
    message.channel
      .send("** Coming Soon ** <a:load:675050044457615431> ")
      .then(m => {
        m.react("a:vesta:675059024470999050");
      });
  }
});

//=============================== - [ Orders Help ] - ===================================//

client.on("message", message => {
  if (message.content === "v!help.") {
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`         <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> 
<a:647115773537419270:675330765931806752> Please Chose <a:647115773537419270:675330765931806752> 
      
       <:help:675688976727932948> \`\`${prefix}help building\`\`| لعرض اوامر الحمايه 
        
       <a:662947470845804545:675342924489162763> \`\`${prefix}help Create\`\`| لعرض اوامر بناء سيرفر
                
       <a:614642819176333312:675330761833840662> \`\`${prefix}help admin\`\`| لعرض اوامر الادمن

       <a:5701_dpartnerneon:675439144930902047> \`\`${prefix}help general\`\`| لعرض الاوامر العامله
<a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> 
`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help building") {
    message.channel.send(
      "**Done See Your Dm** <a:647116071626604544:675330765633880064> "
    );
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:647115773537419270:675330765931806752>  \*\*building Order\*\* <a:647115773537419270:675330765931806752> 
<a:load:675050044457615431> \`\`${prefix}setLog\`\` | لتحديد روم الوج
                    
<a:load:675050044457615431> \`\`${prefix}toggleLog on/off \`\` | تفعيل وألغاء الوج
               
<a:load:675050044457615431> \`\`${prefix}setMedia \`\` | تحديد روم الصور
        
<a:load:675050044457615431> \`\`${prefix}toggleMedia on/off \`\` | تفعيل وألغاء روم الصور
        
<a:load:675050044457615431> \`\`${prefix}infoMedia \`\` | معلومات روم الصور
                    
<a:load:675050044457615431> \`\`${prefix}setWelcomer <name room> \`\`|لتحديد روم الترحيب                 
           
<a:load:675050044457615431> \`\`${prefix}setLeave\`\`|لتحديد روم ورساله للمغادره             
           
<a:load:675050044457615431> \`\`${prefix}toggleLeave on / off\`\`|تفعيل والغاء رساله المغادره                   
            
<a:load:675050044457615431> \`\`${prefix}toggleWelcome on / off\`\`|تفعيل والغاء الويلكم                 
           
<a:load:675050044457615431> \`\`${prefix}toggleDmwelcome on / off\`\`| تفعيل والغاء الويلكم بالخاص
           
<a:load:675050044457615431> \`\`${prefix}toggleInvitedby on / off\`\`| تفعيل والغاء الانفيت باى
             
<a:load:675050044457615431> \`\`${prefix}antilink  on / off\`\`| تفعيل والغاء مضاد الينكات                    
            
<a:load:675050044457615431> \`\`${prefix}antibots on on / off\`\`| تفعيل والغاء مضاد البوتات
               
<a:load:675050044457615431> \`\`${prefix}setSug \`\`| تحديد روم الاقتراحات
            
<a:load:675050044457615431>\`\`${prefix}suggest \`\`| لأنشاء اقتراح
`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help general") {
    message.channel.send(
      "**Done See Your Dm** <a:647116071626604544:675330765633880064> "
    );
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:647115773537419270:675330765931806752>  \*\*General Order\*\* <a:647115773537419270:675330765931806752> 
<a:load:675050044457615431> \`\`${prefix}id \`\` | معلومات عنك
                    
<a:load:675050044457615431> \`\`${prefix}colors \`\` | لعرض علبه الالوان
               
<a:load:675050044457615431> \`\`${prefix}color \`\` | لأختيار لون
        
<a:load:675050044457615431> \`\`${prefix}avatar \`\` | للرؤيه الصور
        
<a:load:675050044457615431> \`\`${prefix}allbots\`\` | لرؤيه البوتات بالسيرفر

<a:load:675050044457615431> \`\`${prefix}bans\`\` | لرؤيه عدد الاشخاص المتبنده

<a:load:675050044457615431> \`\`${prefix}roles\`\` | لرؤيه رولات السيرفر

<a:load:675050044457615431> \`\`${prefix}perms\`\` | لرؤيه صلاحياتك

<a:load:675050044457615431>\`\`${prefix}weather\`\` | لتفقد الطقس في اي مكان

`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help admin") {
    message.channel.send("**Done See Your Dm** <a:yes:647115725084819456> ");
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:off:647115773537419270>  \*\*Admin Order\*\* <a:off:647115773537419270> 

<a:55:647116550662258708>\`\`${prefix}ban\`\`| حظر الشخص من السيرفر

<a:55:647116550662258708>\`\`${prefix}kick\`\`|طرد الشخص من السيرفر

<a:55:647116550662258708>\`\`${prefix}mute\`\`| اعطاء العضو ميوت 

<a:55:647116550662258708>\`\`${prefix}unmute\`\`| لفك الميوت عن الشخص 

<a:55:647116550662258708>\`\`${prefix}unban /id/all \`\`| لفك الحظر عن شخص او عن الجميع

<a:55:647116550662258708>\`\`${prefix}mc\`\`|عمل ميوت للروم

<a:55:647116550662258708>\`\`${prefix}umc\`\`|لأزاله الميوت

<a:55:647116550662258708>\`\`${prefix}move @user\`\`| لسحب الشخص الى روومك

<a:55:647116550662258708>\`\`${prefix}move all\`\`|لسحب الجميع الى رومك

<a:55:647116550662258708>\`\`${prefix}role @user <rank>\`\`| لأعطاء رتبة لعضو معين

<a:55:647116550662258708>\`\`${prefix}role all <rank>\`\`| لأعطاء رتبة للجميع

<a:55:647116550662258708>\`\`${prefix}role humans\`\`|لأعطاء رتبة للاشخاص فقط

<a:55:647116550662258708>\`\`${prefix}rmrole @user <rank> \`\`| لازالة الرتبة من شخص معين

<a:55:647116550662258708>\`\`${prefix}rmrole all <rank>\`\`| لأزاله الرتبه من الجميع

<a:55:647116550662258708>\`\`${prefix}rmrole humans <rank> <rank>\`\`| لأزاله الرتبه من الاشخاص فقط

<a:55:647116550662258708>\`\`${prefix}rmrole bots<rank>\`\`| لأزاله الرتبه من البوتات   

<a:55:647116550662258708>\`\`${prefix}gstart 1m 1 50k \`\`|امر الجيف اواى 

<a:55:647116550662258708>\`\`${prefix}createcolors\`\`| لأنشاء 88 لون 
`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help music") {
    message.channel.send("**Soon** ");
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:lid:643056634821607434> \*\*Muisc Order\*\* <a:lid:643056634821607434> 
                      
<a:mic:642515476874002432>\`\`${prefix}play\`\`|للتشغيل الاغنيه
                
<a:mic:642515476874002432>\`\`${prefix}skip \`\`|الاغنيه الثاليه
                 
<a:mic:642515476874002432>\`\`${prefix}queue\`\`|يعرض لك قائمه الاغانى
               
<a:mic:642515476874002432>\`\`${prefix}np \`\`|يعرض لك اسم الاغنيه
                 
<a:mic:642515476874002432>\`\`${prefix}stop\`\`|توقيف الاغانى 
              
<a:mic:642515476874002432>\`\`${prefix}vol  \`\`|لرفع وخفض الصوت
 



`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help Create") {
    message.channel.send("**Done See Your Dm** <a:yes:647115725084819456>  ");
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:off:647115773537419270> \*\*Create Server\*\* <a:off:647115773537419270>
                      
<a:55:647116550662258708>\`\`${prefix}server game room\`\`|انشاء رومات السيرفر الجمينج
<a:55:647116550662258708>\`\`${prefix}server game role\`\`|انشاء رولات السيرفر الجمينج
<a:55:647116550662258708>\`\`${prefix}server Shop room\`\`|انشاء رومات السيرفر الشوب
<a:55:647116550662258708>\`\`${prefix}server Shop role\`\`|انشاء رولات السيرفر الشوب



`);
    message.author.sendEmbed(embed);
  }
});

client.on("ready", () => {
  client.user.setStatus("Online");
});
client.on("ready", () => {
  client.user.setActivity("Vionm Soon ♥ ", { type: "playing" });
});

client.on("message", message => {
  if (message.content === "v!help Create") {
    message.channel
      .send("** Coming Soon ** <a:load:675050044457615431> ")
      .then(m => {
        m.react("a:vesta:675059024470999050");
      });
  }
});

client.on("message", message => {
  if (message.content === "v!help admin") {
    message.channel
      .send("** Coming Soon ** <a:load:675050044457615431> ")
      .then(m => {
        m.react("a:vesta:675059024470999050");
      });
  }
});

// ------------ = [Welcome - Leave - Invite By] = ------------ //

const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8"));
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setLeave")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| من فضلك اكتب الرساله الان... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| اكتب اسم الروم الان... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| تم الاعداد بنجاح...  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Leave Msg Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Channel:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      welcome[message.guild.id] = {
                        leavechannel: boi,
                        leavemsg: thisMessage,
                        onoff: "On",
                        leave: "On"
                      };
                      fs.writeFile(
                        "./welcomer.json",
                        JSON.stringify(welcome),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** <a:admins:650199479768711169>``MANAGE_GUILD``<a:admins:650199479768711169>"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send(" Cant Find This Channel");
    let embed = new Discord.RichEmbed()
      .setTitle("** Done The Welcome Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    welcome[message.guild.id] = {
      channel: room,
      onoff: "On",
      by: "On",
      dm: "Off",
      leave: "Off"
    };
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLeave")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off",
        leave: "Off"
      };
    if (welcome[message.guild.id].leave === "Off")
      return [
        message.channel.send(`** The Leave Msg Is __𝐎𝐍__ !**`),
        (welcome[message.guild.id].leave = "On")
      ];
    if (welcome[message.guild.id].leave === "On")
      return [
        message.channel.send(`**The Leave Msg Is __𝐎𝐅𝐅__ ! **`),
        (welcome[message.guild.id].leave = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleWelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off"
      };
    if (welcome[message.guild.id].onff === "Off")
      return [
        message.channel.send(`**The Welcome Is __𝐎𝐍__ ! **`),
        (welcome[message.guild.id].onoff = "On")
      ];
    if (welcome[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ ! **`),
        (welcome[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleDmwelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        dm: "Off"
      };
    if (welcome[message.guild.id].dm === "Off")
      return [
        message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`),
        (welcome[message.guild.id].dm = "On")
      ];
    if (welcome[message.guild.id].dm === "On")
      return [
        message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`),
        (welcome[message.guild.id].dm = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleInvitedby")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        by: "Off"
      };
    if (welcome[message.guild.id].by === "Off")
      return [
        message.channel.send(`** The Invited By Is __𝐎𝐍__ !**`),
        (welcome[message.guild.id].by = "On")
      ];
    if (welcome[message.guild.id].by === "On")
      return [
        message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`),
        (welcome[message.guild.id].by = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("guildMemberRemove", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off",
      leave: "Off"
    };

  if (welcome[member.guild.id].onoff === "Off") return;
  if (welcome[member.guild.id].leave === "Off") return;
  let welcomer = member.guild.channels.find(
    "name",
    `${welcome[member.guild.id].leavechannel}`
  );
  if (!welcomer) return;
  welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
});

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off"
    };
  if (welcome[member.guild.id].onoff === "Off") return;
  const Canvas = require("canvas");
  const jimp = require("jimp");
  const w = ["./1.png"];
  let Image = Canvas.Image,
    canvas = Canvas.createCanvas(400, 205),
    ctx = canvas.getContext("2d");
  ctx.patternQuality = "bilinear";
  ctx.filter = "bilinear";
  ctx.antialias = "subpixel";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.stroke();
  ctx.beginPath();

  fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
    err,
    Background
  ) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image();
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 400, 205);
  });

  let url = member.user.displayAvatarURL.endsWith(".webp")
    ? member.user.displayAvatarURL.slice(5, -30) + ".png"
    : member.user.displayAvatarURL;
  jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);

      ctx.font = "20px Arial";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(member.user.username, 260, 105);

      ctx.font = "8px Arial Bold";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`Your The Member ${member.guild.memberCount}`, 250, 120);

      let Avatar = Canvas.Image;
      let ava = new Avatar();
      ava.src = buf;
      ctx.beginPath();
      ctx.arc(87, 103, 82, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(ava, 5, 20, 165, 165);
      let c = member.guild.channels.find(
        "name",
        `${welcome[member.guild.id].channel}`
      );
      if (!c) return;
      c.sendFile(canvas.toBuffer());
      c.send(`**__W__elcome ~~T~~o** **${member.guild.name}**`);
      c.send("**<a:Heeeey:676415586498248748> User : **" + `${member}` + "..");
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      });
    });
  });
});

const invites = JSON.parse(fs.readFileSync("./invites.json", "UTF8"));

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    if (g.members.get(client.user.id).hasPermission("MANAGE_GUILD"))
      g.fetchInvites().then(guildInvites => {
        invites[g.id] = guildInvites;
      });
  });
});

client.on("guildMemberAdd", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      by: "Off"
    };
  if (welcome[member.guild.id].by === "Off") return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(
      channel => channel.name === `${welcome[member.guild.id].channel}`
    );
    if (!logChannel) return;
    setTimeout(() => {
      logChannel.send(`<a:Rhand:676415584451166208> **Invited By: <@${inviter.id}>** <a:Lhand:676415586518958103>


`);
    }, 2000);
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  });
});

//----------------------=[ W E A T H E R ]---[ C O M M A N D]=-----------------------//

client.on("message", message => {
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);

  if (msg.startsWith(prefix + "WEATHER")) {
    weather.find({ search: args.join(" "), degreeType: "F" }, function(
      err,
      result
    ) {
      //
      if (err) message.channel.send(err);

      if (result.length === 0) {
        message.channel.send("**Please enter a valid location.**");
        return;
      }

      var current = result[0].current;
      var location = result[0].location;

      const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00ae86)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature} Degrees`, true)
        .addField("Feels Like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true);

      message.channel.send({ embed });
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let messageArray = message.content.split(" ");

  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ban")) {
    let target = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let reason = args.slice(1).join(" ");

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("you do not have permissions to use this command!s");

    if (!target) return message.reply("```منشن شخص```");
    if (!reason) return message.reply("```اكتب سباب طرد الشخص ```");

    message.channel.send(
      `${target.user.username} Banned from server for Reason ${reason}`
    );
    target.ban(reason);
  }
});
client.on("message", message => {
  if (message.author.bot) return;

  let messageArray = message.content.split(" ");

  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "kick")) {
    let target = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let reason = args.slice(1).join(" ");

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("you do not have permissions to use this command!s");

    if (!target) return message.reply("```منشن شخص```");
    if (!reason) return message.reply("اكتب سباب طرد الشخص");

    message.channel.send(
      `**${target.user.username} kicked from server! Fot Reason ${reason}**`
    );
    target.kick(reason);
  }
});

client.on("message", async message => {
  if (message.author.omar) return;
  let messageArray = message.content.split(" ");
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.channel
      .send("**هذا الأمر فقط للسيرفرات**")
      .then(m => m.delete(5000));
  if (!message.member.hasPermission("MANAGE_ROLES")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message
      .reply("**I Don't Have `MANAGE_ROLES` Permission**")
      .then(msg => msg.delete(6000));
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "mute") {
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!tomute) return message.reply("**يجب عليك المنشن اولاً**");
    //     if(!time.match(/[1-60][s,m,h,d,w]/g))
    if (!tomute.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`"
      );
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (!reason) {
    }

    await tomute.addRole(muterole.id);
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, tomute.user.avatarURL)
      .addField(
        "**:busts_in_silhouette: المستخدم **",
        `**[ ${tomute.user.tag} ]**`,
        true
      )
      .addField(
        "**:hammer: تم بواسطة **",
        `**[ ${message.author.tag} ]**`,
        true
      )
      .addField("**:book: السبب **", `**[ ${reason} ]**`, true)
      .addField("User", `<@${tomute.user.id}>`, true)
      .setThumbnail(`${tomute.user.avatarURL}`);

    message.channel.send(embed);
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message
        .reply("**I Don't Have `MANAGE_ROLES` Permission**")
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

    let role = message.guild.roles.find(r => r.name === "muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(
        "**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:"
      );

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:"
    );

    return;
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    if (!message.content.startsWith(prefix)) return;

  if (!message.channel.guild)
    return message.reply("This Command for only server");

  if (message.content === prefix + "mc") {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        let embed = new Discord.RichEmbed()
          .setColor("")
          .setAuthor(`Channel Disabled By : ${message.author.username} `);
        message.channel.send(embed);
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    if (!message.content.startsWith(prefix)) return;

  if (!message.channel.guild)
    return message.reply("This Command for only server");

  if (message.content === prefix + "umc") {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        let embed = new Discord.RichEmbed()
          .setColor("")
          .setAuthor(`Channel Enabled By : ${message.author.username} `);
        message.channel.send(embed);
      });
  }
});

let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**AntiBots Join Is On**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**AntiBots Join Is Off**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

//stop bot

console.log("[ Giveaways is Lunched. ]");
//gstart//gstart
client.on("ready", async () => {
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels
      .filter(
        c =>
          c.type == "text" &&
          c.permissionsFor(client.user.id).has("VIEW_CHANNEL")
      )
      .forEach(async c => {
        let fetched = await c.fetchMessages();
        if (fetched.size == 0) return;
        let mess = await fetched.filter(
          r =>
            r.author.id === client.user.id && r.content == `**🎉 GIVEAWAY 🎉**`
        );
        if (mess.size == 0) return;
        mess.forEach(m => {
          if (!m) return;
          if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
          let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
          let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
          let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
          if (time2 === null || time2 === undefined) return;
          let embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${text2}`, g.iconURL)
            .setDescription(
              `React with 🎉 to enter!\nTime remaining: ${cd(
                new Date().getTime(),
                time2
              )}`
            )
            .setFooter(`Ends at`, client.user.avatarURL)
            .setTimestamp(time2);
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(text2, g.iconURL)
            .setFooter(`Ended at`);
          let ttimer = setInterval(async () => {
            if (!m || m.content == `🎉 **GIVEAWAY ENDED** 🎉`) return;
            let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
            if (ttt.includes(moment().diff(time2, "seconds")))
              return m.edit(
                `🎉 **GIVEAWAY** 🎉`,
                embed
                  .setColor("#ffb800")
                  .setDescription(
                    `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                      new Date().getTime(),
                      time2
                    )}`
                  )
              );
            m.edit(
              `🎉 **GIVEAWAY** 🎉`,
              embed.setDescription(
                `React with 🎉 to enter!\nTime remaining: ${cd(
                  new Date().getTime(),
                  time2
                )}`
              )
            );
            if (moment().isAfter(time2)) {
              m.reactions
                .filter(a => a.emoji.name == "🎉")
                .map(r =>
                  r.fetchUsers().then(u => {
                    let rusers = u
                      .filter(user => !user.bot)
                      .random(parseInt(win2));
                    m.edit(
                      `${g} GIVEAWAY ENDED ${g}`,
                      embed2
                        .setTimestamp()
                        .setDescription(`Winners:\n${rusers || "No winners"}`)
                    );
                    if (
                      m.reactions
                        .filter(a => a.emoji.name == "🎉")
                        .map(reaction => reaction.count)[0] <= 1
                    ) {
                      return m.channel.send(`No winners :rolling_eyes:`);
                    } else {
                      m.channel.send(
                        `Congratulations ${rusers}! You won the **${text2}**`
                      );
                    }
                    dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`);
                    clearInterval(ttimer);
                    return;
                  })
                );
            }
          }, 5000);
        });
      });
  });
});
//client.on('error', console.error);
//client.on('warn', warn => console.warn(`[WARN] - ${warn}`));
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});
client.on("message", async message => {
  //let g = client.guilds
  //  .get("606910399811420175")
  //    .emojis.find(r => r.name === "start");
  if (message.author.bot || message.channel.type == "dm") return undefined;
  let args = message.content.split(" ");
  let timer;
  if (args[0] == `${prefix}gstart`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1] || !args[2] || !args[3])
        return message.channel.send(
          `**Usage:** **\`${prefix}gstart [Time] [Winners] [Giveaway Prize]\n\`** **Example:** **\`${prefix}gstart 4h 1 Nitro\`**`
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined)
        return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2]))
        return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10)
        return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000;
      let time = Date.now() + totime.fromSeconds(timega).ms();
      if (timega < 5)
        return message.channel.send(
          `Giveaway time can't be less than 5 seconds.`
        );
      let timespan = cd(new Date().getTime(), time);
      let rusers;
      let embed = new RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${args.slice(3).join(" ")}`)
        .setDescription(`React with 🎉 to enter!\nTime remaining: ${timespan}`)
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
      let embed2 = new RichEmbed()
        .setColor("RED")
        .setAuthor(args.slice(3).join(" "))
        .setFooter(`Ended at`);
      let msg = await message.channel
        .send(`**🎉 GIVEAWAY 🎉**`, embed)
        .catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(
        `giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`,
        {
          gtime: time,
          gid: msg.id,
          gtext: args.slice(3).join(" "),
          gwin: args[2]
        }
      );
      await msg.react("🎉");
      timer = setInterval(() => {
        if (!msg || msg.content == `**🎉 GIVEAWAY ENDED 🎉**`) return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, "seconds")))
          return msg.edit(
            `**🎉 GIVEAWAY 🎉**`,
            embed
              .setColor("#ffb800")
              .setDescription(
                `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                  new Date().getTime(),
                  time
                )}`
              )
          );
        msg.edit(
          `**🎉 GIVEAWAY 🎉**`,
          embed.setDescription(
            `React with 🎉 to enter!\nTime remaining: ${cd(
              new Date().getTime(),
              time
            )}`
          )
        );
        rusers = msg.reactions
          .filter(a => a.emoji.name == "🎉")
          .map(reaction =>
            reaction.users.filter(u => !u.bot).random(parseInt(args[2]))
          )[0];
        if (moment().isAfter(time)) {
          msg.edit(
            `** GIVEAWAY ENDED 🎉**`,
            embed2
              .setTimestamp()
              .setDescription(`Winners:\n${rusers || "No winners"}`)
          );
          if (
            msg.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          ) {
            return message.channel.send(``);
          } else {
            msg.channel.send(
              `> Congratulations ${rusers}! You won the **${args
                .slice(3)
                .join(" ")}**`
            );
          }
          clearInterval(timer);
          return;
        }
      }, 5000);
    } else return undefined;
  }
});

const credits = JSON.parse(fs.readFileSync("./credits.json"));

client.on("message", async message => {
  credits[message.author.id].credits++;
});

var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
  if (
    args[0].toLowerCase() == `${prefix}credits` ||
    args[0].toLowerCase() === `${prefix}credit` ||
    args[0].toLowerCase() === `c`
  ) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**:bank: | ${mention.username}, Your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]))
        return message.channel.send(
          `** :interrobang: | ${message.author.username}, i can't find it!**`
        );
      if (args[2] < 1)
        return message.channel.send(
          `** :interrobang: | ${message.author.username}, type the credit you need to transfer!**`
        );
      if (mention.bot)
        return message.channel.send(
          `**:thinking: | ${message.author.username}, bots do not have credits**`
        );
      if (mentionn.id === message.author.id)
        return message.channel.send(
          `**:interrobang: | ${message.author.username}, I can't find User **`
        );
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:thinking: | ${message.author.username}, Your balance is not enough for that!**`
        );
      if (args[2].includes("-"))
        return message.channel.send(
          `**:interrobang: | ${message.author.username}, type the credit you need to transfer!**`
        );
      //let resulting = Math.floor(args[2] - args[2] * (5 / 100));
      let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 10);
      let second = Math.floor(Math.random() * 10);
      let third = Math.floor(Math.random() * 10);
      let fourth = Math.floor(Math.random() * 10);
      let num = `${first}${second}${third}${fourth}`;
      let canvas = Canvas.createCanvas(75, 50);
      let ctx = canvas.getContext("2d");
      //let tax = message.content.split(" ")[1]
      let Price = message.content.split(" ")[2];
      //tax = tax.replace(/%5/g,"");
      let resulting = Math.floor(Price - Price * (5 / 100));
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/365219235288317962/656362038884565014/captcha.png"
      );
      ctx.drawImage(background, 6, 3, canvas.width, canvas.height);
      ctx.font = "20px Tahoma";
      ctx.fontSize = "5px";
      ctx.fillStyle = "Yellow";
      message.delete();
      //let resulting = Math.floor(Price-(Price*(5/100)));
      message.channel
        .send(
          `**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **
   type these numbers to confirm : `
        )
        .then(m => {
          ctx.fillText(num, canvas.width / 4.8, canvas.height / 1.5);
          message.channel.sendFile(canvas.toBuffer()).then(s => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })

              .then(collected => {
                if (collected.first().content === num) {
                  message.channel.send(
                    `**:moneybag: | ${message.author.username}, has transferred \`$${resulting}\` to ${mentionn}**`
                  );
                  m.delete();
                  s.delete();
                  mention.send(
                    `**:atm: | Transfer Receipt**\`\`\`You Have Received \$${resulting}\ From User ${message.author.username}; (ID ${message.author.id})\`\`\``
                  );
                  m.delete();
                  s.delete();

                  credits[author].credits += Math.floor(-resulting);
                  credits[mentionn.id].credits += Math.floor(+resulting);
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                }
              });
          });
        });
    }
  }

  if (
    args[0].toLowerCase() === `${prefix}daily` ||
    args[0].toLowerCase() === `d`
  ) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:rolling_eyes: | ${message.author.username}, your daily credits refreshes in \${pretty(times, {
          verbose: true
        })}.\**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = Math.floor(Math.random() * 1000);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:moneybag: ${message.author.username}, You got :dollar: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
}); /* الحراميه تبنسخه زيي ما هوا   للمعولمه اعده رفع علشان انمسح من السيرفر */

const profile = JSON.parse(fs.readFileSync("profile.json", "utf8"));

client.on("message", message => {
  if (!profile[message.author.id])
    profile[message.author.id] = {
      points: 0,
      level: 1,
      rep: 0,
      tite: "No Title"
    };
  if (message.author.bot) return;
  profile[message.author.id].points = Math.floor(
    profile[message.author.id].points + 1
  );
  if (profile[message.author.id].points > 250) {
    profile[message.author.id].points = 0;
    profile[message.author.id].level = Math.floor(
      profile[message.author.id].level + 1
    );
    message.channel.send(
      `**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`
    );
  }
  fs.writeFile("profile.json", JSON.stringify(profile), err => {
    if (err) console.error(err);
  });
});

client.on("message", message => {
  let tit = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "title")) {
    if (!profile[message.author.id].tite)
      profile[message.author.id].tite = "Hey im using Super";
    if (!tit) {
      message.channel.send("**Usage: <title <something>**");
    } else {
      profile[message.author.id].tite = tit;
      message.channel.send(`:ok:`);
    }
  }
  fs.writeFile("profile.json", JSON.stringify(profile), err => {
    if (err) console.error(err);
  });
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "rep")) {
    if (!message.channel.guild) return;
    moment.locale("en");
    var getvalueof = message.mentions.users.first();
    if (!getvalueof)
      return message.channel.send(
        `**:mag: |  ${message.author.username}, the user could not be found.    **`
      );
    if (getvalueof.id == message.author.id)
      return message.channel.send(
        `**${message.author.username}, you cant give yourself a reputation !**`
      );
    if (profile[message.author.id].reps != moment().format("L")) {
      profile[message.author.id].reps = moment().format("L");
      profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep + 1);
      message.channel.send(
        `** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`
      );
    } else {
      message.channel.send(
        `**:stopwatch: |  ${
          message.author.username
        }, you can raward more reputation  ${moment()
          .endOf("day")
          .fromNow()} **`
      );
    }
  }
  fs.writeFile("profile.json", JSON.stringify(profile), err => {
    if (err) console.error(err);
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "profile")) {
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    var ment = message.mentions.users.first();
    var getvalueof;
    if (ment) {
      getvalueof = ment;
    } else {
      getvalueof = message.author;
    }
    var mentionned = message.mentions.users.first();
    let mention = message.mentions.users.first() || message.author;

    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    if (!profile[getvalueof.id])
      profile[getvalueof.id] = {
        points: 0,
        reps: "No Reps",
        credits: 1,
        level: 1,
        tite: "Vionm Bot User",
        rep: 0,
        lastDaily: "NOT COLLECTED"
      };
    let Image = Canvas.Image,
      canvas = new Canvas.createCanvas(300, 300),
      ctx = canvas.getContext("2d");
    fs.readFile("Pic.jpg", function(err, Background) {
      //امتداد الصورة
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
    });

    let url = getvalueof.displayAvatarURL.endsWith(".webp")
      ? getvalueof.displayAvatarURL.slice(5, -20) + ".png"
      : getvalueof.displayAvatarURL;
    jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

        //ur name
        ctx.font = "bold 16px kathen"; // حجم الخط و نوعه
        ctx.fontSize = "40px"; // عرض الخط
        ctx.fillStyle = "#000000"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${getvalueof.username}`, 153, 104); // احداثيات اسمك

        //ur name
        ctx.font = "bold 16px kathen"; // حجم الخط و نوعه
        ctx.fontSize = "40px"; // عرض الخط
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${getvalueof.username}`, 151, 102); // احداثيات اسمك

        //credit
        ctx.font = "bold 10px kathen"; // نوع الخط وحجمه
        ctx.fontSize = "10px"; // عرض الخط
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`$${credits[mention.id].credits}`, 230, 182); // احداثيات المصاري

        ctx.font = "bold 14px kathen"; // نوع الخط وحجمه
        ctx.fontSize = "12px"; // عرض الخط
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${profile[mention.id].tite}`, 150, 130); // احداثيات المصاري

        //Level
        ctx.font = "bold 24px kathen"; // نوع الخط و حجمه
        ctx.fontSize = "10px"; // عرض الخط
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${profile[getvalueof.id].level}`, 70, 78); // احداثيات اللفل

        //info
        ctx.font = "bold 12px kathen"; // ن
        ctx.fontSize = "15px"; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#000000"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${profile[getvalueof.id].points}/250`, 150, 232); // احداثيات النقاط

        //info
        ctx.font = "bold 12px kathen"; // ن
        ctx.fontSize = "15px"; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${profile[getvalueof.id].points}/250`, 150, 232); // احداثيات النقاط

        // REP
        ctx.font = "bold 20px  kathen";
        ctx.fontSize = "50px";
        ctx.fillStyle = "#f1f1f1";
        ctx.textAlign = "center";
        ctx.fillText(`+${profile[mention.id].rep}`, 225, 76);

        let Avatar = Canvas.Image;
        let ava = new Avatar();

        ava.src = buf;
        ctx.beginPath();
        ctx.arc(75, 100, 780, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(ava, 110, 29, 82, 60);

        message.channel.startTyping();
        message.channel.sendFile(canvas.toBuffer());
        message.channel.stopTyping();
      });
    });
  }
});

let log = JSON.parse(fs.readFileSync("./file-json/log.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** <a:admins:642505360699031563>``MANAGE_GUILD``<a:admins:642505360699031563>"
      );
    if (!room)
      return message.channel.send(
        "<a:mic:642515476874002432> Please Type The Channel Name"
      );
    if (!findroom)
      return message.channel.send(
        "<a:mic:642515476874002432> Please Type The Log Channel Name"
      );
    let embed = new Discord.RichEmbed()
      .setTitle(
        "**<a:yes:643037581222739978> Done The Log Code Has Been Setup**"
      )
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./file-json/log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** <a:admins:642505360699031563>``MANAGE_GUILD``<a:admins:642505360699031563>"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(
          `**The log Is <a:on:642500266985259018> __ON__ <a:on:642500266985259018> !**`
        ),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(
          `**The log Is <a:off:642500290171502602> __OFF__ <a:off:642500290171502602> !**`
        ),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./file-json/log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`His Orginal Name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`His Orginal Name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        //		.setTitle('**[VOICE UNDEAF]**')
        //			.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

client.on("guildMemberRemove", member => {
  var logChannel = member.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  let leaveMember = new Discord.RichEmbed()
    .setTitle("**[LEAVE MEMBER]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);

  logChannel.send(leaveMember);
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "role")) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send("**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`");
    let member = message.mentions.users.first();
    let role = args
      .join(" ")
      .replace(member, "")
      .replace(args[0], "")
      .replace(" ", "");
    console.log(role);
    if (member) {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        console.log(roleRe);
        let role1 = message.guild.roles.find("name", roleRe);
        console.log(`hi`);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).removeRole(role1.id);

        const e = new Discord.RichEmbed()

          .setDescription(
            "<a:yes:643037581222739978>** Changed Roles For **" +
              member +
              "**,** " +
              "**" +
              "-" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else if (!role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).addRole(role1);
        const e = new Discord.RichEmbed()

          .setDescription(
            "<a:yes:643037581222739978>** Changed Roles For **" +
              member +
              "**,** " +
              "**" +
              "+" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else {
        message.reply(`You Should Type The Role Name`);
      }
    } else if (args[0] == "all") {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Taken From __${message.guild.members.size}__ Member**`
            );
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        if (!role1) return;
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).addRole(role1);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Given To __${message.guild.members.size}__ Members **`
            );
          });
      }
    } else if (args[0] == "humans") {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Taken From __${message.guild.members.size}__ Member**`
            );
          });
      }

      if (role) {
        let role1 = message.guild.roles.find("name", role);

        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == false)
              .forEach(m => {
                message.guild.member(m).addRole(role1);
              });
            msg.edit(`** <a:yes:643037581222739978>   Done...**`);
          });
      }
    } else if (args[0] == "bots") {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(`** <a:yes:643037581222739978>  Done...**`);
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == true)
              .forEach(m => {
                message.guild.member(m).addRole(role1);
              });
            msg.edit(
              `** <a:yes:643037581222739978>  Done...\n**` +
                role1.name +
                `** Has Given To __${message.guild.members.size}__ Member**`
            );
          });
      }
    }
  }
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "rmrole")) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send("**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`");
    let member = message.mentions.users.first();
    let role = args
      .join(" ")
      .replace(member, "")
      .replace(args[0], "")
      .replace(" ", "");
    console.log(role);
    if (member) {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        console.log(roleRe);
        let role1 = message.guild.roles.find("name", roleRe);
        console.log(`hi`);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).removeRole(role1.id);

        const e = new Discord.RichEmbed()

          .setDescription(
            ":white_check_mark:** Pull Role For **" +
              member +
              "**,** " +
              "**" +
              "-" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else if (!role.startsWith(">")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).removeRole(role1);
        const e = new Discord.RichEmbed()

          .setDescription(
            "<a:yes:643037581222739978>** Pull Role For **" +
              member +
              "**,** " +
              "**" +
              "+" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else {
        message.reply(`يجب عليك كتابة اسم الرتبة`);
      }
    } else if (args[0] == "all") {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Pull From __${message.guild.members.size}__ Member**`
            );
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        if (!role1) return;
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Pull To __${message.guild.members.size}__ Members **`
            );
          });
      }
    } else if (args[0] == "humans") {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Pull From __${message.guild.members.size}__ Member**`
            );
          });
      }

      if (role) {
        let role1 = message.guild.roles.find("name", role);

        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == false)
              .forEach(m => {
                message.guild.member(m).removeRole(role1);
              });
            msg.edit(`** <a:yes:643037581222739978> Done...**`);
          });
      }
    } else if (args[0] == "bots") {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(`** <a:yes:643037581222739978> Done...**`);
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == true)
              .forEach(m => {
                message.guild.member(m).removeRole(role1);
              });
            msg.edit(
              `** <a:yes:643037581222739978>  Done...\n**` +
                role1.name +
                `** rank has been pull To __${message.guild.members.size}__ Member**`
            );
          });
      }
    }
  }
});

const sug = JSON.parse(fs.readFileSync("./sug.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setSug")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send("Cant Find This Channel");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Suggest Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    sug[message.guild.id] = {
      channel: room
    };
    fs.writeFile("./sug.json", JSON.stringify(sug), err => {
      if (err) console.error(err);
    });
    client.on("message", message => {
      if (message.content.startsWith(`${prefix}suggest`)) {
        if (!message.channel.guild) return;
        let suggest = message.content.split(" ").slice(1);
        if (!suggest) return message.reply(`**Please Type The Suggest**`);
        let findchannel = message.guild.channels.find(
          "name",
          `${sug[message.guild.id].channel}`
        );
        if (!findchannel)
          return message.channel.send(
            `Error 404: The Suggest Channel Cant Find Or Not Set To Set The Suggest Channel Type: ${prefix}setSug`
          );
        message.channel.send(`Done Your Suggest Will Be Seen By The Staffs`);
        let sugembed = new Discord.RichEmbed()
          .setTitle("New Suggest !")
          .addField("Suggest By:", `${message.author}`)
          .addField("Suggest:", `${suggest}`)
          .setFooter(`${client.user.tag}`);
        findchannel
          .sendEmbed(sugembed)
          .then(function(message) {
            message.react("✅");
            message.react("❌");
          })
          .catch(err => {
            message.reply(
              `Error 404: The Suggest Channel Cant Find Or Not Set To Set The Suggest Channel Type: ${prefix}setSug`
            );
            console.error(err);
          });
      }
    });
  }
});

let pics = JSON.parse(fs.readFileSync("./pics.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setMedia")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send("لا يمكن العثور على هذه الروم");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The MediaOnly Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By", `${message.author}`)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    (pics[message.guild.id] = {
      channel: room,
      onoff: "On"
    }),
      fs.writeFile("./pics.json", JSON.stringify(pics), err => {
        if (err) console.error(err);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleMedia")) {
    if (!message.channel.guild) return;

    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!pics[message.guild.id])
      pics[message.guild.id] = {
        onoff: "Off"
      };
    if (pics[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The MediaCode Is __𝐎𝐍__ !**`),
        (pics[message.guild.id].onoff = "On")
      ];
    if (pics[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The MediaCode Is __𝐎𝐅𝐅__ !**`),
        (pics[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./pics.json", JSON.stringify(pics), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;

  if (!pics[message.guild.id])
    pics[message.guild.id] = {
      onoff: "Off"
    };
  if (pics[message.guild.id].onoff === "Off") return;

  if (message.channel.name !== `${pics[message.guild.id].channel}`) return;

  let types = ["jpg", "jpeg", "gif", "png"];
  if (message.attachments.size <= 0) {
    message.delete();
    message.reply(`**This Channel For Media Only !**`).then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000);
    });
    return;
  }
  if (message.attachments.size >= 1) {
    let filename = message.attachments.first().filename;
    console.log(filename);
    if (!types.some(type => filename.endsWith(type))) {
      message.delete();
      message.channel
        .send(`**🖼️ | ${message.author}, this room for pictures only.**`)
        .then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 5000);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "infoMedia")) {
    let embed = new Discord.RichEmbed()
      .addField("Channel Status", `\`${pics[message.guild.id].onoff}\``)
      .addField("Media Channel", `\`${pics[message.guild.id].channel}\``)
      .addField("Requested By", `\`${message.author.username}\``)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
  }
});

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "limits")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (message.content.startsWith(prefix + "limitsban")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "limitskick")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "limitsroleD")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "limitsroleC")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "limitschannelD")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "limitstime")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "antilink off")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔ The AntiLink Is __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "antilink on")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AntiLink Is __𝐎𝐍__ !**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http://www.gmail.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.snapchat.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.instagram.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.twitter.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http://www.facebook.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.discordapp.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://discord.gg/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antispread ON ! So You Cant spread Here !**`
    );
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "avatar")) {
    var mentiooned = message.mentions.users.first();

    var doma;
    if (mentiooned) {
      var doma = mentiooned;
    } else {
      var doma = message.author;
    }

    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor("Avatar Link")
      .setTitle("ClickHere")
      .setURL(doma.avatarURL)
      .setImage(doma.avatarURL)
      .setFooter(`${client.user.username}`, client.user.avatarURL);
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (message.content === prefix + "allbots") {
    let i = 1;

    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);

    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${message.author.username}#${message.author.discriminator}`,
        message.author.avatarURL
      )
      .setDescription(
        `Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this server \n ${botssize.join("\n")}`
      )
      .setFooter(`${client.user.username}`, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (message.content === prefix + "bans") {
    message.guild.fetchBans().then(bans => {
      let i = 1;
      let b = bans.size;
      let bb = bans.map(a => `${i++} - ${a}`).join(" \n ");
      let embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`Found ${b} bans in this server`)
        .setDescription(`${bb}`)
        .setFooter(`${client.user.username}`, client.user.avatarURL)
        .setTimestamp();
      message.channel.send(embed);
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (!message.guild) return;
  if (message.content === prefix + "roles") {
    let i = 0;
    let U = 1;
    let str = "";
    const roles = message.guild.roles.forEach(
      role => `${i++} ${(str += `${U++} - ` + role.name + "\n")}`
    );

    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(`Found ${i} roles this server`)
      .setDescription(`${str}`)
      .setFooter(`${client.user.username}`, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.split(" ")[0] == prefix + "id") {
    if (!message.channel.guild) return;

    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    let defineduser = "";
    if (!args[1]) {
      defineduser = message.author;
    } else {
      let firstMentioned = message.mentions.users.first();
      defineduser = firstMentioned;
    }

    const w = ["./id/id5.png", "./id/id6.png", "./id/id7.png"];
    var Canvas = require("canvas");
    var jimp = require("jimp");

    const millis = new Date().getTime() - defineduser.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy");
    const stats2 = ["online", "Low", "Medium", "Insane"];
    const days = millis / 1000 / 60 / 60 / 24;
    dateFormat(now, "dddd, mmmm dS, yyyy");
    let time = `${dateFormat(defineduser.createdAt)}`;
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    let Image = Canvas.Image,
      canvas = new Canvas(300, 300),
      ctx = canvas.getContext("2d");
    ctx.patternQuality = "bilinear";
    ctx.filter = "bilinear";
    ctx.antialias = "subpixel";

    fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
      err,
      Background
    ) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 300, 300);
    });
    var mentionned = message.mentions.users.first();

    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }

    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    let url = defineduser.displayAvatarURL.endsWith(".webp")
      ? defineduser.displayAvatarURL.slice(20, 20) + ".png"
      : defineduser.displayAvatarURL;
    jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

        let Avatar = Canvas.Image;
        let ava = new Avatar();
        ava.src = buf;
        ctx.drawImage(ava, 112, 40, 75, 75);

        var status;
        if (defineduser.presence.status === "online") {
          status = "ONLINE";
          ctx.fillStyle = `#2ce032`;
          ctx.beginPath();
          ctx.arc(179, 107, 10, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
        } else if (defineduser.presence.status === "dnd") {
          status = "DND";
          ctx.fillStyle = `#ff0000`;
          ctx.beginPath();
          ctx.arc(179, 107, 8, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
        } else if (defineduser.presence.status === "idle") {
          status = "IDLE";
          ctx.fillStyle = `#f4d32e`;
          ctx.beginPath();
          ctx.arc(179, 107, 10, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
        } else if (defineduser.presence.status === "offline") {
          status = "INVISIABLE";
          ctx.fillStyle = `#898988`;
          ctx.beginPath();
          ctx.arc(179, 107, 10, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
        }

        var time2;
        if (mentionned) {
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
        } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
        }

        ctx.font = "Bold 15px Arial ";
        ctx.fontSize = "15px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(status, 70, 108);

        ctx.font = "Bold 13px Arial";
        ctx.fontSize = "13px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          `${
            message.author.presence.game === null
              ? "💎🇪 🇷 🇷 🇴 🇷💎"
              : message.author.presence.game.name
          }`,
          150.0,
          180
        );

        ctx.font = "Bold 20px Arial ";
        ctx.fontSize = "15px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(`${defineduser.username}`, 150.5, 140);

        ctx.font = "Bold 15px Arial";
        ctx.fontSize = "15px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(`#${defineduser.discriminator}`, 227, 108);

        var time2;
        if (mentionned) {
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
        } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
        }

        ctx.font = "Bold 13px Arial ";
        ctx.fontSize = "13px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          `${moment(defineduser.createdTimestamp).fromNow()}`,
          179,
          226
        );
        ctx.font = "Bold 13px Arial ";
        ctx.fontSize = "13px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")}`,
          179,
          253
        );

        message.channel.sendFile(canvas.toBuffer());
      });
    });
  }
});

client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == "v!colors" || message.content == "الوان") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 260, 25)
        .setTextBaseline("middle")
        .setColor("black")
        .setTextSize(80)
        .addText(`Color List`, 375, 75);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
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
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (
    message.content.split(" ")[0] == "v!color" ||
    message.content.split(" ")[0] == "لون"
  ) {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**No Color With This Name/Number ** :x: `)
      .setColor(`ff0000`);

    if (!isNaN(args) && args.length > 0)
      if (!message.guild.roles.find("name", `${args}`))
        return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args}`);
    if (!a) return;
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(
        `**Done , Your Colors Has Been Changed . <a:yes:643037581222739978> **`
      )

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args}`));
  }
});

client.on("message", message => {
  if (message.content === prefix + "createcolors") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "1",
      color: "#000001",
      permissions: []
    });
    message.guild.createRole({
      name: "2",
      color: "#0a0a0a",
      permissions: []
    });
    message.guild.createRole({
      name: "3",
      color: "#131313",
      permissions: []
    });
    message.guild.createRole({
      name: "4",
      color: "#1f1f1f",
      permissions: []
    });
    message.guild.createRole({
      name: "5",
      color: "#242424",
      permissions: []
    });
    message.guild.createRole({
      name: "6",
      color: "#333333",
      permissions: []
    });
    message.guild.createRole({
      name: "7",
      color: "#5c5c5c",
      permissions: []
    });
    message.guild.createRole({
      name: "8",
      color: "#797979 ",
      permissions: []
    });
    message.guild.createRole({
      name: "9",
      color: "#a0a0a0",
      permissions: []
    });
    message.guild.createRole({
      name: "10",
      color: "#cecece",
      permissions: []
    });
    message.guild.createRole({
      name: "11",
      color: "#ffffff",
      permissions: []
    });
    message.guild.createRole({
      name: "12",
      color: "#110000",
      permissions: []
    });

    message.guild.createRole({
      name: "13",
      color: "#2c0000",
      permissions: []
    }); //master killer

    message.guild.createRole({
      name: "14",
      color: "#380401",
      permissions: []
    });

    message.guild.createRole({
      name: "15",
      color: "#4b0101",
      permissions: []
    });

    message.guild.createRole({
      name: "16",
      color: "#520000",
      permissions: []
    });

    message.guild.createRole({
      name: "17",
      color: "#580000",
      permissions: []
    });

    message.guild.createRole({
      name: "18",
      color: "#810000",
      permissions: []
    });

    message.guild.createRole({
      name: "19",
      color: "#a00000",
      permissions: []
    });

    message.guild.createRole({
      name: "20",
      color: "#c90000",
      permissions: []
    });

    message.guild.createRole({
      name: "21",
      color: "#f10000",
      permissions: []
    });

    message.guild.createRole({
      name: "22",
      color: "#ff0000",
      permissions: []
    });
    message.guild.createRole({
      name: "23",
      color: "#310d00",
      permissions: []
    });
    message.guild.createRole({
      name: "24",
      color: "#471d00",
      permissions: []
    });

    message.guild.createRole({
      name: "25",
      color: "#632500",
      permissions: []
    });

    message.guild.createRole({
      name: "26",
      color: "#702900",
      permissions: []
    });

    message.guild.createRole({
      name: "27",
      color: "#743300",
      permissions: []
    }); //master killer

    message.guild.createRole({
      name: "28",
      color: "#793600",
      permissions: []
    });
    message.guild.createRole({
      name: "29",
      color: "#8a4600",
      permissions: []
    });

    message.guild.createRole({
      name: "30",
      color: "#b34700",
      permissions: []
    });

    message.guild.createRole({
      name: "31",
      color: "#d86300",
      permissions: []
    });

    message.guild.createRole({
      name: "32",
      color: "#ee6900",
      permissions: []
    });

    message.guild.createRole({
      name: "33",
      color: "#ff8100",
      permissions: []
    });

    message.guild.createRole({
      name: "34",
      color: "#02001a",
      permissions: []
    });

    message.guild.createRole({
      name: "35",
      color: "#040027",
      permissions: []
    });
    message.guild.createRole({
      name: "36",
      color: "#000250",
      permissions: []
    });

    message.guild.createRole({
      name: "37",
      color: "#00006b",
      permissions: []
    });

    message.guild.createRole({
      name: "38",
      color: "#09008b ",
      permissions: []
    });

    message.guild.createRole({
      name: "39",
      color: "#020094",
      permissions: []
    });

    message.guild.createRole({
      name: "40",
      color: "#0005b9",
      permissions: []
    });
    message.guild.createRole({
      name: "41",
      color: "#0f00db",
      permissions: []
    });
    message.guild.createRole({
      name: "42",
      color: "#0300f7",
      permissions: []
    });
    message.guild.createRole({
      name: "43",
      color: "#002bff",
      permissions: []
    });
    message.guild.createRole({
      name: "44",
      color: "#0047ff",
      permissions: []
    });

    message.guild.createRole({
      name: "45",
      color: "#001601",
      permissions: []
    });

    message.guild.createRole({
      name: "46",
      color: "#002501",
      permissions: []
    });

    message.guild.createRole({
      name: "47",
      color: "#052900",
      permissions: []
    });

    message.guild.createRole({
      name: "48",
      color: "#003b03",
      permissions: []
    });

    message.guild.createRole({
      name: "49",
      color: "#005802",
      permissions: []
    });

    message.guild.createRole({
      name: "50",
      color: "#007715",
      permissions: []
    });

    message.guild.createRole({
      name: "51",
      color: "#179600",
      permissions: []
    });

    message.guild.createRole({
      name: "52",
      color: "#00a50e",
      permissions: []
    });

    message.guild.createRole({
      name: "53",
      color: "#00ad06",
      permissions: []
    });

    message.guild.createRole({
      name: "54",
      color: "#00be00",
      permissions: []
    });

    message.guild.createRole({
      name: "55",
      color: "#00ff0f",
      permissions: []
    });

    message.guild.createRole({
      name: "56",
      color: "#292800",
      permissions: []
    });

    message.guild.createRole({
      name: "57",
      color: "#3a3601",
      permissions: []
    });

    message.guild.createRole({
      name: "58",
      color: "#474500",
      permissions: []
    });

    message.guild.createRole({
      name: "59",
      color: "#5e5c00",
      permissions: []
    });

    message.guild.createRole({
      name: "60",
      color: "#818100",
      permissions: []
    });

    message.guild.createRole({
      name: "61",
      color: "#999800",
      permissions: []
    });

    message.guild.createRole({
      name: "62",
      color: "#aca600",
      permissions: []
    });

    message.guild.createRole({
      name: "63",
      color: "#bcc500",
      permissions: []
    });

    message.guild.createRole({
      name: "64",
      color: "#d1d100",
      permissions: []
    });

    message.guild.createRole({
      name: "65",
      color: "#c9d800",
      permissions: []
    });

    message.guild.createRole({
      name: "66",
      color: "#ffee00",
      permissions: []
    });

    message.guild.createRole({
      name: "67",
      color: "#1b0030",
      permissions: []
    });

    message.guild.createRole({
      name: "68",
      color: "#1e003a",
      permissions: []
    });

    message.guild.createRole({
      name: "69",
      color: "#2c004b",
      permissions: []
    });

    message.guild.createRole({
      name: "70",
      color: "#3e005e",
      permissions: []
    });

    message.guild.createRole({
      name: "71",
      color: "#5d0097",
      permissions: []
    });

    message.guild.createRole({
      name: "72",
      color: "#6b009c",
      permissions: []
    });

    message.guild.createRole({
      name: "73",
      color: "#8c00b8",
      permissions: []
    });

    message.guild.createRole({
      name: "74",
      color: "#a200c7",
      permissions: []
    });

    message.guild.createRole({
      name: "75",
      color: "#aa00e0",
      permissions: []
    });

    message.guild.createRole({
      name: "76",
      color: "#cc00db",
      permissions: []
    });

    message.guild.createRole({
      name: "77",
      color: "#e200ff",
      permissions: []
    });

    message.guild.createRole({
      name: "78",
      color: "#4d0037",
      permissions: []
    });

    message.guild.createRole({
      name: "79",
      color: "#660041",
      permissions: []
    });

    message.guild.createRole({
      name: "80",
      color: "#91005c",
      permissions: []
    });

    message.guild.createRole({
      name: "81",
      color: "#b4006a",
      permissions: []
    });

    message.guild.createRole({
      name: "82",
      color: "#ca0076",
      permissions: []
    });

    message.guild.createRole({
      name: "83",
      color: "#cc008e",
      permissions: []
    });

    message.guild.createRole({
      name: "84",
      color: "#d60089",
      permissions: []
    });

    message.guild.createRole({
      name: "85",
      color: "#e900a3",
      permissions: []
    });

    message.guild.createRole({
      name: "86",
      color: "#ff00b3",
      permissions: []
    });

    message.guild.createRole({
      name: "87",
      color: "#ff2dbe",
      permissions: []
    });

    message.guild.createRole({
      name: "88",
      color: "#ff73d4",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription(
          "``Colors Has Been Created ``" +
            "<a:616773147563261964:619774843214233611>"
        )
    });
  }
});

client.on("message", message => {
  let roles = message.guild.roles.find(
    all => all.name === "⇁『KiNG 』‏‏༄  ❥",
    "⇁『LEADER』‏‏༄  ❥",
    "⇁『BiG BOSS 』‏‏༄  ❥",
    "⇁『CAPTAIN 』‏‏༄  ❥",
    "⇁『SERGEANT 』‏‏༄  ❥",
    "⇁『youtuber 』‏‏༄  ❥",
    "⇁『ACTIVE 』‏‏༄  ❥"
  ); //Baron#1500
  if (message.content === prefix + "server game role") {
    //Baron#1500
    if (message.author.bot) return; //Baron#1500
    if (roles) return message.reply("**الرتب موجوده بالفعل**"); //Baron#1500
    //دى بقا الرتب ال انت عاوزو يعملها
    let roleking = message.guild.roles.find(r => r.name === "⇁『KiNG 』‏‏༄  ❥"); //Baron#1500
    if (!roleking) {
      message.guild.createRole({
        //Baron#1500
        name: "⇁『KiNG 』‏‏༄  ❥",
        color: "RANDOM",
        position: 1,
        hoist: true,
        permissions: "ADMINISTRATOR"
      });
    }
    let roleleader = message.guild.roles.find(
      r => r.name === "⇁『LEADER』‏‏༄  ❥"
    ); //Baron#1500
    if (!roleleader) {
      message.guild.createRole({
        name: "⇁『LEADER』‏‏༄  ❥",
        color: "RANDOM",
        position: 2, //Baron#1500
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "MANAGE_CHANNELS",
          "ADD_REACTIONS",
          "VIEW_AUDIT_LOG",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "SEND_TTS_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    }
    let rolebigboss = message.guild.roles.find(
      r => r.name === "⇁『BiG BOSS 』‏‏༄  ❥"
    ); //Baron#1500
    if (!rolebigboss) {
      message.guild.createRole({
        name: "⇁『BiG BOSS 』‏‏༄  ❥",
        color: "RANDOM",
        position: 3,
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "ADD_REACTIONS",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    }
    let rolecaptain = message.guild.roles.find(
      r => r.name === "⇁『CAPTAIN 』‏‏༄  ❥"
    ); //Baron#1500
    if (!rolecaptain) {
      message.guild.createRole({
        name: "⇁『CAPTAIN 』‏‏༄  ❥",
        color: "RANDOM",
        postion: 4,
        hoist: true,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    }
    let rolesergant = message.guild.roles.find(
      r => r.name === "⇁『SERGEANT 』‏‏༄  ❥"
    ); //Baron#1500
    if (!rolesergant) {
      message.guild.createRole({
        name: "⇁『SERGEANT 』‏‏༄  ❥",
        color: "RANDOM", //Baron#1500
        postion: 5,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    } //Baron#1500
    let roleyoutuber = message.guild.roles.find(
      r => r.name === "⇁『youtuber 』‏‏༄  ❥"
    );
    if (!roleyoutuber) {
      //Baron#1500
      message.guild.createRole({
        name: "⇁『youtuber 』‏‏༄  ❥",
        color: "RANDOM",
        postion: 6,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
    }
    let roleactive = message.guild.roles.find(
      r => r.name === "⇁『ACTIVE 』‏‏༄  ❥"
    ); //Baron#1500
    if (!roleactive) {
      //Baron#1500
      message.guild.createRole({
        name: "⇁『ACTIVE 』‏‏༄  ❥",
        color: "RANDOM",
        postion: 7,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK", //Baron#1500
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      });
      message.guild.createRole({
        //Baron#1500
        name: "Fortnite",
        color: "RANDOM", //Baron#1500
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK", //Baron#1500
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      });
      message.guild.createRole({
        //Baron#1500
        name: "playerunknowns",
        color: "RANDOM",
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      }); //Baron#1500
      message.guild.createRole({
        name: "counter-strike",
        color: "RANDOM", //Baron#1500
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.guild.createRole({
        name: "creative-destruction", //Baron#1500
        color: "RANDOM",
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
      message.guild.createRole({
        //Baron#1500
        name: "overwatch",
        color: "RANDOM",
        postion: 7, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.guild.createRole({
        name: "minecraft", //Baron#1500
        color: "RANDOM",
        postion: 7, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.guild.createRole({
        //Baron#1500
        name: "league-of-legends",
        color: "RANDOM", //Baron#1500
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.channel.send(message.member + "**جارى انشاء الرتب**").then(m => {
        setTimeout(() => {
          //Baron#1500
          m.edit("**تم انشاء الرتب بنجاح**");
        }, 3000); //Baron#1500
      });
    } //Baron#1500
  }
}); //Baron#1500

client.on("message", message => {
  let roleyoutuber = message.guild.roles.find(
    r => r.name === "⇁『youtuber 』‏‏༄  ❥"
  );
  let rolepubg = message.guild.roles.find(r => r.name === "playerunknowns");
  let rolecsgo = message.guild.roles.find(r => r.name === "counter-strike");
  let rolecd = message.guild.roles.find(r => r.name === "creative-destruction");
  let roleow = message.guild.roles.find(r => r.name === "overwatch");
  let rolemc = message.guild.roles.find(r => r.name === "minecraft");
  let rolelol = message.guild.roles.find(r => r.name === "league-of-legends");
  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
  //Baron#1500
  let roles = message.guild.roles.find(
    all => all.name === "⇁『KiNG 』‏‏༄  ❥",
    "⇁『LEADER』‏‏༄  ❥",
    "⇁『BiG BOSS 』‏‏༄  ❥",
    "⇁『CAPTAIN 』‏‏༄  ❥",
    "⇁『SERGEANT 』‏‏༄  ❥",
    "⇁『youtuber 』‏‏༄  ❥",
    "⇁『ACTIVE 』‏‏༄  ❥"
  ); //Baron#1500
  if (message.content === prefix + "server game room") {
    if (!roles)
      return message.reply(
        `**من فضلك قم بانشاء الرتب اولا اكتب \n ${prefix}server game room**`
      ); //Baron#1500
    if (roles) {
      //Baron#1500
      message.reply("**جارى انشاء الرومات**").then(c => {
        //Baron#1500
        setTimeout(() => {
          c.edit("**تم انشاء الرومات بنجاح**"); //Baron#1500
        }, 10000);
      });
      message.guild
        .createChannel(`${message.guild.name}-TEXT`, "category")
        .then(tb => {
          //Baron#1500
          message.guild.createChannel("welcome", "text").then(nws => {
            nws.setParent(tb);
            nws.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("info", "text").then(inf => {
            //Baron#1500
            inf.setParent(tb); //Baron#1500
            inf.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("news", "text").then(nws => {
            //Baron#1500
            nws.setParent(tb);
            nws.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          }); //Baron#1500
          message.guild.createChannel("chat", "text").then(cht => {
            //Baron#1500
            cht.setParent(tb);
            cht.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("bot-commands", "text").then(cmd => {
            //Baron#1500
            cmd.setParent(tb);
            cmd.overwritePermissions(message.guild.id, {
              //Baron#1500
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("youtubers", "text").then(yt => {
            //Baron#1500
            yt.setParent(tb); //Baron#1500
            yt.overwritePermissions(roleyoutuber, {
              SEND_MESSAGES: true
            });
            yt.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            });
          }); //Baron#1500
          message.guild.createChannel("pic", "text").then(pic => {
            //Baron#1500
            pic.setParent(tb);
            pic.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
            });
          });
          message.guild.createChannel("cut-tweet", "text").then(cut => {
            cut.setParent(tb);
            cut.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
        });
      message.guild.createChannel(`Games-Chat`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel("Fortnite", "text").then(wlc => {
          wlc.setParent(tb);
          wlc.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
          wlc.overwritePermissions(rolefortnite, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          });
        }); //Baron#1500
        message.guild.createChannel("playerunknowns", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(message.guild.id, {
            //Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(rolepubg, {
            //Baron#1500
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false //Baron#1500
          });
        });
        message.guild.createChannel("counter-strike", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(rolecsgo, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("creative-destruction", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(rolecd, {
            SEND_MESSAGES: true, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("overwatch", "text").then(ch => {
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          });
        });
        message.guild.createChannel("minecraft", "text").then(ch => {
          ch.setParent(tb);
          ch.overwritePermissions(rolemc, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          });
        });
        message.guild.createChannel("league-of-legends", "text").then(ch => {
          ch.setParent(tb);
          ch.overwritePermissions(rolelol, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          });
        });
      });
      message.guild
        .createChannel(`.${message.guild.name} | 🔊 .`, "category")
        .then(tb => {
          message.guild
            .createChannel("「الـقـرأن الـكـريــم | 📜」", "voice")
            .then(ch => {
              ch.setParent(tb);
              ch.overwritePermissions(message.guild.id, {
                SPEAK: false //Baron#1500
              });
              message.guild
                .createChannel("「Events | 🎲 .」", "voice")
                .then(ch => {
                  ch.setParent(tb);
                  ch.setUserLimit(50); //Baron#1500
                  ch.overwritePermissions(message.guild.id, {
                    SPEAK: false
                    //Baron#1500
                  });
                });
            });
        });
      message.guild.createChannel(`.Talking | ✋🏽 .`, "category").then(tb => {
        message.guild
          .createChannel(`「${message.guild.name} | 🔊 .」`, "voice")
          .then(ch => {
            ch.setParent(tb);
            ch.setUserLimit(50); //Baron#1500
          });
        message.guild.createChannel("「Sounds | ♫ .」", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(50); //Baron#1500
        });
      });
      message.guild
        .createChannel(`» Games | الالعاب .`, "category")
        .then(tb => {
          message.guild
            .createChannel(`Fortnite | فورتنآيت .`, "voice")
            .then(ch => {
              ch.setParent(tb);
              ch.overwritePermissions(message.guild.id, {
                CONNECT: false
              });
              ch.overwritePermissions(rolefortnite, {
                CONNECT: true
              });
            }); //Baron#1500
          message.guild
            .createChannel("Minecraft | مآينكرآفت", "voice")
            .then(ch => {
              ch.setParent(tb);
              ch.overwritePermissions(message.guild.id, {
                CONNECT: false
              });
              ch.overwritePermissions(rolemc, {
                CONNECT: true
              });
            }); //Baron#1500
          message.guild
            .createChannel(`Creative | كريآتف .`, "voice")
            .then(ch => {
              ch.setParent(tb);
              ch.overwritePermissions(message.guild.id, {
                CONNECT: false
              });
              ch.overwritePermissions(rolecd, {
                CONNECT: true //Baron#1500
              });
            });
          message.guild.createChannel("Legends | لوول", "voice").then(ch => {
            ch.setParent(tb);
            ch.overwritePermissions(message.guild.id, {
              CONNECT: false
            });
            ch.overwritePermissions(rolelol, {
              CONNECT: true
            });
          });
        });
      message.guild.createChannel(`» DJ | الموسيقي .`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel(`» Art.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
        message.guild.createChannel(`» Fun.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
        message.guild.createChannel(`» Life.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
        message.guild.createChannel(`» Sing.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
      });
      message.guild.createChannel(`» Privates | خآص .`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel(`» Single.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(1);
        });
        message.guild.createChannel("» Doubles.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(2);
        });
        message.guild.createChannel("» Triples.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(3);
        });
        message.guild.createChannel("» Forth.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(4);
        });
        message.guild.createChannel("» Classic.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(10);
        });
        message.guild.createChannel("» Group.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
      });
    }
  }
});

client.on("message", message => {
  let roleyoutuber = message.guild.roles.find(r => r.name === "Owner");
  let rolepubg = message.guild.roles.find(r => r.name === "Founder");
  let rolecsgo = message.guild.roles.find(r => r.name === "helper");
  let rolecd = message.guild.roles.find(r => r.name === "Discord Staff");
  let roleow = message.guild.roles.find(r => r.name === "New Staff");
  let rolemc = message.guild.roles.find(r => r.name === "Staff");
  let rolelol = message.guild.roles.find(r => r.name === "Trail Helper");
  let roledoma = message.guild.roles.find(r => r.name === "مسؤل التشهير");
  let rolepattner = message.guild.roles.find(r => r.name === "Partners");

  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
  let roles = message.guild.roles.find(
    all => all.name === "Owner",
    "Founder",
    "helper",
    "Discord Staff",
    "New Staff",
    "Staff",
    "Trail Helper",
    "مسؤل التشهير",
    "Partners"
  ); //Baron#1500
  if (message.content === prefix + "server shop role") {
    //Baron#1500
    if (message.author.bot) return; //Baron#1500
    if (roles) return message.reply("**الرتب موجوده بالفعل**"); //Baron#1500
    //دى بقا الرتب ال انت عاوزو يعملها
    let roleowner = message.guild.roles.find(r => r.name === "Owner"); //Baron#1500
    if (!roleowner) {
      message.guild.createRole({
        //Baron#1500
        name: "Owner",
        color: "RANDOM",
        position: 1,
        hoist: true,
        permissions: "ADMINISTRATOR"
      });
    }
    let rolefounder = message.guild.roles.find(r => r.name === "Founder"); //Baron#1500
    if (!rolefounder) {
      message.guild.createRole({
        name: "Founder",
        color: "RANDOM",
        position: 2, //Baron#1500
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "MANAGE_CHANNELS",
          "ADD_REACTIONS",
          "VIEW_AUDIT_LOG",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "SEND_TTS_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    }
    let rolehelper = message.guild.roles.find(r => r.name === "helper"); //Baron#1500
    if (!rolehelper) {
      message.guild.createRole({
        name: "helper",
        color: "RANDOM",
        position: 3,
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "ADD_REACTIONS",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    }
    let rolediscordstaff = message.guild.roles.find(
      r => r.name === "Discord Staff"
    ); //Baron#1500
    if (!rolediscordstaff) {
      message.guild.createRole({
        name: "Discord Staff",
        color: "RANDOM",
        postion: 4,
        hoist: true,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    }
    let rolestaff = message.guild.roles.find(r => r.name === "Staff"); //Baron#1500
    if (!rolestaff) {
      message.guild.createRole({
        name: "Staff",
        color: "RANDOM", //Baron#1500
        postion: 5,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    } //Baron#1500
    let rolenewstaff = message.guild.roles.find(r => r.name === "New Staff");
    if (!rolenewstaff) {
      //Baron#1500
      message.guild.createRole({
        name: "New Staff",
        color: "RANDOM",
        postion: 6,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
    }
    let roletrailhelper = message.guild.roles.find(
      r => r.name === "Trail Helper"
    ); //Baron#1500
    if (!roletrailhelper) {
      //Baron#1500
      message.guild.createRole({
        name: "Trail Helper",
        color: "RANDOM",
        postion: 7,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK", //Baron#1500
          "READ_MESSAGE_HISTORY",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      });
      let roledoma = message.guild.roles.find(r => r.name === "مسؤل التشهير");
      if (roledoma) {
        message.guild.createRole({
          //Baron#1500
          name: "مسؤل التشهير",
          color: "RANDOM",
          postion: 7,
          permissions: [
            "VIEW_CHANNEL",
            "READ_MESSAGES",
            "SEND_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "CONNECT",
            "SPEAK",
            "READ_MESSAGE_HISTORY",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "ADD_REACTIONS"
          ] //Baron#1500
        }); //Baron#150
        let rolepartners = message.guild.rolesfind(r => r.name === "Partners");
        if (rolepartners) {
          message.guild.createRole({
            name: "Partners",
            color: "RANDOM", //Baron#1500
            postion: 7,
            permissions: [
              "VIEW_CHANNEL",
              "READ_MESSAGES",
              "SEND_MESSAGES",
              "EMBED_LINKS",
              "ATTACH_FILES",
              "CONNECT",
              "SPEAK",
              "READ_MESSAGE_HISTORY",
              "USE_VAD",
              "CHANGE_NICKNAME",
              "ADD_REACTIONS"
            ]
          }); //Baron#1500
          message.channel
            .send(message.member + "**جارى انشاء الرتب**")
            .then(m => {
              setTimeout(() => {
                //Baron#1500
                m.edit("**تم انشاء الرتب بنجاح**");
              }, 3000); //Baron#1500
            });
        } //Baron#150
      }
    }
  }
}); //Baron#1500

client.on("message", message => {
  let roleyoutuber = message.guild.roles.find(r => r.name === "Owner");
  let rolepubg = message.guild.roles.find(r => r.name === "Founder");
  let rolecsgo = message.guild.roles.find(r => r.name === "helper");
  let rolecd = message.guild.roles.find(r => r.name === "Discord Staff");
  let roleow = message.guild.roles.find(r => r.name === "New Staff");
  let rolemc = message.guild.roles.find(r => r.name === "Staff");
  let rolelol = message.guild.roles.find(r => r.name === "Trail Helper");
  let roledoma = message.guild.roles.find(r => r.name === "مسؤل التشهير");
  let rolepattner = message.guild.roles.find(r => r.name === "Partners");
  let roles = message.guild.roles.find(
    all => all.name === "Owner",
    "Founder",
    "helper",
    "Discord Staff",
    "Staff",
    "New Staff",
    "Trail Helper",
    "مسؤل التشهير",
    "Partners"
  );
  if (message.content.startsWith(prefix + "create server Shop")) {
    if (!roles) return message.reply("**من فضلك قم بانشاء الرتب اولا **"); //Baron#1500
    if (roles) {
      //Baron#1500
      message.reply("**جارى انشاء الرومات**").then(c => {
        //Baron#1500
        setTimeout(() => {
          c.edit("**تم انشاء الرومات بنجاح**"); //Baron#1500
        }, 10000);
      });
      message.guild.createChannel(`💕اثبت-نفسك`, "category").then(tb => {
        message.guild
          .createChannel(`اثــبــت・نــفــســك`, "text")
          .then(nws => {
            nws.setParent(tb);
            nws.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            });
          });
        message.guild
          .createChannel(`${message.guild.name}`, "category")
          .then(tb => {
            //Baron#1500
            message.guild.createChannel("•-أخــبــار", "text").then(nws => {
              nws.setParent(tb);
              nws.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false,
                MENTION_EVERYONE: false //Baron#1500
              });
            });
            message.guild
              .createChannel("•-الــنــصـابـيـن", "text")
              .then(inf => {
                //Baron#1500
                inf.setParent(tb); //Baron#1500
                inf.overwritePermissions(message.guild.id, {
                  //Baron#1500
                  SEND_MESSAGES: false,
                  MENTION_EVERYONE: false //Baron#1500
                });
              });
            message.guild.createChannel("•-انــجــاز", "text").then(nws => {
              //Baron#1500
              nws.setParent(tb);
              nws.overwritePermissions(message.guild.id, {
                //Baron#1500
                SEND_MESSAGES: false,
                MENTION_EVERYONE: false //Baron#1500
              });
            }); //Baron#1500
            message.guild.createChannel("•-الــتـصويــت", "text").then(cht => {
              //Baron#1500
              cht.setParent(tb);
              cht.overwritePermissions(message.guild.id, {
                MENTION_EVERYONE: false //Baron#1500
              });
            });
            message.guild.createChannel("الــرتــب", "text").then(cmd => {
              //Baron#1500
              cmd.setParent(tb);
              cmd.overwritePermissions(message.guild.id, {
                //Baron#1500
                MENTION_EVERYONE: false //Baron#1500
              });
            });
            message.guild
              .createChannel(`أســعــار・الاعــلانــات`, "category")
              .then(tb => {
                message.guild
                  .createChannel("أســعــار・الاعــلانــات", "text")
                  .then(nws => {
                    nws.setParent(tb);
                    nws.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false,
                      MENTION_EVERYONE: false //Baron#1500
                    });
                  }); //Baron#1500
                message.guild
                  .createChannel("الاعــلانــات ", "text")
                  .then(pic => {
                    //Baron#1500
                    pic.setParent(tb);
                    pic.overwritePermissions(message.guild.id, {
                      MENTION_EVERYONE: false
                    });
                  });
                message.guild.createChannel(`بوست`, "category").then(tb => {
                  message.guild.createChannel("بوست", "text").then(nws => {
                    nws.setParent(tb);
                    nws.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false,
                      MENTION_EVERYONE: false
                    }); //Baron#1500
                  });
                });
                message.guild.createChannel(`المتجر`, "category").then(tb => {
                  //Baron#1500
                  message.guild
                    .createChannel("المتجر-العادي", "text")
                    .then(wlc => {
                      wlc.setParent(tb);
                      wlc.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false,
                        MENTION_EVERYONE: false
                      }); //Baron#1500
                    }); //Baron#1500
                  message.guild
                    .createChannel("•-الــطــلـبـات", "text")
                    .then(ch => {
                      //Baron#1500
                      ch.setParent(tb);
                      ch.overwritePermissions(message.guild.id, {
                        //Baron#1500
                        SEND_MESSAGES: true,
                        MENTION_EVERYONE: false
                      });
                    });
                  message.guild
                    .createChannel("تــم・بــيـع", "text")
                    .then(ch => {
                      //Baron#1500
                      ch.setParent(tb);
                      ch.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false, //Baron#1500
                        MENTION_EVERYONE: false
                      });
                    });
                  message.guild
                    .createChannel(`•الـــعــام`, "category")
                    .then(tb => {
                      message.guild
                        .createChannel("هـــدايــا・الـشـات", "text")
                        .then(ch => {
                          tb.setParent(tb);
                          tb.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false, //Baron#1500
                            MENTION_EVERYONE: false
                          });
                        });
                      message.guild
                        .createChannel("الــشــات・الــعــام", "text")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: true,
                            MENTION_EVERYONE: true
                          });
                        });
                      message.guild
                        .createChannel("اوامـــر・الــبــوت", "text")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: true,
                            MENTION_EVERYONE: false
                          });
                        });
                      message.guild
                        .createChannel("طــلـب・وســيـط", "text")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: true,
                            MENTION_EVERYONE: true
                          });
                        });
                      message.guild
                        .createChannel("・الــصــور", "text")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.overwritePermissions(message.guild.id, {
                            ATTACH_FILES: true,
                            EMBED_LINKS: true,
                            SEND_MESSAGES: false
                          });
                        });
                    });
                  message.guild
                    .createChannel(`» Privates | خآص .`, "category")
                    .then(tb => {
                      //Baron#1500
                      message.guild
                        .createChannel(`» Single.`, "voice")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.setUserLimit(1);
                        });
                      message.guild
                        .createChannel("» Doubles.", "voice")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.setUserLimit(2);
                        });
                      message.guild
                        .createChannel("» Triples.", "voice")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.setUserLimit(3);
                        });
                      message.guild
                        .createChannel("» Forth.", "voice")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.setUserLimit(4);
                        });
                      message.guild
                        .createChannel("» Classic.", "voice")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.setUserLimit(10);
                        });
                      message.guild
                        .createChannel("» Group.", "voice")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.setUserLimit(15);
                        });
                    });
                  message.guild
                    .createChannel(`GIVEAWAYS`, "category")
                    .then(tb => {
                      message.guild
                        .createChannel("مــســابـقــات", "text")
                        .then(ch => {
                          ch.setParent(tb);
                          ch.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            MENTION_EVERYONE: true //Baron#1500
                          });
                          message.guild
                            .createChannel(
                              "مــســابـقــات-・مـدفــوعـه",
                              "text"
                            )
                            .then(ch => {
                              ch.setParent(tb); //Baron#1500
                              ch.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: false,
                                MENTION_EVERYONE: true
                                //Baron#1500
                              });
                            });
                        });
                    });
                });
              });
          });
      });
    }
  }
});
