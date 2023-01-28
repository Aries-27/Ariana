const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"kiss",
    alias:["kissed"],
    usage:`${prefa}kiss`,
    desc:"Sends a gif of kissing!",
    category:"Reactions",
    react:"😘",
start:async(client,m,{command,nsfw,prefix,text})=>{
  let assss = await axios.get ("https://api.waifu.pics/sfw/kiss")
  var lol = '*You kissed them*'
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.from,{video:bogif, caption:lol, gifPlayback:true },{quoted:m}).catch(err => {
    })
  }
}
