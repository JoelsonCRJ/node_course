const express = require('express');
const path = require('path'); //usefull 

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router')


const app = express();

const PORT = 3000;

app.use((req,res,next)=>{
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    //actions go here ... 
    const delta = Date.now()-start;
    console.log(`took ${delta} ms` )
    
})
app.use(express.json());
app.use('/site',express.static(path.join(__dirname,'public'))); // serving static website

app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT} ...`);
});