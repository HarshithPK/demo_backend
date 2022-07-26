const express = require("express");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// ------- Data base Connection --------

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/workPermitDB", {
    useNewUrlParser: true,
});

// -------- Import Routes ----------------

const workPermitRoute = require("./routes/workPermitRoute");

// ---- Use Routes --------------------

app.use("/", workPermitRoute);

// ------ Server ------------------------

app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
