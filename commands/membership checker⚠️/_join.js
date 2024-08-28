/*CMD
  command: /join
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

var channel = ["@predictionkingtechno", "@Aviatorking0708"]

HTTP.get({
  url:
    "https://iv.dream99.shop/api/membership_checker/?bot_token=" +
    bot.token +
    "&user_id=" +
    user.telegramid +
    "&channels=" +
    channel +
    "",
  success: "/check"
})

