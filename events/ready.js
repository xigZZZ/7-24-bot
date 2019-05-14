const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`BOT: Aktif, Komutlar yüklendi!`);
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame('x.yardım');
}
