const AuthorsController = require("../controllers/authors.controllers");

module.exports = app => {
    app.get("/api/authors/all", AuthorsController.findAllAuthors);
    app.get("/api/authors/:_id", AuthorsController.findSingleAuthor);
    app.post("/api/authors/create", AuthorsController.createAuthor);
    app.put("/api/authors/:_id/update", AuthorsController.updateSingleAuthor);
    app.delete("/api/authors/:_id/delete", AuthorsController.deleteSingleAuthor)
}