const {ADD_FAVORITES ,DELETE_FAVORITES}= require ('./types.js')
const addFavorites= (id)=>{
    return {
        type: ADD_FAVORITES,
        payload: id
    }
}

const deleteFavorites= (id)=>{
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}


module.exports={
    addFavorites,
    deleteFavorites
}