const mongoose = require('mongoose');
const {EncodeToken} = require('../utility/TokenHelper');
const UserModel = require('../models/UserModel');

// const ObjectID = mongoose.Types.ObjectId;

exports.RegistrationService = async(req)=>{
    try{
        let reqBody = req.body;
        let data = await UserModel.create(reqBody);
        console.log('Registration Successful')
        return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',message:e.toString()}
    }
}


exports.loginService = async(req)=>{
    try{
        let email = req.body['email'];
        let password = req.body['password'];
        let data = await UserModel.findOne({email:email,password:password})

        let token = EncodeToken(email,data['_id'].toString())
        console.log(`login successful for ${data['firstName']}`)

        return {status:'success',token:token, message:data['firstName']}
    }
    catch(e){
        return {status:'fail',message:e.toString()}
    }
}


exports.SingleProfileReadService = async(req)=>{
    try{
        let user_id = req.headers.user_id;
        let data = await UserModel.findOne({_id:user_id})
        console.log(`Profile found for ${data['firstName']}`)
        return {status:'success',data:data}
    }
    catch(e){
        return {status:'fail', message:"Profile not found", error:e.toString()}
    }
}


exports.AllProfileReadService = async(req)=>{
    try{
        let data = await UserModel.find()
        console.log('All User Profile')
        return {status:'success', data:data}
    }
    catch(e){
        return {status:'fail',message:e.toString()}
    }
}


exports.SingleProfileUpdateService = async(req)=>{
    try{
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        await UserModel.updateOne({_id:user_id},reqBody)
        console.log("Profile Updated")
        return {status:'success', message:"Profile Updated"}
    }
    catch(e){
        return {status:'fail',message:e.toString()}
    }
}


exports.DeleteSingleUserService = async(req)=>{
    try{
        let user_id = req.headers.user_id;
        await UserModel.deleteOne({_id:user_id})
        return {status:"success", message:"User deleted successfully"}
    }
    catch(e){
        return {status:'fail',message:e.toString()}
    }
}