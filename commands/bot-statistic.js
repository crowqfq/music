const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, Colors, version } = require("discord.js")
const config = require("../config.js");
module.exports = {
  name: "statistic",
  description: "View your bot statistics.",
  options: [],
  run: async (client, interaction) => {
    let lang = client.language

    const embed = new EmbedBuilder()
      .setTitle(client.user.username + lang.msg19)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setDescription(`**
• Owner: \`${client.users.cache.get(config.ownerID)?.tag || "Undefined"}\`
• Developer: \`Umut#6070\`

• User Count: \`${client.users.cache.size}\`
• Server Count: \`${client.guilds.cache.size}\`
• Channel Count: \`${client.channels.cache.size}\`
• Connected Voice: \`${client?.voice?.adapters?.size || 0}\`
• Command Count: \`${client.commands.map(c => c.name).length}\`
• Discord.js Version: \`V${version}\`
• Node.js Version: \`${process.version}\`
• Operation Time: <t:${Math.floor(Number(Date.now() - client.uptime) / 1000)}:R>
• Ping: \`${client.ws.ping} MS\`
• Memory Usage: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`
• OS: \`${process.platform}\`
• Invite Bot: [Click](${config.botInvite})
**`)
      .setColor("ffa954")
      .setTimestamp()
    return interaction.reply({ embeds: [embed] }).catch(err => { })
  },
};
