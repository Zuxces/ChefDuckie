const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Dont click me hehe!')
        .setURL('https://dsc.gg/Duckie')
        .setAuthor('Commands are listed below!')
        .setDescription('')
        .setColor('YELLOW')
        .setThumbnail('')
        .setImage('https://cdn.discordapp.com/attachments/721766902426370189/849649776759930930/ChefDuckiePromote.gif')
        .setFooter('Feel free to join the support server!')
        .addFields(
            { name: '`Cuddle`', value: 'Cuddle someone to death uwu',inline: true},
            { name: '`tickle`', value: 'tickle someone hehe'},
            { name: '`pat`', value: 'pat someone just because why not )_)'},
            { name: '`kiss`', value: 'Kiss someone as you are a lovely person owo'},
            { name: '`feed`', value: 'Feed someone if they are not eating ;-;'},
            { name: '`punch`', value: 'Punch someone is they are being annoying haha'},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "actions",
    description: "",
    usage: "actions",
    accessableby: "Members",
    aliases: []
}