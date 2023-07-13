import { Context } from "telegraf";

async function startHandler(ctx: Context): Promise<void> {
  try {
    await ctx.reply("Let's chat!");
  } catch (e) {
    console.log('START COMMAND ERROR: ', e.message);
  }
}

export { startHandler };
