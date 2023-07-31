import { Telegraf } from 'telegraf';
import { session } from 'telegraf';
import { message } from 'telegraf/filters';

import config from 'config/config';
import { BOT_COMMANDS } from 'consts/chat';
import { helpHandler, killHandler, startHandler, textHandler } from 'handlers/index';
import { authMiddlewares, chatMiddlewares } from 'middlewares/index';

import type { IContext } from 'typescript/interfaces';

const bot = new Telegraf<IContext>(config.BOT_TOKEN);

// MIDDLEWARES
bot.use(session());
bot.use(authMiddlewares.isAuthenticated);
bot.use(chatMiddlewares.validateMessage);

// HANDLERS
bot.command(BOT_COMMANDS.START, startHandler);
bot.command(BOT_COMMANDS.KILL, killHandler);
bot.command(BOT_COMMANDS.HELP, helpHandler);

bot.on(message('text'), textHandler);

// ERROR HANDLING
bot.catch(chatMiddlewares.catchError);

function launchBot() {
    console.log('BOT LAUNCHED');
    bot.launch();
}

export { bot, launchBot };
