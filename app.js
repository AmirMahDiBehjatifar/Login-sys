const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const AllRouters = require("./router/general");
const path = require("path")
const flash = require("express-flash")
const session = require("express-session");
const { passportInit } = require("./passport.config");
const passport = require("passport");
const { ErrorHandler, NotFoundErr } = require("./utils/error-handling");
require("./config/mongo.config");
const app = express();
const PORT = 3000;


// SETUP APP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
// setuping view-engine 
app.use(expressLayouts);
app.set("view engine", 'ejs');
app.set('layout', './layout/main.ejs');

// set up session 
app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
}))
// SETUP PASSPORT
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use(AllRouters(passport));
app.use(NotFoundErr)
app.use(ErrorHandler);
app.listen(PORT, () => {
    console.log(`Server is run on PORT ${PORT}`);
})