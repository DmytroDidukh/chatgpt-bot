import { Telegraf } from 'telegraf';

import type { IContext } from 'typescript/interfaces';

async function skipPendingUpdates(bot: Telegraf<IContext>): Promise<void> {
    try {
        // Get all pending updates
        const updates = await bot.telegram.getUpdates(null, null, null, null);

        if (updates.length > 0) {
            // Get the latest update_id
            const lastUpdateId = updates[updates.length - 1].update_id;

            // Mark updates as confirmed up to and including this update_id
            await bot.telegram.getUpdates(null, null, lastUpdateId, null);
        }
    } catch (e) {
        console.log('Error while skipping pending updates: ', e.message);
    }
}

const botService = {
    skipPendingUpdates,
};

export { botService };
