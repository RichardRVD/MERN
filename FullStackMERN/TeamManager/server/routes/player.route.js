const playerController = require("../controllers/player.controller")

module.exports = app => {
    // Create a new player
    app.post("/api/player/new", playerController.createPlayer);
    //Read all players
    app.get("/api/players", playerController.findAllPlayers);
    //Read on player
    app.get("/api/player/:id", playerController.findOnePlayer);
    //Update one player
    app.put("/api/player/update/:id", playerController.updatePlayer);
    //Delete one player
    app.delete("/api/player/delete/:id", playerController.deletePlayer);
}