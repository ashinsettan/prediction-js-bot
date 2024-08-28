/*CMD
  command: /activation
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *☣️ Enter Bot Activation Code :*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var msg = "*Bot Activation Token Is invalid ⚠️*"

if (message == "278navns738") {
  Bot.setProperty(
      "activation",
       chat.chatid,
      "string"
  )

  msg = "Activation Successful 🔹"
  Bot.runCommand("/dasboard");
}

Bot.sendMessage(msg)
