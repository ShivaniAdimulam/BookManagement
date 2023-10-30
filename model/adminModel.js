const { Schema, model, mongoose } = require('mongoose');

const adminSchema = Schema({
   
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    verificationStatus:{
        type:Boolean
    },
    loginStatus:{
        type:Boolean
    }, 
    token:{
        type:String
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, versionKey: false });

module.exports = model('admin', adminSchema);