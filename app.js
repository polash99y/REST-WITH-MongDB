const express = require("express");
const cors = require("cors");
const userRouter = require('./routes/user.route')
require("./config/db")

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users",userRouter);

// api/users :GET
// api/users/:id :GET
// api/users/ :POST
// api/users/:id :PATCT
// api/users/:id :DELETE

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found
app.use((req, res,next) => {
  res.status(404).json({
    message: 'route not found'
  })
});



//handleing sarver error
app.use((err,req, res,next) => {
  res.status(500).json({
    message: 'something broke'
  })
});

module.exports = app;
