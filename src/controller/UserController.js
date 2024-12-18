const {RegistrationService,loginService,SingleProfileReadService,AllProfileReadService,SingleProfileUpdateService,DeleteSingleUserService} = require('../services/UserService')



exports.Registration=async(req,res)=>{
    let result = await RegistrationService(req);
    return res.status(200).json(result);
}




exports.login=async(req,res)=>{
    let result = await loginService(req);
    if(result['status']==="success"){
        //Cookie Set
        let cookieOption={expires: new Date(Date.now()+48*60*60*1000),httpOnly: false};
        //Set Cookie With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)
    }else{
        return res.status(200).json(result)
    }
}




exports.SingleProfileRead=async(req,res)=>{
    let result = await SingleProfileReadService(req);
    return res.status(200).json(result);
}


exports.AllProfileRead=async(req,res)=>{
    let result = await AllProfileReadService(req);
    return res.status(200).json(result);
}


exports.SingleProfileUpdate=async(req,res)=>{
    let result = await SingleProfileUpdateService(req);
    return res.status(200).json(result);
}


exports.DeleteSingleUser=async(req,res)=>{
    let result = await DeleteSingleUserService(req);
    return res.status(200).json(result);
}

