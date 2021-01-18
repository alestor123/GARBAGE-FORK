var axios = require('axios')
module.exports = async code => {
if(!code) throw Error('Code Not Found')
var data = await axios.get(`https://http.cat/${code}`,  {responseType: 'arraybuffer'})
return {
    buffer:data.data,
    url:`https://http.cat/${code}`
}
}