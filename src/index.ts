import { Context, Telegraf, session } from "telegraf";
import { message } from "telegraf/filters";
import config from 'config/config';
import { authMiddleware } from 'middlewares/auth';
import { IContext } from 'typescript/interfaces';

const bot = new Telegraf<IContext>(config.BOT_TOKEN);

bot.use(session())
bot.use(authMiddleware.isAuthenticated)

bot.on(message("text"), async (ctx: Context) => {
  await ctx.reply("Hello World!");
});

bot.command("start", async (ctx: Context) => {
  await ctx.reply("STARTED!");
});

// TODO: add error handling
function startBot() {
  console.log("BOT STARTED");

  bot.launch();
}

startBot()

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"))
