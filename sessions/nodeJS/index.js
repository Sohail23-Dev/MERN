// import figlet from 'figlet';

// figlet("Hello Sohail", (err, data) => {
//   if (err) {
//     console.log('Something went wrong...');
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import http from "http";
import fs, { write } from "fs";

const PORT = 3011;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello From the first server");
  }
  if (req.url == "/about") {
    fs.writeFile("output.txt", "This is a new Demo", "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      
    });

    fs.readFile("output.txt", "utf-8", (err,data)=>{
        if(err){
          console.log(err)
        }
        else {
          res.end(data);
        }
      })
  }

  // console.log(`req.url ,req.method, req.body, req.statusCode`)
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
