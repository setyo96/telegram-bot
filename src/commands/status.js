module.exports = (bot) => {
    bot.action('status', (ctx) => {
        ctx.reply("Hi! I'm now online");
    })
}