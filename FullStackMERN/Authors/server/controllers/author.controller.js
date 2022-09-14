const Author = require("../models/author.model");

//Create Author
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then( newAuthor => {res.json({results: newAuthor})})
    .catch((err) => res.status(400).json({err: err}))
}

//Find all Authors
module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {res.json({results: allAuthors})})
    .catch((err) => {res.json({err: err})})
}

//Find one Author
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((author) => res.json({results: author}))
    .catch((err) => {res.json({err: err})})
}

//Update an Author
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updateAuthor) => {res.json({results: updateAuthor})})
    .catch((err) => res.status(400).json({err: err}))
}

//Delete an Author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deletedAuthor) => {res.json({results: deletedAuthor})})
}