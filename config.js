import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['79940139737', '👑 Владелец 👑', true],
  ['79940074568', '💫 🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺 2 💫', true],
  ['51996089079', '💫 Mystic - Collaborator 3 💫', true],
  ['5218442286089', '💫 Mystic - Collaborator 4 💫', true],
  ['50246028932', '💫 Mystic - Collaborator 5 💫', true],
  ['5212412377467', '💫 Mystic - Collaborator 6 💫', true],
  ['5215517489568', '💫 Mystic - Rey Endymion 💫', false],
  ['59895555511', '💫 Mystic - Collaborator 8 💫', true],
  ['59175655964', '💫 Mystic - By Alba070503 💫', true],
  ['393518398856','💫 Mystic - Tester Fabri115💫', true],
  ['593968585283'],
  ['5492266466080'],
  ['5218442114446'],
  ['59894808483'],
  ['593980586516'], 
  ['595975740803'],  
  ['5492266613038'],
  ['50497150165'],
  ['51906662557'],
  ['573183650526'], 
  ['5217441298510'], 
  ['5217294888993'],
  ['595992611272']
];

global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

global.packname = 'Sticker';
global.author = '🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺';
global.wm = '🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺';
global.titulowm = '🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺';
global.titulowm2 = `🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺t`
global.igfg = '🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺';
global.wait = '*[ ⏳ ] Загрузка...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./src/menu_pt.png');
global.imagen8 = fs.readFileSync('./src/menu_fr.png')
global.imagen9 = fs.readFileSync('./src/menu_en.png')
global.imagen10 = fs.readFileSync('./src/menu_ru.png')

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nThe Mystic - Bot`;
global.gt = '🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺';
global.mysticbot = '🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺';
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.waitt = '*[ ⏳ ] Погрузка...*';
global.waittt = '*[ ⏳ ] Погрузка...*';
global.waitttt = '*[ ⏳ ] Погрузка...*';
global.nomorown = '79940139737';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Дата:*  ${moment.tz('America/Mexico_City').format('ДД/ММ/ГГ')}`;
global.bottime = `*[ ⏳ ] Час:* ${moment.tz('America/Mexico_City').format('ЧЧ:мм:сс')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
