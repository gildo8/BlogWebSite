const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Update
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
            });
            res.status(200).json(updatedUser);
        }
        else{
            res.status(401).json("You are not allow to update this account.");
        }
        
    }catch(err){
        res.status(500).json(err);
    }

});

//Delete

module.exports = router;