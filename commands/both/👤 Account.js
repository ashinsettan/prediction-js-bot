/*CMD
  command: 👤 Account
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

var verification = Bot.getProperty("activation")

if(verification==user.telegramid){
Api.sendPhoto({
  photo: "https://t.me/technouploadcentre82928/2", // it is a picture!
  caption: "\t\tAccount Details\n\n» Game Balance: 0₹\n\n » Bot Balance: 0₹\n\n» reffers: 0",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "👨‍👨‍👧‍👧 Reffer ", callback_data: "/refferal"}
      ]
    ]
  }
});

}
else
{
Bot.sendMessage("Your Not Verified User ⚠️");
}
