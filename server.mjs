import express from "express";
import cors from "cors";
import path from "path";
const __dirname = path.resolve();
const app = express();
// app.use(cors());
// 192.168.0.102:3000
app.get("/weather/:cityName", (req, res) => {
  let weatherData = {
    karachi: {
      name: "karachi",
      temp: 30,
      humidity: 56,
      wind: 8,
      visibility: 5,
    },
    london: {
      name: "london",
      temp: 5,
      humidity: 56,
      wind: 6,
      visibility: 2,
    },
  };
  const userInputCityName = req.params.cityName.toLowerCase();
  const dataSend = weatherData[userInputCityName];
  if (dataSend) {
    res.send(dataSend);
  } else {
    res.status(404).send();
  }
});
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
