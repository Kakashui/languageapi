const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.send("OK");
});
app.get("/api/localize/*", (req, res) => {
    res.sendFile(path.join(publicPath, `./api/localize/${req.params[0]}.json`));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API Port: ${port}`);
});
