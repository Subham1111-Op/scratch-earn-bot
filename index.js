const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
    "Welcome To Scratch And Earn 💸",
    {
      reply_markup: {
        inline_keyboard: [[{
          text: "🎁 Open Scratch App",
          web_app: {
            url: "https://scratchandearnai.page.gd"
          }
        }]]
      }
    }
  );
});