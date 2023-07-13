import { Context } from 'telegraf';

async function textHandler(ctx: Context): Promise<void> {
    try {
        await ctx.reply('Hello World!');
    } catch (e) {
        console.log('TEXT ERROR: ', e.message);
    }
}

export { textHandler };
