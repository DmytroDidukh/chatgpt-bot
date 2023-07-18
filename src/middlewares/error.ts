import { IContext } from 'typescript/interfaces';

async function catchBotError(error, ctx: IContext): Promise<void> {
    console.log(`Encountered an error for ${ctx.updateType}`, error.message);

    await ctx.reply(`ERROR OCCURRED: ${error.message}. PLEASE, TRY AGAIN`);
}

const errorMiddlewares = { catchBotError };

export { errorMiddlewares };
