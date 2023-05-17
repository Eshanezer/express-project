const model = require('../models/friend.model');


function getFriends(req,res){
    res.json(model);
};

function addFriend(req,res){

    if(!req.body.name){
       return res.status(400).json({
            error:"validation Fail "
        });
    }

    const newFriend={
        name: req.body.name,
        id:model.length
    };
    model.push(newFriend);
    res.json(newFriend);
};

function getFriendById(req,res){
    const id = Number(req.params.id);
    const friend =model[id];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        });
    }
};

module.exports={
    getFriendById,
    getFriends,
    addFriend
};