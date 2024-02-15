require('dotenv').config({ path: 'config/.env' });
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

const startCommand = require('./src/commands/start');
startCommand(bot);

const statusCommand = require('./src/commands/status');
statusCommand(bot);

const catCommand = require('./src/commands/cat');
catCommand(bot);

// const askCommand = require('./src/commands/ask');
// askCommand(bot);

const helpCommand = require('./src/commands/help');
helpCommand(bot);

bot.launch();