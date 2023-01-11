

const path = require('path'); //usefull 

function  getMessages (req,res){
    // path.join(__dirname,'..','public','perola.jpg')
    res.sendFile(path.join(__dirname,'..','public','images','perola.jpg'))
} //better than arrow functions for debug purposes

function postMessage (req,res){
    console.log('updating messages');
}

module.exports= {
    getMessages,
    postMessage
};