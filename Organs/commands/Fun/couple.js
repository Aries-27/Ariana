
const axios = require('axios')
module.exports = {
    name: "couple",
    alias: ["pc"],
    usage: `${prefa}ppcouple`,
    desc: "Will send you matching couple dp",
    react: "✅",
    
    category: "Fun",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         await client.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m })
         await client.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m })
