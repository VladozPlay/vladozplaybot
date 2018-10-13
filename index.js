const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

const colors = ["ff2828","ff3d28","ff4b28","ff5a28","ff6828","ff7628","ff8c28","ffa128","ffac28","ffb728","ffc228","ffd028","ffd728","ffe228","fff028","fffb28","edff28","deff28","d0ff28","c2ff28","b3ff28","9aff28","8cff28","7dff28","6fff28","5aff28","3dff28","28ff2b","28ff41","28ff56","28ff6c","28ff81","28ff93","28ffa9","28ffba","28ffc9","28ffde","28fff4","28ffff","28f0ff","28deff","28deff","28d3ff","28c5ff","28baff","28b0ff","28a5ff","289eff","2893ff","2885ff","2876ff","2864ff","2856ff","284bff","2841ff","2836ff","2828ff","3228ff","4428ff","5328ff","6828ff","7628ff","7e28ff","8828ff","9328ff","a128ff","b028ff","be28ff","c928ff","d328ff","db28ff","e528ff","f028ff","ff28ff","ff28f7","ff28e5","ff28de","ff28d0","ff28c9","ff28ba","ff28b3","ff28a5","ff289a","ff288c","ff2881","ff287a","ff2873","ff2868","ff2861","ff2856","ff284f","ff2848","ff2844","ff282b"];
function color () {
    colors.forEach(function (item, number) 
   {
    setTimeout(function () {client.guilds.get('1').roles.get('1').setColor(item).catch();
    if(number === colors.length-1) 
    setTimeout(function () {color()}, 500)}, number*500);
   }
 );
};

client.on('ready', color);

let arr = {
    'Counter-Strike Global Offensive': '382541656685150208',
    'Minecraft': '384091323071987712',
    'League of Legends': '383650717962993667',
    'Overwatch': '383650952244101122',
    'Fortnite': '384575674054344704',
    'osu!': '451427065221087243',
    'World of Warcraft': '384004065861959680',
    'Terraria': '444882475416551424', 
    'DOTA 2': '381078010092191744',
    'Hearthstone': '444890469759975424',
    'Rocket League': '382217725226909696',
    'World of Tanks': '444882288388603905',
    'The Elder Scrolls Online': '385124246432514059',
    'Grand Theft Auto V': '381779905895202827',
    'Arma 3': '381780183826300940',
    'Heroes of the Storm': '384113810618843137',
    'Rust': '379583387477737482',
    'Warface': '384090848553598976',
    'Garry\'s Mod': '444882822235160586',
    'Dead by Daylight': '451484655703556116',
    'Warframe': '384090968569151488',
    'PLAYERUNKNOWN\'S BATTLEGROUNDS': '382948330822696962',
    'Rainbow Six Siege': '385123997773201409',
    'Paladins: Champions of the Realm': '384055795790249985',
    'Left 4 Dead 2': '396402145521565696',
    'Grand Theft Auto San Andreas': '444891466054238241',
    'San Andreas Multiplayer': '444891466054238241',
};

client.on('presenceUpdate', (old, new_) => {
    if (new_.presence.game && new_.presence.game.name && new_.presence.game.name in arr) {
        if (!new_.roles.has(arr[new_.presence.game.name])) {
            new_.addRole(arr[new_.presence.game.name])
        }
    }
});

client.on("ready", () => {
function clear_nicks(){
    client.guilds.get('').members.filter(memb => memb.displayName.startsWith('!')).forEach(member => member.setNickname(member.displayName.replace(/^!+/gi, '')).catch())
}
clear_nicks();
setInterval(clear_nicks, 300000);});

client.on("guildMemberUpdate", (old_memb, new_memb) => {
    if (new_memb.displayName.startsWith('!')) new_memb.setNickname(new_memb.displayName.replace(/^!+/gi, '')).catch();
});

client.on("userUpdate", (old_user, new_user) => {
    if (client.guilds.get('1').members.get(new_user.id).displayName.startsWith('!')) client.guilds.get('1').members.get(new_user.id).setNickname(client.guilds.get('315510884334305280').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});

async function multipleReact(message, arr) {
    if (arr !== []) {
        await message.react(client.emojis.get(arr.shift())).catch().then(function () {multipleReact(message,arr).catch();});
    }
}

client.on("message", async message => {
const prefix = "!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
	
if (cmd === `${prefix}say` && message.member.permissions.has("ADMINISTRATOR")) {
        message.delete().catch(O_o => {});
        const sayMessage = args.join(" ");
    const embed = new Discord.RichEmbed()
            .setColor("#62ff54")
            .setDescription(sayMessage)
            
    message.channel.send({embed});
}

if (cmd === `${prefix}идея`) {
   
    let text = args.join(' ').trim();
        
        let embed = new Discord.RichEmbed()
            .setDescription(args.join(' '))
            .addField('Автор идеи:', message.author + ` (\`${message.author.tag}\`)`);
        let nick = message.author.username;
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN).then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).then((msg) => {
multipleReact(msg, ['1', '1', '1']).catch();
}).catch(console.error);
        }).catch(console.error);
        message.author.send(`Приветствую ${message.author}. Благодарим Вас за предложенную идею для сервера **D E T R O I T**\n🗳Для Вашей идеи было создано голосование в чате <#448143095947722752>, спустя некоторое время мы её рассмотрим.`);
        message.delete();
 
}
});
