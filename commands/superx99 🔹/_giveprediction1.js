/*CMD
  command: /giveprediction1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: superx99 🔹

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var result = JSON.parse(content)
var status = result.nxt

if (status == 0) Bot.sendMessage("Bot Is Not Giving Prediction ⚠️")
else
  Api.sendMessage({
    text: "*Next Prediction Is " + status + "X*",
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next Prediction 🔹", callback_data: "/prediction1" }]
      ]
    }
  })

