const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/author_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Looking cool, Joker! You're connected to the DB!"))
    .catch(err=>console.log("Error, try again!", err))