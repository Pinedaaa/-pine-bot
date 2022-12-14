const {asegurar_todo} = require(`${process.cwd()}/utils/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
module.exports = {
    name: "balance",
    aliases: ["dinero", "cartera", "bal", "wallet", "bank"],
    desc: "Sirve para ver la cartera de un Usuario",
    run: async (client, message, args, prefix) => {
        const user = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first() || message.member;
        if(user.bot) return message.reply("ā **Los bots no puede tener dinero!**");
        await asegurar_todo(null, user.id);
        let data = await ecoSchema.findOne({userID: user.id});
        message.reply({
            embeds: [new Discord.EmbedBuilder()
            .setAuthor({name: `Cartera de ${user.user.tag}`, iconURL: user.displayAvatarURL({dynamic: true})})
            .setDescription(`šµ **Dinero:** \`${data.dinero} monedas\`\nš¦ **Banco:** \`${data.banco} monedas\``)
            .setColor(client.color)
            ]
        });
    }
}

/*
āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
ā    || - || Desarrollado por : Pineda#5562 || - ||   ā
ā    ----------| discord.gg/.......... |----------    ā
āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
*/
