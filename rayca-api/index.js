const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const projectRoute = require("./routes/project");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/projects", projectRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend listening on port 8000");
});
