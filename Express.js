const express = require('express')
const app = express()
const port = 3000
app.get("/", (req, res) => {
    res.send("Hello")
})
app.get("/exabite", (req, res) => {
    data = {
        user: {
            name: "Akash",
            username: "digiblade"
        }
    }
    res.send(data)
})
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})