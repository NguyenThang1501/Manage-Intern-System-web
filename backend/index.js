// Tệp index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const accountRoute = require("./routes/accountRouter");
const aspirationRoute = require("./routes/aspirationRouter");
const businessRoute = require("./routes/businessRouter");
const newsRoute = require("./routes/newsRouter");
const positionRoute = require("./routes/positionRouter");
const profileRoute = require("./routes/profileRouter");
const reportRoute = require("./routes/reportRouter");
const registerTimeRoute = require("./routes/registerTime");
const teacherRoute = require("./routes/teacherRouter")
const resetRoute = require("./routes/resetRouter")
const app = express();
dotenv.config();

mongoose.connect('mongodb://0.0.0.0:27017/web')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.use("/", accountRoute);
app.use("/", aspirationRoute);
app.use("/", businessRoute);
app.use("/", newsRoute);
app.use("/", positionRoute);
app.use("/", profileRoute);
app.use("/", reportRoute);
app.use("/", registerTimeRoute);
app.use("/", teacherRoute);
app.use("/", resetRoute);


app.listen(8000, () => {
    console.log("Server is running");
});
