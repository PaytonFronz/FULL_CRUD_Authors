const Authors = require("../models/authors.models");

module.exports.findAllAuthors = (req, res) => {
    Authors.find({})
        .then(allAuthors => res.json({ results: allAuthors }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.findSingleAuthor = (req, res) => {
    Authors.findOne({ _id: req.params._id })
        .then(singleAuthor => res.json({ results: singleAuthor }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.createAuthor = (req, res) => {
    console.log(req.body)
    Authors.create(req.body)
        .then(createAuthor => res.json({ results: createAuthor }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.updateSingleAuthor = (req, res) => {
    Authors.findOneAndUpdate({ _id: req.params._id }, req.body, {runValidators: true})
        .then(updatedAuthor => res.json({ results: updatedAuthor }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.deleteSingleAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
    }