import express from "express";
import fs from "fs";
const PORT = 3011;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.end("This is Hi from Home ");
});
app.post("/login", (req, res) => {
  fs.appendFile("newData.json", JSON.stringify(req.body), (err,data)=>{
    if(err) console.log(err);
    else res.end("Data Stored")
  })
  
});
app.put("/update", (req, res) => {
  fs.writeFile("newData.json", JSON.stringify(req.body), (err,data)=>{
    if(err) console.log(err);
    else res.end("Data Updated")
  })
});
app.delete("/remove", (req, res) => {
  fs.unlink("newData.json", (err,data)=>{
    if(err) console.log(err);
    else res.end("Data Removed")
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


  // fs.readFile("../../Project/todo-list/todo.html", "utf-8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.end(data);
  //   }
  // });