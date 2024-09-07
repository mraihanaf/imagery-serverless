const express = require("express")
const serverless = require("serverless-http")
const cors = require("cors")
const { getGuildMedia } = require("./utils/imagery")

const app = express()

const router = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "*"
}))

router.get('/', (req, res) => {
    res.send("serverless function online")
})

router.get("/:guidId", async (req, res) => {
    const media = await getGuildMedia(req.params.guidId)
    if(!media) return res.sendStatus(404)
    res.send(media)
});


app.use("/.netlify/functions/api", router)

module.exports.handler = serverless(app)