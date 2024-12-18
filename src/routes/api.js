const express = require('express')
const UserController = require('../controller/UserController')
const AuthVerification = require('../middlewares/AuthVerification')
const router = express.Router()

router.post('/Registration',UserController.Registration)
router.get('/login',UserController.login)
router.get('/SingleProfileRead',AuthVerification,UserController.SingleProfileRead)
router.get('/AllProfileRead',AuthVerification,UserController.AllProfileRead)
router.post('/SingleProfileUpdate',AuthVerification,UserController.SingleProfileUpdate)
router.post('/DeleteSingleUser',AuthVerification,UserController.DeleteSingleUser)


module.exports=router;