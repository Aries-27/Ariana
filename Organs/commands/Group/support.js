module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/rBGm1p-7uNQAAAPo/pikachu-happy.mp4',
                   'https://media.tenor.com/rBGm1p-7uNQAAAPo/pikachu-happy.mp4',
                   'https://media.tenor.com/rBGm1p-7uNQAAAPo/pikachu-happy.mp4',
                   'https://media.tenor.com/qK8IPos5MZkAAAPo/pikachu-pikachucute.mp4',
                   'https://media.tenor.com/qK8IPos5MZkAAAPo/pikachu-pikachucute.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://i.ibb.co/Q6jyqNv/20230127-171350.jpg"
        
                         
const lemo = `
*━『 Support Group Links 』━*

*1) [ PIKACHU SUPPORT GROUP ] :*
https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO

*2) [ Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ ₵𝖆𝖘𝖎𝖓ø ] 🎰 :*
https://chat.whatsapp.com/J1WfFPXtmzZGXFB59I0ETq

*3) [ Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ N̸s̸f̸w̸ ] :*
https://chat.whatsapp.com/J1WfFPXtmzZGXFB59I0ETq
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:eternitylogogg},caption:lemo},{quoted:m})  
    }
}
