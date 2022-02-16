const mongoose = require("mongoose")
const Schema = mongoose.Schema

const personSchema = new Schema({

    name: 
    {
        type: String,
        require: true
    },

    age: Number,

    favoriteFoods: [String],

    vegetarian: Boolean,

    country: 
    {
        type: String,
        default: "Tunisia"
    }

})

module.exports = mongoose.model("Person", personSchema)