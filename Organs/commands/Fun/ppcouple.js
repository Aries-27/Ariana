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
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg'
          ]
let girl = [
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg'
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
