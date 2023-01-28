const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"pat",
    alias:["patt"],
    usage:`${prefa}pat`,
    desc:"Sends a gif of patting!",
    category:"Reactions",
    react:"😙",
start:async(client,m,{command,nsfw,prefix,text})=>{
  let assss = await axios.get ("https://api.waifu.pics/sfw/pat")
  var lol = '*You patted them😙*'
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.from,{video:bogif, caption:lol, gifPlayback:true },{quoted:m}).catch(err => {
    })
  }
}
