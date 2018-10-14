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
'Arma 2': '497770785319026702',
'Arma 3': '493441673918021646',
'Borderlands 2': '499465919773409280',
'Counter-Strike Global Offensive': '493441668826267659',
'Crossout': '497770786782969857',
'DOTA 2': '493441665630208014',
'Dead by Daylight': '493441673242607637',
'Diablo 3': '497770785319026688',
'Dying Light': '499465920482246656',
'For Honor': '493447020640600088',
'Fortnite': '493849017839517696',
'Garry\'s Mod': '493445844373209090',
'Grand Theft Auto V': '493441662442274816',
'Half-Life': '500718056197324842',
'Hearthstone': '494583543062855681',
'Hurtworld': '493441671200243713',
'Killing Floor 2': '497770784148684820',
'League of Legends': '499465921795194880',
'Left 4 Dead 2': '493447021131333633',
'Minecraft': '493441671908818945',
'Overwatch': '493441673062514689',
'PAYDAY 2': '493445846210314251',
'PLAYERUNKNOWN\'S BATTLEGROUNDS': '493441670369640451',
'Paladins': '493445845203812353',
'Paladins: Champions of the Realm': '497770790075367425',
'Path of Exile': '493445755399438337',
'Quake Champions': '497770787122577408',
'Rainbow Six Siege': '493445536028819467',
'Rocket League': '493445011644350484',
'Rust': '493441670134890497',
'SCUM': '493447021760610305',
'San Andreas Multiplayer': '497770788586258462',
'Team Fortress 2': '493441675222319104',
'The Elder Scrolls Online': '493447023039610900',
'The Witcher 3': '497770791312818228',
'Unturned': '493444691879133184',
'VRChat': '493447018321281036',
'War Thunder': '493445845765718056',
'Warface': '494596866655125526',
'Warframe': '493444430661943314',
'World of Tanks': '494596862267883560',
'World of Warcraft': '494596863975096320',
'dota 2 beta': '493441665630208014',
'osu!': '494596866076311552',
};
client.on('presenceUpdate', (old, new_) => {
    if (new_.presence.game && new_.presence.game.name && new_.presence.game.name in arr) {
        if (!new_.roles.has(arr[new_.presence.game.name])) {
            new_.addRole(arr[new_.presence.game.name])
        }
    }
});

client.on('message', message => {

    if (message.content == '$rolesnames') {
        message.guild.roles.forEach(function(role) {
        message.channel.send(`'${role.name}': '${role.id}',`);
        })

    }
})
