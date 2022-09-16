const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Name of player is required!"],
    minLength: [3, "Name must be at least 3 characters long."]
    },
    position: {
        type: String
    },
    gameOneStatus: {
        type: String,
        default: "undecided",
        enum: [
            "undecided",
            "playing",
            "not playing"
        ]
    },
    gameTwoStatus: {
        type: String,
        default: "undecided",
        enum: [
            "undecided",
            "playing",
            "not playing"
        ]
    },
    gameThreeStatus: {
        type: String,
        default: "undecided",
        enum: [
            "undecided",
            "playing",
            "not playing"
        ]
    }
    // games: {
    //     gameOne: String,
    //     gameTwo: String,
    //     gameThree: String
    // }
});
const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;