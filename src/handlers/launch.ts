import type { IContext } from 'typescript/interfaces';

async function launchHandler(ctx: IContext): Promise<void> {
    if (ctx.session.isAdmin) {
        // TODO: Implement launchHandler (redeploy bot or something)
        await ctx.reply('Coming soon...');
    } else {
        await ctx.reply('You are not authorized to launch the bot.');
    }
}

export { launchHandler };
