module.exports = (bot) => {
    bot.command('start', ctx => {
        let message = `Hallo ${ctx.chat.first_name || ctx.chat.username}..
We are here to help you in some repetitive tasks.`
        ctx.reply(message)
        bot.telegram.sendMessage(ctx.chat.id, `Please select the following menu: `,
        {
            reply_markup:{
                inline_keyboard: [
                    [
                        {text: "Status", callback_data: 'status'}
                    ],
                    // [
                    //     {text: "Want to Ask ?", callback_data: 'ask'}
                    // ],
                    [
                        {text: "Cat Image", callback_data: 'cat'}
                    ],
                    [
                        {text: "Help", callback_data: 'help'}
                    ]
                ]
            }
        })
        
    })
}