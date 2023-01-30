const axios = require('axios')
const fs=require("fs")
require ('../../../settings')
module.exports={
    name:"chat",
    alias:["dictionary"],
    usage:`${prefa}define [Your word]`,
    desc:"Gives you the meaning of your word ",
    category:"Fun",
    react:"📖",
    
    start:async(client,m,{command,prefix,args})=>{

if (!q) return m.reply(`Please give me text.`)
try {
rayyy = await axios.get(`http://api.brainshop.ai/get?bid=164782&key=fF16Q2FtvgIWMCvH&uid=[uid]&msg=!q`)
if (!rayyy) return m.reply(`❌ Error`)
const reply = 

${rayyy.data.cnt[0]

    
   client.sendMessage(m.from,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
  }
}
   
