import { session, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

import config from 'config/config';
import { startHandler, textHandler } from 'handlers/index';
import { authMiddlewares, errorMiddlewares } from 'middlewares/index';

import type { IContext } from 'typescript/interfaces';

const bot = new Telegraf<IContext>(config.BOT_TOKEN);

// MIDDLEWARES
bot.use(session());
bot.use(authMiddlewares.isAuthenticated);

// HANDLERS
bot.on(message('text'), textHandler);
bot.command('start', startHandler);

// ERROR HANDLING
bot.catch(errorMiddlewares.catchBotError);

function launchBot() {
    console.log('BOT STARTED');

    bot.launch();
}

launchBot();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
