/* const getCharById = (res,id)=>{
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
        return character
    })
    .catch(err=>{
        
        throw Error('not found character')
    })
}

module.exports={
    getCharById
} */