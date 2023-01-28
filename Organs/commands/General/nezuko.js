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

var rr = `✨ _*PIKACHU*_  ✨\n\n🍀 *Description:* Hii! I'm Pikachu a whatsapp bot, Developed and Reverse engineered by Ronen to make your whatsapp more enjoyable and to do everything possible on whatsapp.

💜 *Our official support group* : https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO
🐨 *My YouTube* : https://youtube.com/c/RonenAMVs
📱 *My Instagram* : https://instagram.com/lollenn_?igshid=YmMyMTA2M2Y=
🔖 *Website* : https://surveyheart.com/form/63d40d194de54153e33a00e0


*About Ronen💜*

*🎗️Name* : Ronen Singha
*🧧Age* : Immortal heheh✨
*♦️Country* : India🇮🇳
*🎯Gender* : Male👨‍🦱

*🚩Proud to be a Manipuri*
*🎏Hobbies* : Coding, Video Editing, Workout 💪, Love Watching Animes and Kdramas\n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
