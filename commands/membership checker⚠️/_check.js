/*CMD
  command: /check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: membership checker⚠️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var result = JSON.parse(content)
var status = result.status
var isJoined = result.is_joined
var notJoinedChats = result.not_joined_chat

if (status === "true") {
  if (isJoined === true) {
    Bot.sendMessage(
      "Your Joined Both Channels You Get Free Jet X Prediction From Us ⛩️❤️‍🔥"
    )
    User.setProperty("verify", "true", "string")
    Bot.runCommand("/dasboard")
  } else {
    var notJoinedMes = "𝐘ᴏᴜ 𝐇ᴀᴠᴇɴ'ᴛ 𝐉ᴏɪɴᴇᴅ 𝐀ʟʟ 𝐂ʜᴀɴɴᴇʟs ⚠️\n"
    User.setProperty("verify", "false", "string")
    for (var i = 0; i < notJoinedChats.length; i++) {
      notJoinedMes += notJoinedChats[i] + "\n"
    }

    Api.sendMessage({
      text: notJoinedMes,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "Check Joined ✅", callback_data: "/join" }]]
      }
    })
  }
}

