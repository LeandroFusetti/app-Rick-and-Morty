const {ADD_FAVORITES,DELETE_FAVORITES}= require ('../actions/types.js')
const initialState = {
    myFavorites: []
}

const rootReducer =(state =initialState,action)=>{
    switch(action.type){
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            };
        case DELETE_FAVORITES:
            const filtrado= state.myFavorites.filter(id=>
                id != action.payload)
            return{
                ...state,
                myFavorites: filtrado
            };
        
        default: 
        return{...state }
    }
}

export default rootReducer;