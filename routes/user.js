const express = require('express');
const router = express.Router();
const controller =require('../controllers/users');
router.get("/getalluser", controller.getAllUsers)
router.get("/getuser/:id", controller.getuser)


module.exports=router;