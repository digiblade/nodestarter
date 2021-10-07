const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    switch (req.url) {
        case "/":
            let a = fs.readFileSync("./view/index.html")
            res.end(a.toString());
            break;
        case "/about":
            res.end("<h1>about</h1>");
            break;

        case "/exam":
            res.end("<h1>Exam</h1>");
            break;

        default:
            res.end("<h1>Hello</h1>")
            break;

    }
    // if (req.url == "/about") {
    //     res.end("<h1>about</h1>");
    // } else {
    //     res.end(`<h1>Hello i am akash</h1> ${req.url}`)
    // }

})
server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})