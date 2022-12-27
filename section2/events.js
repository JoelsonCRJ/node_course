const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Subscribe to celebrity for Observer 1
celebrity.on('race',(result)=>{
    if(result==='win'){

        console.log('congratulations you are the best');
    }
})


//Subscribe to celebrity for Observer 2
celebrity.on('race',(result)=>{
    if(result==='win'){
        console.log('Boo I could have done better than');
    }
})


//Subscribe to celebrity for Observer 2
celebrity.on('race',(result)=>{
    if(result==='lost'){
        console.log('You can try again next week');
    }
})
process.on('exit', (code)=>{
    console.log('process exit event with code ',code)
})


celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');

