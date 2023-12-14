const express = require("express");

const bodyParser = require("body-parser");

const { getAllData, createData, updateData, deleteData } = require("./service");

const app = express();
app.use(bodyParser.json());

app.get("/hi", (req, res) => {
  const data = getAllData();
  res.send(data);
});

app.put("/:id", (req, res) => {
  const { label, category, priority } = req.body;
  const { id } = req.params;
  const data = updateData(id, label, category, priority);
  res.send(data);
});
// app.post("", (req, res) => {
//   const { label, category, priority } = req.body;
//   const data = createData(label, category, priority);
//   res.send(data);
// });

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const del = deleteData(id);
  res.send(del);
});

app.listen(3000, () => {
  console.log("server running");
});
