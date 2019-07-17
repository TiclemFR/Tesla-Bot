const Discord = require("discord.js");
const errors = require("../module/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return errors.cantfindUser(message.channel);
  let role = args.join("").slice(22);
  if(!role) return message.reply("Spécifié un rôle!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Impossible de trouver le rôle.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Le rôle n'est déjà pas attribué.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, vous avez perdu le rôle ${gRole.name}.`)
  }catch(e){
    message.channel.send(`RIP <@${rMember.id}>, Nous vous avons retirer ${gRole.name}. Nous avons essayer de vous DM mais vo DM son bloqué.`)
  }
}

module.exports.help = {
  name: "delrole"
}
