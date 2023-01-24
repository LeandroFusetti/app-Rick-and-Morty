const http= require('http')
const fs = require('fs')
const PORT=3001
const characters= require('../utils/data.js')
const {getCharById}= require('../controllers/getCharById.js')
const {getCharDetail}= require('../controllers/getCharDetail.js')


http.createServer((req,res)=>{
   
    const allUrl = req.url.split('/')
    const id= Number(allUrl.pop())
    const url= allUrl.join('/')
    res.setHeader('Access-Control-Allow-Origin', '*')
    switch(url){
        case '/onsearch':
            return getCharById(res,id);
        case '/detail':
            return getCharDetail(res,id);
        default:
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end('Route not found')    
    }


    /* if(url=='/rickandmorty/character'){
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
    } */
    
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