const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

// 🔒 PRIVATE CHANNEL ID (bot admin hona recommended, par required nahi)
const PRIVATE_CHANNEL_ID = "-1001966501088"; // 👈 apna private channel ID

// 🔗 PRIVATE CHANNEL JOIN REQUEST LINK
const PRIVATE_JOIN_LINK = "https://t.me/+4EQYM9te-qI1YTFl";

// 🌐 WEB APP URL
const WEBAPP_URL = "https://scratchandearnai.page.gd/";

const bot = new TelegramBot(TOKEN, { polling: true });

// =========================
// /start COMMAND
// =========================
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
`🎁 Welcome To Scratch And Earn ~ Ai Refer & Earn 💸

🎁 Claim Your Gift Now !!!
Join The Channel Below And Hit Verify.

🤝 Referral Users: Your Entry is Auto-Recorded.
🔥 Stay Sharp. Stay Rewarded.`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📢 Join Channel",
              url: PRIVATE_JOIN_LINK
            }
          ],
          [
            {
              text: "✅ Verify & Continue",
              callback_data: "verify_private"
            }
          ]
        ]
      }
    }
  );
});

// =========================
// VERIFY BUTTON (REQUEST SENT = OK)
// =========================
bot.on("callback_query", async (query) => {
  if (query.data !== "verify_private") return;

  const chatId = query.message.chat.id;

  // 🚀 NO JOIN CHECK – REQUEST SENT IS ENOUGH
  bot.sendMessage(
    chatId,
    "🎉 Amazing !!! You Are Registered 🤝",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🎁 Scratch And Earn ~ Ai",
              web_app: {
                url: WEBAPP_URL
              }
            }
          ]
        ]
      }
    }
  );
});
