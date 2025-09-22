const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT} `);
});
