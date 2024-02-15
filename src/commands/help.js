module.exports = (bot) => {
    bot.action('help', ctx => {
        let message = `
We are here to help you in some repetitive tasks.
Please contact team if you aren't authorized
*Start* - start the bot
*Status* - check bot online status
*Random Cat* - get random cat image
*Help* - command reference
`;
        ctx.reply(message, { parse_mode: "markdown" });
    })
}