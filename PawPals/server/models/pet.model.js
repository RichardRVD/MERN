const mongoose = require("mongoose");
const PetFinderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    _id:{
        type: Number,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true
    },
    breeds:{
        primary: String,
        secondary: String,
        mixed: String,
        unknown: Boolean
    },
    colors:{
        primary: String,
        secondary: String,
        tertiary: String
    },
    age:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    size:{
        type: String
    },
    attributes: {
        spayed_neutered: Boolean,
        house_trained: Boolean,
        declawed: String,
        special_needs: Boolean,
        shots_current: Boolean
    },
    photos: {
        small: String,
        medium: String,
        large: String,
        full: String
    }
});
const Pet = mongoose.model("Pet", PetFinderSchema);
module.exports = Pet;