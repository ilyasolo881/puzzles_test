const express = require("express");
const open = require("open").default;
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);

  open(`http://localhost:${PORT}`);
});
