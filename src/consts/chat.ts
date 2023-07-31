enum BOT_COMMANDS {
    START = 'start',
    KILL = 'kill',
    HELP = 'help',
}

interface BotCommandConfig {
    name: BOT_COMMANDS;
    description: string;
}

const BOT_COMMANDS_CONFIG: Record<BOT_COMMANDS, BotCommandConfig> = {
    [BOT_COMMANDS.START]: {
        name: BOT_COMMANDS.START,
        description: 'Initiates the bot.',
    },
    [BOT_COMMANDS.HELP]: {
        name: BOT_COMMANDS.HELP,
        description: 'Displays supported commands.',
    },
    [BOT_COMMANDS.KILL]: {
        name: BOT_COMMANDS.KILL,
        description: 'Stops the bot.',
    },
};

const KNOWN_COMMANDS_LIST: string[] = Object.values(BOT_COMMANDS);

const HELP_HEADER = `Here are the commands you can use:`;
const HELP_FOOTER = `Please note that all commands should be prefixed with a '/' symbol.`;

export { BOT_COMMANDS, KNOWN_COMMANDS_LIST, BOT_COMMANDS_CONFIG, HELP_HEADER, HELP_FOOTER };
