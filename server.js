const express = require('express');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index',{
        title: 'A',
        caption: 'Bla Bla' 
    });
});

// MIDDLEWARE
app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());


// ROUTES
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}...`)
});