let fav=[]


const getCharacterId = (req,res)=>{
    const{id}=req.params
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>response.json())
    .then(data=>{
        const character={
            image:data.image,
            gender:data.gender,
            name:data.name,
            species:data.species,
            id:data.id
        }
        res.writeHead(200,{'Content-Type':'application/json'})
        console.log("character");
        res.end(JSON.stringify(character))
    })
    .catch(err=>{
        
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end('not found character')
    })
}

const getDetailId = (req,res)=>{
    const{detailId}=req.params
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then(response=>response.json())
    .then(data=>{
        const character={
            image:data.image,
            gender:data.gender,
            name:data.name,
            species:data.species,
            id:data.id,
            status:data.status,
            origin:data.origin
        }
        res.writeHead(200,{'Content-Type':'application/json'})
        console.log("detail");
        res.end(JSON.stringify(character))
    })
    .catch(err=>{
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end('not found character')
    })
}

const getFav=(req,res)=>{
    res.status(200).end(JSON.stringify(fav))
}

const postFav=(req,res)=>{
    fav.push(req.body)
    console.log('post fav',fav);
    res.status(200).end(JSON.stringify(req.body))
}

const deleteFav=(req,res)=>{
    const{id}=req.params
    const character= fav.find(c=>c.id==Number(id))
    if(character){
        fav=fav.filter(e=>e.id!==Number(id))
        console.log('delete fav',fav);
        res.status(200).end(JSON.stringify(character))
    
    }else{
        res.status(400).end("este caracter ya no se encuentra en fav")
    }
}
module.exports={
    getCharacterId,getDetailId,getFav,postFav,deleteFav
}