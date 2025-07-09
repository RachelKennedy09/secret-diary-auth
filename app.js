// This file will:
//✅ Initialize the Express app
//✅ Load environment variables
//✅ Set up Passport and sessions
//✅ Load routes
//✅ Render views using EJS

//imports
import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import setupAuth from "./config/auth.js";
import routes from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config(); // loads environment variables
// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Set EJS as the view engine
app.set("view engine", "ejs"); // allows rendering HTML pages with EJS
app.set("views", path.join(__dirname, "views"));

//Static files
app.use(express.static("public"));

//Express session config
app.use(
  session({
    // stores login session in a cookie
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//Initialize passport and sessions
app.use(passport.initialize()); // boots up passport middleware
app.use(passport.session()); // enables persistent login sessions

//Apply passport strategy from config
setupAuth(passport);

//Use routes
app.use("/", routes); // connects to (index.js)

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
