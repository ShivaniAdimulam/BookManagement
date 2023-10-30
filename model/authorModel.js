const { Schema, model, mongoose } = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const authorSchema = Schema({
   
    name:{
        type:String
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, versionKey: false });

module.exports = model('author', bookSchema);