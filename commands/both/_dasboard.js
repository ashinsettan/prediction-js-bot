/*CMD
  command: /dasboard
  help: 
  need_reply: false
  auto_retry_time: 
  folder: both

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

  var button = "👤 Account,Predictions ⛩️\nWithdraw 💲\nJet x,🈁 More Menu"
  Bot.sendKeyboard(
    button,
    "Hᴇʏᴀ! " +
      user.first_name +
      " " +
      user.last_name +
      " Welcome to our " +
      bot.name +
      " ❤️"
  )

