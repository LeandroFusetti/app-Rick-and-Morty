const getCharDetail = (res,id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
        
        res.end(JSON.stringify(character))
    })
    .catch(err=>{
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end('not found character')
    })
}

module.exports={
    getCharDetail
}