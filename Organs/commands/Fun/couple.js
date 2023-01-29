let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Miku.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m })
         Miku.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m })
