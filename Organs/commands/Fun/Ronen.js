require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "Ronen",
    alias: ["ronen"],
    usage: `ronen`,
    desc: "Will send you matching couple dp",
    react: "✅",
    
    category: "Fun",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
      let { Ronen } = require('Assets/Ronen')
    
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let r = Ronen[Math.floor(Math.random() * Ronen.length)]


var rr = `*test*`
var rg = `*Test*`
await client.sendMessage(m.from,{audio:{r}, caption:rr},{quoted:m})
      await client.sendMessage(m.from,{audio:{r}, caption:rg},{quoted:m})
    }
}
