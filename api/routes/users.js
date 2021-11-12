const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//UPDATE
router.put("/:id", async(req,res) => {
    try{
        if(req.body.userId === req.params.id)
        {
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            }, {new : true});
            res.status(200).json(updatedUser);
        }
        else{
            res.status(401).json("You are not allow to update this account.");
        }
        
    }catch(err){
        res.status(500).json(err);
    }

});

//DELETE

router.delete("/:id", async(req,res) => {
    try{ 

        if(req.body.userId === req.params.id)
        {
            const user = await User.findById(req.params.id);
            if(!user)
            {
                res.status(404).json("User not found.");
            }
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted.");
        }
        else
        {
            res.status(401).json("You are not allow to delete this account.");
        }
        
    }catch(err){
        res.status(500).json(err);
    }
});

//GET
router.get("/:id", async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password,... others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }

});
module.exports = router;