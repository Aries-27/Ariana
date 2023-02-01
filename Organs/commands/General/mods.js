
require ('../../../settings')
module.exports={
    name:"mods",
    alias:["mod,owner,creator"],
    usage:`${prefa}mods`,
    desc:"shows mods list",
    category:"General",
    react:"✅",

    start:async(client,m,{})=>{
        const mod= owner
        let mo=`
*🎉 Pikachu Mods 🎉*\n`
for(let i=0;i<mod.length;i++){
    const um= await client.username(mod[i]+'@s.whatsapp.net')
    mo+=`\n✨${i+1}\n*👤 Name:* ${um}\n*📱 Contact:* http://wa.me/+${mod[i].split("@")[0]}\n`
}
await  client.sendMessage(m.from,{image:{url:'https://i.ibb.co/4djfcv6/IMG-20230127-135516.jpg'},caption:mo},{quoted:m})  
    }
}
