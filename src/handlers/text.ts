import { IContext } from 'typescript/interfaces';

import { openaiService } from 'services/index';

async function textHandler(ctx: IContext): Promise<void> {
    try {
        const answer = await openaiService.getAnswer(ctx.message.text);
        console.log('ANSWER: ', answer);
        await ctx.reply(answer);
    } catch (e) {
        console.log('TEXT ERROR: ', e.message);
    }
}

export { textHandler };
