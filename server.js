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