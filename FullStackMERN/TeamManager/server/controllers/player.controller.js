const Player = require("../models/player.model");

//Create Player
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
    .then( newPlayer => {res.json({results: newPlayer})})
    .catch((err) => res.status(400).json({err: err}))
}

//Find all Players
module.exports.findAllPlayers = (req, res) => {
    Player.find()
    .then((allPlayers) => {res.json({results: allPlayers})})
    .catch((err) => {res.json({err: err})})
}

//Find one Player
module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
    .then((player) => res.json({results: player}))
    .catch((err) => {res.json({err: err})})
}

//Update an Player
module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatePlayer) => {res.json({results: updatePlayer})})
    .catch((err) => res.status(400).json({err: err}))
}

//Delete an Player
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
    .then((deletedPlayer) => {res.json({results: deletedPlayer})})
}