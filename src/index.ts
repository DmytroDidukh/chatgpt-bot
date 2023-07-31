import { bot, launchBot } from 'core/bot';

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

launchBot();
