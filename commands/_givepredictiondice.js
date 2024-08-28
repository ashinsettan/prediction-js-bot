/*CMD
  command: /givepredictiondice
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

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
var status = result[0].nxt
var period = result[0].period

Api.sendMessage({
  text:
    "*\t\tPlatForm: Superx99\n\t\tGame: 1 Min Dice 🎲\n\nPeriod: " +
    period +
    "☢️\nLess Than: " +
    status +
    "*",
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "Next Prediction 🔹", callback_data: "/diceprediction#" }]
    ]
  }
})
