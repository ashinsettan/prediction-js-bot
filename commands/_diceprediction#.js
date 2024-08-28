/*CMD
  command: /diceprediction#
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

HTTP.get({
    url: "https://superx99.online/diceprediction.php",
    success: "/givepredictiondice"
  })
