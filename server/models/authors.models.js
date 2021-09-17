const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required!"],
        minlength: [3, "Authors name must be atleast 3 characters long!"]
    }
})


const Authors = mongoose.model("Authors", AuthorSchema);

module.exports = Authors;