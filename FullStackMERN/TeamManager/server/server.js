const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./config/mongoose.config");
const playerapp = require("./routes/player.route");
playerapp(app);
app.listen(port, () => console.log(`Listening on the PLAYER server port: ${port}`));