/*CMD
  command: /prediction2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 82Dream 🕳️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 82dream
  group: 
CMD*/

HTTP.get({
    url: "https://82dream.online/predictaviset.php",
    success: "/giveprediction"
  })
