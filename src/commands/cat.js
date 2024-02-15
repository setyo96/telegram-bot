const axios = require('axios');

module.exports = (bot) => {
    bot.action('cat', async (ctx) => {
        let res = await axios.get('https://api.thecatapi.com/v1/images/search')
        ctx.replyWithPhoto(res.data[0].url)
    })
}