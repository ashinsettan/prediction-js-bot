/*CMD
  command: /start
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

switch (params) {
  case "82Dream-Jetx-Prediction":
    Bot.runCommand("/prediction2")
    break;
  case "Dashboard-techno":
    Bot.runCommand("/dasboard")
    break;
  case "Dashboard-Dice-Game":
    Bot.runCommand("/diceprediction#")
    break;
  case "name_4":
    Bot.runCommand("Command_4")
    break;

  default:
    var button = [
  {
    title: "⛩️ Prediction King [ 𝐑ᴇᴅɪʀᴇᴄᴛ ] 😊",
    url: "https://t.me/predictionkingtechno"
  },
  {
    title: "🛩️ Aviator Master [ 𝐑ᴇᴅɪʀᴇᴄᴛ ] 😊",
    url: "https://t.me/Aviatorking0708"
  },
  { title: "𝐂ʜᴇᴄᴋ 𝐉ᴏɪɴᴇᴅ ✅", command: "/dasboard" }
]

Bot.sendInlineKeyboard(
  button,
  `Hey! ` +
    user.first_name +
    `. \n\n» Join Both Channels\n\n» After Joined Click Check Joined\n\n» Then You can use our bot Guys ⚠️❤️‍🔥`
)
}

