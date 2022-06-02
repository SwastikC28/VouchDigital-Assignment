// Requiring Packages
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const ErrorHandler = require("./middlewares/error");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

// Load Environment Variables
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();

// Initializing App
const app = express();
app.use(express.json());

// Cross Origin Domain
app.use(cors());

// Using Middlewares
app.use(mongoSanitize());
app.use(ErrorHandler);
app.use(xss());

// Requiring Routes
const user = require("./routes/user");
const address = require("./routes/address");
const auth = require("./routes/auth");

// Listening to The PORT
const PORT = process.env.PORT || 3000;

// Use Routers
app.use("/user", user);
app.use("/address", address);
app.use("/auth", auth);

app.get("/", function (req, res) {
  res.send("API Started");
});

app.listen(PORT, function () {
  console.log(`Server Started at PORT ${PORT}`.blue);
});
