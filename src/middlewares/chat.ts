import { BOT_COMMANDS } from 'consts/chat';
import { chatService } from 'services/chat';

import type { IContext } from 'typescript/interfaces';

async function validateMessage(ctx: IContext, next: () => Promise<void>): Promise<void> {
    const text = ctx.message.text;

    if (text.startsWith('/')) {
        const command = text.substring(1);
        const isValidCommand = chatService.checkCommand(command);

        if (!isValidCommand) {
            await ctx.reply(
                `Unrecognized command: "/${command}". Use /${BOT_COMMANDS.HELP} for a list of available commands.`,
            );
            return;
        }
        return next();
    }

    return next();
}

async function catchError(error, ctx: IContext): Promise<void> {
    console.log(`Encountered an error for ${ctx.updateType}`, error.message);

    await ctx.reply(`ERROR OCCURRED: ${error.message}. PLEASE, TRY AGAIN`);
}

const chatMiddlewares = { validateMessage, catchError };

export { chatMiddlewares };
