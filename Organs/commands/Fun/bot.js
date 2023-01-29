const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"chat",
    alias:["bot,b"],
    cool: 20,
    usage:`${prefa}chat [Any text or sentence]`,
    desc:"Chat with bot.",
    category:"Fun",
    react:"✅",

    start:async(client,m,{command,prefix,text,args})=>{
if (!text)  return m.reply(`Please provide me some text`)
if (ggle == "none" || null)  return m.reply(`*❤️ Ask owner to give me an API key*`)
await axios.get(`http://api.brainshop.ai/get?bid=164782&key=fF16Q2FtvgIWMCvH&uid=[uid]&msg=${text}`)
.then((res) => {
    if (res.status !== 200) return void m.reply(`🔍 Error: ${res.status}`);
    let result = ``;
    for (const item of res.data?.items) {
        result += `${text}`;
    }
img = "https://i.ibb.co/26d2K4d/kindpng-209846.png"
 client.sendMessage(m.from,{image:{url:img},caption:result},{quoted:m})
})
.catch((err) => {
  m.reply(`🔍 Error: ${err}`);
});
},
}
