import { bot } from '././core';
import queryHandler from './handler/queryHandler'
import botCommand from './handler/botCommand'
import msgHandler from './handler/msgHandler'

// setting up the message handler
bot.on('message', (message) => { msgHandler.process(message) });
// set up the asynchronous callback handler
bot.on('callback_query', (query) => { queryHandler.process(query).catch(err => console.error('callback_query error:', err)) });
// setting error handler
bot.on('polling_error', (error) => { console.error('polling_error:', error); });

console.log("Server is running...");

if (process.env.BOT_ENV == 'test') {
    setTimeout( () => {
        console.log('Exiting automatically...');
        process.exit(0);
    }, 3000)
}