const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
require("dotenv").config();
const mongostring = process.env.DATABASE_URL;
mongoose.connect(mongostring);
const database = mongoose.connection;

database.on("error", (error) => console.log(error));

database.once("connected", () => console.log("database connected"));

const app = express();
app.use(express.json());
app.use("/", routes);
app.listen(3000, () => console.log("your port is running on 3000"));
