const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    NIDNumber: {type:String,unique:true,required:true},
    phoneNumber: {type:String,unique:true,required:true},
    city: {type:String,required:true},
    address: {type:String,required:true},
    bloodGroup: {type:String,required:true},
    otp: {type:String,default:'0'}
    },
    {timestamps: true,versionKey:false},
)
const UserModel = mongoose.model('users',DataSchema)
module.exports = UserModel;