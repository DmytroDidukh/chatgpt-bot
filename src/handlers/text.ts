import { IContext } from 'typescript/interfaces';

import { openaiService } from 'services/index';

async function textHandler(ctx: IContext): Promise<void> {
    try {
        const chatMessage = await ctx.reply('...');

        const answer = await openaiService.getAnswer(ctx.message.text);

        await ctx.telegram.editMessageText(
            chatMessage.chat.id,
            chatMessage.message_id,
            null,
            answer,
        );
    } catch (e) {
        console.log('TEXT ERROR: ', e.message);
    }
}

export { textHandler };
