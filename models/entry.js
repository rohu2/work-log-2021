const mongoose = require("mongoose");
const schema = mongoose.Schema;


const mongooseSchema = new schema({

    date: Number,
    month: Number,
    year: Number,
    week: Number,
    work: Number,
    nonwork: Number,
    total: Number,
    efficiency : Number
    
    
    }, {timestamps: true })
    
    const Entry = mongoose.model("Worklog", mongooseSchema )
    module.exports = Entry;
    



// Mongoose will pluralize and capitalize then search the database for that Collection
// very clever little mongoose
// blog will search for the collection Blogs
// cat will serarch for the collenction Cats