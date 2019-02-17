const Discord = require('discord.js');
const config = require('../config.json');

// Used if user has no permissions to execute the command.
module.exports.noPermissions = (message, exports) => {
    let embed = new Discord.RichEmbed()
        .setTitle("An error has occurred!")
        .setDescription(`Missing Permission - \`${exports.conf.permission}\``)
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if no user has been provided or if user is invalid.
module.exports.invalidUser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('This user could not be found or does not exist!')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if command is Bot Owner only.
module.exports.ownerOnly = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription(`Only <@${config.ownerID}> can use this command.`)
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if no arguments are given.
module.exports.noArgs = (message, exports) => {
    const embed = new Discord.RichEmbed()
      .setTitle("An error has occurred!")
      .setDescription(`Missing arguments!\nUsage: \`${exports.help.usage}\``)
      .setColor(config.red)
      .setFooter(message.author.tag, message.author.avatarURL);
    
    message.channel.send(embed);
};

// Used if no reason has been provided.
module.exports.invalidReason = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('No reason has been provided.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used for users that cannot be punished.
module.exports.cannotPunish = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('This user cannot be punished.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if a user does not specify a number of messages to purge.
module.exports.provideNumber = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('Please provide a number of messages you would like to delete.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if a user attempts to ban a user who is not banned.
module.exports.userNotBanned = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('This user is not banned.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if a user attempts to unmute a user who is not muted.
module.exports.userNotMuted = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('This user is not muted.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if a user attempts to mute a user who is already muted.
module.exports.userAlreadyMuted = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('This user has already been muted.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if the bot could not DM a user.
module.exports.couldNotDM = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('Could not send DM to mentioned user.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};

// Used if args isn't recognised in the 'edit' command
module.exports.settingNotRecognised = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle('An error has occurred!')
        .setDescription('This setting wasn\'t recognised.')
        .setColor(config.red)
        .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed);
};