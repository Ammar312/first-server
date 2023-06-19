import express from "express";
const app = express();

// 192.168.0.102:3000
app.get("/", (req, res) => {
  res.send("Hello World!" + " Ammar Here!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
