/* const axios =require ("axios") */
import axios from 'axios'
/* const {ADD_FAVORITES ,DELETE_FAVORITES, FILTER, ORDER, DELETE_ALL} =require('./types.js') */

export const addFavorites= (characters)=>{
    return function(dispatch){
        axios
            .post(`http://localhost:3001/rickandmorty/fav`,characters)
            .then((v)=>v.data)
            .then((d)=>{
                dispatch({
                    type: 'ADD_FAVORITES',
                    payload: d
                })
        })
    }
}
export const deleteFavorites= (id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        .then((v)=>v.data)
        .then((d)=>{
            dispatch({
                type: 'DELETE_FAVORITES',
                payload: id
            })
        })
    }
}

export const filterCards =(status)=>{
    return {
        type: 'FILTER',
        payload: status
    }
}

export const orderCards = (id)=>{
    return {
        type: 'ORDER',
        payload: id
    }
}
export const deleteAll= ()=>{
    return{
        type:'DELETE_ALL',
    }
}
/* module.exports={
    addFavorites,
    deleteFavorites,
    orderCards,
    filterCards,
    deleteAll
} */