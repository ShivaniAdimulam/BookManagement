const { Schema, model, mongoose } = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = Schema({
   
    title:{
        type:String
    },
    author:{
        type:String       //we can use another collection to store author details and can store its id in this book doc
    },
    summary: {
        type: String
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, versionKey: false });

module.exports = model('book', bookSchema);