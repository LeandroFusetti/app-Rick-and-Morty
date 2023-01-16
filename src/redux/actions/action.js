const {ADD_FAVORITES ,DELETE_FAVORITES, FILTER, ORDER}= require ('./types.js')
const addFavorites= (characters)=>{
    return {
        type: ADD_FAVORITES,
        payload: characters
    }
}

const deleteFavorites= (id)=>{
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}

const filterCards =(status)=>{
    return {
        type: FILTER,
        payload: status
    }
}

const orderCards = (id)=>{
    return {
        type: ORDER,
        payload: id
    }
}

module.exports={
    addFavorites,
    deleteFavorites,
    orderCards,
    filterCards
}