const express = require('express');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(express.json());


// ROUTES
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}...`)
});