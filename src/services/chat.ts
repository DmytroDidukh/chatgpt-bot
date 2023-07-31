import { BOT_COMMANDS_CONFIG, HELP_FOOTER, HELP_HEADER, KNOWN_COMMANDS_LIST } from 'consts/chat';

function generateHelpMessage(): string {
    const commandDescriptions = Object.values(BOT_COMMANDS_CONFIG)
        .map((command) => `/${command.name} - ${command.description}`)
        .join('\n');

    return `${HELP_HEADER}\n${commandDescriptions}\n${HELP_FOOTER}`;
}

function checkCommand(command: string): boolean {
    return KNOWN_COMMANDS_LIST.includes(command);
}

const chatService = {
    generateHelpMessage,
    checkCommand,
};

export { chatService };
