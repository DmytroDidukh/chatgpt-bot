import { IContext } from 'typescript/interfaces';

import { BOT_COMMANDS } from 'consts/bot';

const knownCommands: string[] = Object.values(BOT_COMMANDS);

async function validateMessage(ctx: IContext, next: () => Promise<void>): Promise<void> {
    const text = ctx.message.text;

    // TODO: move it to a separate function
    if (text.startsWith('/')) {
        const command = text.substring(1);

        if (!knownCommands.includes(command)) {
            // TODO: redirect to /help command
            await ctx.reply(
                // eslint-disable-next-line max-len
                `I'm sorry, I don't recognize the command "/${command}". Try using /help to see a list of available commands.`,
            );
            return;
        }

        return next();
    }

    return next();
}

const chatMiddlewares = { validateMessage };

export { chatMiddlewares };
