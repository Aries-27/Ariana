require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "pikachu",
    alias: ["pika"],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "✅",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg',
            'https://i.ibb.co/x78n9mC/20230127-141609.jpg'
          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `✨ _*PIKACHU*_  ✨\n\n🍀 *Description:* ${nezuko.data.description}\n\n 📎 *Repo Link:* ${nezuko.data.html_url} \n\n 🌠 *Total Star:* ${nezuko.data.stargazers_count}\n\n 💕 *Total Forks:* ${nezuko.data.forks} \n\n 💁🏻‍♂️ *Tutorial:* https://www.youtube.com/watch?v=KqgyScOlvV8 \n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
