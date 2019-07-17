const Discord = require("discord.js");
const errors = require("../modules/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Usage: t!addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join("").slice(22);
  if (!role) return message.reply("Spécifié un rôle!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Impossible de trouver le rôle.");

  if (rMember.roles.has(gRole.id)) return message.reply("Rôle déjà aquis.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Vous avez bien donné le rôle ${gRole.name}`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Bravo <@${rMember.id}>, vous avez bien reçu le rôle ${gRole.name}. Nous avons essayer de vous DM mais vos DM son bloqué.`)
  }
}

module.exports.help = {
  name: "addrole"
}
