import http from "http"

const PORT = 3002;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello From the first server");
  }
  if (req.url == "/about") {
    console.log("this is About Page")
  }
})   

server.listen(PORT, ()=>{
    console.log(`Listening to PORT : ${PORT}`)
})