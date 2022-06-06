const express = require('express')
const app = express() //using the variable app to call all the methods we want to use from express
const cors = require('cors')
const PORT = 8000;
app.use(cors())

const tea ={
    'oolong':{
        'type':'black',
        'origin':'Yo mammas house',
        'waterTemp':200,
        'steepTimeSeconds':180,
        'caffinated':true,
        'flavour':'decicious'
    },
    'matcha':{
        'type':'green',
        'origin':'Yo das house',
        'waterTemp':180,
        'steepTimeSeconds':240,
        'caffinated':false,
        'flavour':'yummy'
    },
    'unknown':{
        'type':'unknown',
        'origin':'unknown',
        'waterTemp':0,
        'steepTimeSeconds':0,
        'caffinated':false,
        'flavour':'unknown'
    }
}

app.get('/',(request, response)=>{
    //what happens when the server hears the request
     response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name',(request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    
})

app.listen(process.env.PORT||PORT)
console.log(`The server is running on port ${PORT}! Betta go catch it!!`)