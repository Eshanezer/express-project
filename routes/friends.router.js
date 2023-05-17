const express = require('express');
const friendsController = require('../controllers/friend.controller')

const friendsRouter = express.Router();

friendsRouter.get('/',friendsController.getFriends);
friendsRouter.post('/',friendsController.addFriend);
friendsRouter.get('/:id',friendsController.getFriendById);


module.exports=friendsRouter;