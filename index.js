const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

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
    if (client.guilds.get('482619342131822592').members.get(new_user.id).displayName.startsWith('!')) client.guilds.get('482619342131822592').members.get(new_user.id).setNickname(client.guilds.get('482619342131822592').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});

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

client.on('message', message => {
    let rolesNames = '';

    if (message.content == '$rolesnames') {
        message.guild.roles.forEach(function(role) {
            rolesNames += `${role.name} | ${role.id}\n`
        })
        setTimeout(function() {
            message.channel.send(rolesNames);
        }, 3000)

    }
})
