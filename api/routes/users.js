import express, { Router } from 'express' 
import { updateUser,deleteUser,getUser,getUsers } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router() ; 

router.get("/checkauth",verifyToken,(req,res,next)=>{
    res.send("hello you are authfied xd")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello you are logged in and you can delete your accout")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello you are the boss")
})
//update
router.put("/:id",verifyUser, updateUser) ; 

//delete 

router.delete("/:id",verifyUser, deleteUser);
//get 
router.get("/:id",verifyUser,getUser) ;

//get all 
router.get("/", verifyAdmin ,getUsers) ; 

export default router