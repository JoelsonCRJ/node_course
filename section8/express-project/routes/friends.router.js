const express = require('express');
const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller')
//custom middleware

friendsRouter.use((req,res,next)=>{
    console.log('ip address:', req.ip);
    next();
})
friendsRouter.get('/',friendsController.getFriends);
friendsRouter.post('/',friendsController.postNewFriend);
friendsRouter.get('/:friendId',friendsController.getFriendsID);

module.exports = friendsRouter;