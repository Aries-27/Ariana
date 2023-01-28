require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "truth",
    alias: ["t"],
    usage: `${prefa}repo`,
    desc: "Will send you a truth",
    react: "✅",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            "https://i.ibb.co/x78n9mC/20230127-141609.jpg",
    ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

let rr = "Test",
"test1",
    "test2",
let rae = rr[Math.floor(Math.random() * rr.length)]
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
