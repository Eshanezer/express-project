const path = require('path');

function getMessage (req,res){
  //  res.send('Get Message');
   res.sendFile(    path.join(__dirname,'..','public','a.png'));
};

function postMessage (req,res){
    console.log('Updating Messages')
};

module.exports={
    getMessage,
    postMessage
}