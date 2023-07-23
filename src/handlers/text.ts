import { IContext } from 'typescript/interfaces';

import { openaiService } from 'services/index';

async function textHandler(ctx: IContext): Promise<void> {
    try {
        // TODO: setup a thinking flow
        await ctx.reply("Hang on! I'm thinking...");

        const answer = await openaiService.getAnswer(ctx.message.text);
        await ctx.reply(answer);
    } catch (e) {
        console.log('TEXT ERROR: ', e.message);
    }
}

export { textHandler };
