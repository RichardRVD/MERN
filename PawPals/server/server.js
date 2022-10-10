const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./config/mongoose.config");
const petFinderApp = require("./routes/pet.route");
petFinderApp(app);
app.listen(port, () => console.log(`Listening on the PetFinder server port: ${port}`));