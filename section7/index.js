const { read } = require('fs');
const http = require('http');
const PORT = 3000;

const friends =[
    {
        name:'Sir Isaac Newton',
         id: 0,
    },
    {
        name:'joelson',
         id: 1,
    },
    {
        name:'eloisa',
         id: 2,
    },
    {
        name:'luiz',
         id: 3,
    },
    {
        name:'marcos',
         id: 4,
    }
]
const server = http.createServer((req,res)=>{
    const items = req.url.split('/');
    if (req.method ==='POST' && items[1] ==='friends'){
        req.on('data',(data)=>{
            const friend = data.toString(); // because it is a buffer
            console.log('Request is :',friend);
            friends.push(JSON.stringify(friend)); //json format
        })
        req.pipe(res);
    }
    if(req.method === 'GET' && items[1]==='friends'){

        res.statusCode  = 200;
        res.setHeader('Content-Type','application/json');
        if(items.length ===3){
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]))
        }else{
            res.end(JSON.stringify(friends));
        }

    }else if (req.method ==='GET' && items[1] === 'messages'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>')
        res.write('<li>Hello Isaac !</li>');
        res.write('<li>What are your thoughts  on astronomy</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }  else{
        res.statusCode=404;
        res.end();
    }
});

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} ...`)
});//127.0.0.1 or localhost