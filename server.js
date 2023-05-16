const express = require('express');

const app = express();
const PORT = 3000;

const firends =[
    {
        id:0,
        name:'Albert AAA'
    },
    {
        id:1,
        name:'Isaac Newton'
    }
];

app.get('/friends',(req,res)=>{
    res.json(firends);
});

app.use(express.json());

app.post('/friend',(req,res)=>{

    if(!req.body.name){
       return res.status(400).json({
            error:"validation Fail "
        });
    }

    const newFriend={
        name: req.body.name,
        id:firends.length
    };
    firends.push(newFriend);
    res.json(newFriend);
});

app.get('/friends/:id',(req,res)=>{
    const id = Number(req.params.id);
    const friend =firends[id];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        });
    }
});

app.get('/messages',(req,res)=>{
    res.send('<ul><li>Helloo Albert !</li></ul>')
});

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}...`)
});