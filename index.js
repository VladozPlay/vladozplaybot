const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('guildMemberAdd', member => {
    member.user.send(`
\`\`\`fix
Постоянная ссылка на сервер: https://discord.gg/Bg8sC3N \`\`\`
`)
});

client.on("ready", () => {
    function clear_nicks() {
        client.guilds.get('482619342131822592').members.filter(memb => memb.displayName.startsWith('!')).forEach(member => member.setNickname(member.displayName.replace(/^!+/gi, '')).catch())
	    }
        clear_nicks();
    setInterval(clear_nicks, 300000);
});

client.on("guildMemberUpdate", (old_memb, new_memb) => {
    if (new_memb.displayName.startsWith('!')) new_memb.setNickname(new_memb.displayName.replace(/^!+/gi, '')).catch();
});

client.on("userUpdate", (old_user, new_user) => {
    if (!client.guilds.get('482619342131822592').members.get(old_user.id)) return;
    if (client.guilds.get('482619342131822592').members.get(old_user.id).displayName.startsWith('!')) client.guilds.get('482619342131822592').members.get(new_user.id).setNickname(client.guilds.get('482619342131822592').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});

let arr = {
'ARK: Survival Evolved': '502442384680943616',
'ARK': '502442384680943616',	
'Apex Legends': '544234768339042304',
'Apex': '544234768339042304',
'Arma 2': '497770785319026702',
'Arma 3': '493441673918021646',
'Artifact': '525750588751872032',
'Battlefield 1': '500960726907748362',
'BF 1': '500960726907748362',
'Battlefield 3': '500960727239229441',
'BF 3': '500960727239229441',
'Battlefield 4': '502442381266649088',
'BF 4': '502442381266649088',
'Black Squad': '500718059229806609',
'Borderlands 2': '499465919773409280',
'Call of Duty 4: Modern Warfare': '502442382957215753',
'COD 4 MW': '502442382957215753',
'COD 4: MW': '502442382957215753',
'Counter-Strike: Global Offensive': '493441668826267659',
'CSGO': '493441668826267659',
'CS:GO': '493441668826267659',
'Crossout': '497770786782969857',
'Dota 2': '493441665630208014',
'dota 2 beta': '493441665630208014',
'Darkest Dungeon': '500960724978368512',
'Dead by Daylight': '493441673242607637',
'DBD': '493441673242607637',
'Destiny 2': '525750578421301248',
'DiRT4': '502442383380578304',
'Diablo 3': '497770785319026688',
'Don\'t Starve Together': '525750581868888083',
'DST': '525750581868888083',
'Dying Light': '499465920482246656',
'EVE Online': '525750585148964885',
'Far Cry 3': '502442384353656843',
'For Honor': '493447020640600088',
'Fortnite': '493849017839517696',
'Garry\'s Mod': '493445844373209090',
'Grand Theft Auto V': '493441662442274816',
'gta5': '493441662442274816',
'V-MP': '493441662442274816',
'Grand Theft Auto San Andreas': '497770788586258462',
'samp': '497770788586258462',
'Half-Life': '500718056197324842',
'Hearthstone': '494583543062855681',
'Hearts of Iron IV': '500718061419102208',
'Heroes of the Storm': '497770788569481217',
'HOTS': '497770788569481217',
'Hurtworld': '493441671200243713',
'Killing Floor 2': '497770784148684820',
'League of Legends': '499465921795194880',
'LOL': '499465921795194880',
'Left 4 Dead 2': '493447021131333633',
'L4D2': '493447021131333633',
'Minecraft': '493441671908818945',
'Overwatch': '493441673062514689',
'PAYDAY 2': '493445846210314251',
'PLAYERUNKNOWN\'S BATTLEGROUNDS': '493441670369640451',
'PUBG': '493441670369640451',
'Paladins': '493445845203812353',
'Paladins: Champions of the Realm': '497770790075367425',
'Path of Exile': '493445755399438337',
'Quake Champions': '497770787122577408',
'Rainbow Six Siege': '493445536028819467',
'R6S': '493445536028819467',
'Rocket League': '493445011644350484',
'RL': '493445011644350484',
'Rust': '493441670134890497',
'SCUM': '493447021760610305',
'Star Conflict': '500960724370063380',
'Starbound': '500718060462931998',
'TERA': '500960726307831808',
'Team Fortress 2': '493441675222319104',
'Terraria': '500718057644359690',
'The Elder Scrolls Online': '493447023039610900',
'TESO': '493447023039610900',
'The Sims 3': '500718058143350848',
'Sims 3': '500718058143350848',
'The Witcher 3': '497770791312818228',
'Total War: ROME 2': '502442381942194176',
'Unturned': '493444691879133184',
'VRChat': '493447018321281036',
'VimeWorld.ru': '493441671908818945',
'War Thunder': '493445845765718056',
'Warface': '494596866655125526',
'Warframe Launcher': '493444430661943314',
'Warframe': '493444430661943314',
'World of Tanks': '494596862267883560',
'WOT': '494596862267883560',
'World of Warcraft': '494596863975096320',
'WOW': '494596863975096320',
'XCOM: Enemy Unknown': '500718059804295188',
'osu!': '494596866076311552',
'osu': '494596866076311552',
'Trove': '544238592869007361',
'MONSTER HUNTER: WORLD': '544238591723831322',
'MONSTER HUNTER': '544238591723831322',
'Mortal Kombat X': '544238596211605527',
'Far Cry 5': '544238602591404043',
'The Witcher 3: Wild Hunt': '544238603396579339',
'The Witcher 3': '544238603396579339',
'Witcher 3': '544238603396579339',
'Escape from Tarkov': '544238604529041439',
'Tom Clancy\'s The Division': '544238605917224960',
'The Division': '544238605917224960',
'Division': '544238605917224960',
'Call of Duty': '544238606093516806',
};

client.on('guildMemberAdd', (member_) => {
    setTimeout(() => {
        client.fetchUser(member_.user.id).then(user => {
            let member = client.guilds.get(member_.guild.id).members.get(member_.user.id);
            if (user.presence.game && user.presence.game.name && user.presence.game.name in arr && !member.roles.has(arr[user.presence.game.name])) {
                member.addRole(arr[user.presence.game.name])
            }
        });
    }, 1000)
});

client.on('presenceUpdate', (old, new_) => {
    if (new_.presence.game && new_.presence.game.name && new_.presence.game.name in arr) {
        if (!new_.roles.has(arr[new_.presence.game.name])) {
            new_.addRole(arr[new_.presence.game.name])
        }
    }
});

client.on('message', message => {
    if (message.content == '!роли' && message.channel && message.channel.type == "text" && message.member.hasPermission('ADMINISTRATOR')) {
        let roles = '';
        message.guild.roles.forEach(function(role) {
            roles += `'${role.name}': '${role.id}',\n`;
        })
        message.channel.send(roles, {split: true});
    }
});

client.on('message', message => {
    if (message.channel.type !== 'dm') return;
    if (!message.content.startsWith('!')) return;
    let args = message.content.substr(1).trim().split(/ +/g);
    let command = args.shift().trim();
    console.log('cmd', args, command);
	if (command === 'роль') {
        let member = client.guilds.get('482619342131822592').members.get(message.author.id);
        if (args.join(' ').trim() == '') return message.channel.send('Ошибка! Введите пожалуйста **Игровую Роль**.');
        let roleID = arr[Object.keys(arr).find(a => a.toLowerCase().replace(/ +/g, '') == args.join(' ').trim().toLowerCase().replace(/ +/g, ''))];
        if (!roleID)
            message.channel.send('Ошибка! Вы ввели не правильное название **Игровой Роли** или Эта роль не существует.');
        else {
            member.addRole(roleID);
            message.channel.send('**Игровая Роль** - выдана! Теперь у тебя есть доступ к закрытым каналам Игры.');
        }
    }
});

const modRoles0 = ['496730168862441472', '493848689261936641', '529259700919861258'];
const clanRoles0 = ['494596867192258579']

client.on('message', message => {
    if (message.content.startsWith(`!мут`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
        if (!toRole) return message.channel.send('Укажите нарушителя!')
        
        modRoles0.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды.`);

        clanRoles0.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роль: **мута** - выдана!')
    }
});

const modRoles1 = ['496730168862441472', '493848689261936641', '529259700919861258'];
const clanRoles1 = ['494618127473180673']

client.on('message', message => {
    if (message.content.startsWith(`!бан`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));
        if (!toRole) return message.channel.send('Укажите нарушителя!')
        
        modRoles1.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды.`);

        clanRoles1.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роль: **бана** - выдана!')
    }
});

client.on(
	"guildMemberAdd",
	member =>
	client.channels.get("494979819411603456")
		.send(`**${member}** - присоединился!\nЕго id: **${member.id}**\nНа сервере **${member.guild.members.size}** - участников!`)
);
client.on(
	"guildMemberRemove",
	member =>
	client.channels.get("494979819411603456")
		.send(`**${member.user.tag}** - вышел!\nЕго id: **${member.id}**\nНа сервере **${member.guild.members.size}** - участников!`)
);

client.on("message", (message) => {
	if (!message.channel || message.channel.type !== "text" ||  !message.member.hasPermission("ADMINISTRATOR")) return;
	const command = "!текст ";
	if (message.content.startsWith(command)) {
		message.channel.send(message.content.substring(command.length))
		message.delete();
    }
});

client.on('error', function(error) {
});

client.on('ready', () => {
    console.log('Ready');
});
