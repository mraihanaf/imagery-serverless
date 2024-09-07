const { Redis } = require("ioredis");
const { config } = require("dotenv");
config();
const redisClient= new Redis(process.env.REDIS_URI);
redisClient.on("ready", () => {
    console.log("Connected to the redis database.")
})
module.exports =  redisClient