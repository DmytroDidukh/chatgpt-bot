import { Telegraf } from 'telegraf';

import type { IContext } from 'typescript/interfaces';

async function skipPendingUpdates(bot: Telegraf<IContext>): Promise<void> {
    // Get all pending updates
    const updates = await bot.telegram.getUpdates(null, null, null, null);

    console.log(bot);

    if (updates.length > 0) {
        // Get the latest update_id
        const lastUpdateId = updates[updates.length - 1].update_id;

        // Mark updates as confirmed up to and including this update_id
        await bot.telegram.getUpdates(null, null, lastUpdateId, null);
    }
}

const botService = {
    skipPendingUpdates,
};

export { botService };
