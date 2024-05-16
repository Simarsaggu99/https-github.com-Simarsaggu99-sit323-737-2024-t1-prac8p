const express = require("express");
const app = express();
const port =3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes");

const logger = require("./logger")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
logger.log({
    level: "info",
    message: "server ready to start"
})

app.use(routes)
app.listen(port, () =>{
    console.log("listening to port:" + port)
})
app.use(bodyParser.json({ limit: "50mb" }));
mongoose
  .connect("mongodb+srv://s223426915:1nTwxHOdZeaRsLo0@cluster0.qvhxr3z.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("MongoDB Connected!")
  )
  .catch((err) => console.log(err));