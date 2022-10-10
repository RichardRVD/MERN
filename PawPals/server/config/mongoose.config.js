const mongoose = require("mongoose");
const database = "petFinder";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Database connection established: ${database}`))
.catch((err) => console.log("Error connecting to database", err));