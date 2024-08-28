/*CMD
  command: /prediction1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: superx99 🔹

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: skylottery
  group: 
CMD*/

HTTP.get({
  url: "https://skylottery.online/predictaviset.php",
  success: "/giveprediction1"
})

