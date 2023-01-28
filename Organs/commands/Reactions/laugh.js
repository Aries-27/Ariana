const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"laugh",
    alias:["laughed"],
    usage:`${prefa}laugh`,
    desc:"Sends a gif of laughing!",
    category:"Reactions",
    react:"🤣",
start:async(client,m,{command,nsfw,prefix,text})=>{
  let assss = await axios.get ("https://api.waifu.pics/sfw/laugh")
  var lol = '*You laughed at them🤣*'
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.from,{video:bogif, caption:lol, gifPlayback:true },{quoted:m}).catch(err => {
    })
  }
}
