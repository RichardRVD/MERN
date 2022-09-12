const mongoose = require("mongoose");
const database = "product_manager";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Established a connection with database: ${database}`))
.catch(err => console.log("Error connecting to the database", err));