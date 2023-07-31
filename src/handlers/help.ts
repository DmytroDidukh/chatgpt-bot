import { Context } from 'telegraf';

import { chatService } from 'services/chat';

async function helpHandler(ctx: Context): Promise<void> {
    const message = chatService.generateHelpMessage();

    await ctx.reply(message);
}

export { helpHandler };
