//require mongoose "import"
const mongoose = require("mongoose");

const database = "superheroes2022";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Database connection established: ${database}`))
.catch((err) => console.log("Error establishing connection: ", err));