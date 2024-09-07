const redis = require("./redis")
const getImageryChannel = async function getImageryChannel(guildId) {
    const isGuildExist = await redis.hexists("imagery_channel", guildId)
    if(!isGuildExist) return null
    return await redis.hget("imagery_channel",guildId);
}
const getGuildMedia = async function getGuildMedia(guildId){
    const isExist = await getImageryChannel(guildId)
    if(!isExist) return null
    const gallery = await redis?.lrange(`imagery_gallery_${guildId}`, rangeStart, rangeEnd);
    if(!gallery) return []
    return gallery.map(media => JSON.parse(media))
}

module.exports.getImageryChannel = getImageryChannel
module.exports.getGuildMedia = getGuildMedia