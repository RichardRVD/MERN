const authorController = require("../controllers/author.controller")

module.exports = app => {
    // Create a new Author
    app.post("/api/author/new", authorController.createAuthor);
    //Read all Authors
    app.get("/api/authors", authorController.findAllAuthors);
    //Read on Author
    app.get("/api/author/:id", authorController.findOneAuthor);
    //Update one Author
    app.put("/api/author/update/:id", authorController.updateAuthor);
    //Delete one Author
    app.delete("/api/author/delete/:id", authorController.deleteAuthor);
}