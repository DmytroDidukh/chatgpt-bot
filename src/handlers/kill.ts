import { bot } from 'core/bot';

import type { IContext } from 'typescript/interfaces';

async function killHandler(ctx: IContext): Promise<void> {
    if (ctx.session.isAdmin) {
        await ctx.reply('Bot is shutting down.');
        bot.stop('stop command received');
    } else {
        await ctx.reply('You are not authorized to stop the bot.');
    }
}

export { killHandler };
