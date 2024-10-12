const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT} `);
});
