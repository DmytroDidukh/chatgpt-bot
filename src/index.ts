import express from 'express';
import { session, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

import config from 'config/config';
import { BOT_COMMANDS } from 'consts/chat';
import { helpHandler, startHandler, textHandler } from 'handlers/index';
import { authMiddlewares, chatMiddlewares } from 'middlewares/index';

import type { IContext } from 'typescript/interfaces';

const bot = new Telegraf<IContext>(config.BOT_TOKEN);

// MIDDLEWARES
bot.use(session());
bot.use(authMiddlewares.isAuthenticated);
bot.use(chatMiddlewares.validateMessage);

// HANDLERS
bot.command(BOT_COMMANDS.START, startHandler);
bot.command(BOT_COMMANDS.HELP, helpHandler);

bot.on(message('text'), textHandler);

// ERROR HANDLING
bot.catch(chatMiddlewares.catchError);

// Express app to keep Heroku dyno awake
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

function launchBot() {
    console.log('BOT STARTED');
    bot.launch();
}

launchBot();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
