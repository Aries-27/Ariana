require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "ppcouple",
    alias: ["pp"],
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
let boy = [
            "https://api.duniagames.co.id/api/content/upload/file/10957572661649921334.jpg",
"https://api.duniagames.co.id/api/content/upload/file/56642671649921333.jpg",
"https://api.duniagames.co.id/api/content/upload/file/19624160771649921333.jpg",
"https://api.duniagames.co.id/api/content/upload/file/8613527361649921333.jpg",
"https://api.duniagames.co.id/api/content/upload/file/21344690631649921563.jpg",
"https://api.duniagames.co.id/api/content/upload/file/20594223911649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/5817862851649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/11811382281649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/5513583131649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/15882423851649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/21369026671649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/20491938461649922020.jpg",
"https://i.pinimg.com/736x/8c/6d/ea/8c6deaaa8f15b929d45a81fd6cb6d93e.jpg"
          ]
let girl = [
            "https://api.duniagames.co.id/api/content/upload/file/12759900281649921334.jpg",
"https://api.duniagames.co.id/api/content/upload/file/3933469231649921333.jpg",
"https://api.duniagames.co.id/api/content/upload/file/10113148761649921333.jpg",
"https://api.duniagames.co.id/api/content/upload/file/20468348731649921333.jpg",
"https://api.duniagames.co.id/api/content/upload/file/20833991431649921563.jpg",
"https://api.duniagames.co.id/api/content/upload/file/2815001481649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/17592328611649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/11002852841649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/11508194531649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/8805364111649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/598305931649921705.jpg",
"https://api.duniagames.co.id/api/content/upload/file/20469893791649922020.jpg",
"https://i.ibb.co/MBqSj6q/6ffa25d2-5238-4542-8802-bac27a9c5857.jpg"
          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let b = boy[Math.floor(Math.random() * boy.length)]
let g = girl[Math.floor(Math.random() * girl.length)]

var rr = `*For Him💖*`
var rg = `*For Her💖*`
await client.sendMessage(m.from,{image:{url:b}, caption:rr},{quoted:m})
      await client.sendMessage(m.from,{image:{url:g}, caption:rg},{quoted:m})
    }
}
