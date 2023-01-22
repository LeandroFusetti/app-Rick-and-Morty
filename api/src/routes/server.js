const http= require('http')
const fs = require('fs')
const PORT=3001
const characters= require('../utils/data.js')


http.createServer((req,res)=>{
   
    const allUrl = req.url.split('/')
    console.log(allUrl);
    const id= Number(allUrl.pop())
    console.log(req.url);
    const url= allUrl.join('/')
    console.log(url);
    if(url=='/rickandmorty/character'){
        
            const character= characters.find(ch=>ch.id===id)
            if(character){
                res.writeHead(200,{'Content-Type':'application/Json'})
                res.end(JSON.stringify(character))  
            }else {
                res.writeHead(404,{'Content-Type':'text/plain'})
                res.end('Route not found')
            }
    }
    else if(req.url=="/rickandmorty/characters"){
        res.writeHead(200,{'Content-Type':'application/Json'})
        res.end(JSON.stringify(characters))
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'})
            res.end('Route not found') 
    }
    console.log(req.url);
    /* switch (req.url){
        case '/rickandmorty/characters':
            res.writeHead(200,{'Content-Type':'application/Json'})
            res.end(JSON.stringify(characters))
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end('Route not found') 
    }    */     
       
}).listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})