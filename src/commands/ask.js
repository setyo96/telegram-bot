// const {
//     getChat
//   } = require("./Helper/func");

// module.exports = (bot) => {
//     bot.command('ask', async (ctx) => {
//         // await ctx.reply("What is your question?", {
//         //     reply_markup: {
//         //         force_reply: true // this will ensure the user must reply to this message
//         //     }
//         // });
//         const text = ctx.message.text?.replace("/ask", "")?.trim().toLowerCase();
//         // const text = ctx.message.text;
//         console.log(text)
//         if (text) {
//         ctx.sendChatAction("typing");
    
//         const res = await getChat(text);
//         if (res) {
//             if (ctx.message.message_id) {
//             ctx.telegram.sendMessage(ctx.message.chat.id, `${res}`, {
//                 reply_to_message_id: ctx.message.message_id,
//             });
//             } else {
//             ctx.sendMessage(`${res}`);
//             }
//         }
//         } else {
//         if (ctx.message.message_id) {
//             ctx.telegram.sendMessage(
//             ctx.message.chat.id,
//             "Please ask anything after /ask",
//             {
//                 reply_to_message_id: ctx.message.message_id,
//             }
//             );
//         } else {
//             ctx.sendMessage("Please ask anything after /ask");
//         }
//         }
    
//         await checkAndSave(ctx);
//     });
// }