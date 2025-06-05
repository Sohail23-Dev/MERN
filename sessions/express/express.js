import express from "express";
import fs from "fs";
const PORT = 3011;
const app = express();
app.get("/", (req, res) => {
  res.end("This is Hi from Home ");
});
app.get("/about", (req, res) => {
  fs.readFile("../../Project/todo-list/todo.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});
app.get("/contact", (req, res) => {
  res.end("This is Hi from Contact ");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
