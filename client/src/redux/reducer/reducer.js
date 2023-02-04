/* const {ADD_FAVORITES,DELETE_FAVORITES,FILTER,ORDER,DELETE_ALL}= require ('../actions/types.js') */
const initialState = {
    myFavorites: [],
    myFavoritesOrigin:[]
}

const rootReducer =(state =initialState,action)=>{
    switch(action.type){
        case 'ADD_FAVORITES':
            return{
                ...state,
                myFavorites:[...state.myFavoritesOrigin, action.payload],
                myFavoritesOrigin:[...state.myFavoritesOrigin, action.payload],
            };
        case 'DELETE_FAVORITES':
            const filtrado= state.myFavorites.filter(ch=>
                ch.id != action.payload)
            return{
                ...state,
                myFavorites: filtrado,
                myFavoritesOrigin: filtrado
            };
        case 'FILTER':
            const filtradoGender =[...state.myFavoritesOrigin].filter(x=> x.gender == action.payload)
            return{
                ...state,
                myFavorites: filtradoGender
            };
        case 'ORDER':
            const filtradoOrder  =[...state.myFavoritesOrigin].sort((a,b)=>{
                if(a.id>b.id)return "Ascendente" == action.payload ?1 :-1
                if(a.id<b.id)return "Descendente" == action.payload ?1 :-1

            });
            return{
                ...state,
                myFavorites: filtradoOrder

            }
        case 'DELETE_ALL':
            return{
                ...state,
                myFavorites: [],
                myFavoritesOrigin:[]
            }
            
        default: 
        return{...state }
    }
}

export default rootReducer;