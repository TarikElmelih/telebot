const { Telegraf } = require("telegraf");
const TOKEN = "";
const bot = new Telegraf(TOKEN);

const web_link = "https://tarikelmelih.github.io/telebot/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
