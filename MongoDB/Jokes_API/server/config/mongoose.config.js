const mongoose = require("mongoose");
const database = "jokeSchema";
mongoose.connect(`mongodb://localhost/${database}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Welcome to Star Destroyer ${database}, please dont disturb the Emperor as he is aboard.`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));