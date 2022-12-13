const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require('discord.js');


module.exports ={
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // only for admins
    execute(interaction){
        interaction.reply({content: "Pong", ephemeral: true })  // ephermal means only visible for yourself
    }
}