const express = require('express');


const app = express();

const PORT = 3000;

const friends= [
    {
        id:0,
        name: 'Sir Milton',
    },
    {
        id:1,
        name: 'Joelson'
    },
    {
        id:2,
        name: 'Eloisa'
    },
    {
        id:3,
        name: 'Luiz'
    }
]

app.use((req,res,next)=>{
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    //actions go here ... 
    const delta = Date.now()-start;
    console.log(`took ${delta} ms` )
    
})

app.use(express.json());
app.get('/friends',(req,res)=>{
    res.json(friends);
})

app.get('/friends/:friendId',(req,res)=>{
    const friendId = Number(req.params.friendId);
    //validate values
    const friend = friends[friendId]

    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        });
    }

})

app.get('/messages',(req,res)=>{
    res.send('<ul><li>Hello Albert!!</li></ul>');
})

app.post('/messages',(req,res)=>
{
    console.log('updating messages');
})

app.post('/friends',(req,res)=>{
	if(!req.body.name)
	{
		return res.status(400).json({
			error: 'Missing friend name'
		});
	} 
    const newFriend= {
			name: req.body.name,
			id: friends.length
		};
		friends.push(newFriend);
		res.json(newFriend);
		
	
});
app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT} ...`);
});