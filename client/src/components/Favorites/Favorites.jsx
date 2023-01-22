import React from 'react'
import { connect } from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions/action'
import styles from './Favorites.module.css'

/* class Favorites extends React.Component{ */
    
    function Favorites(props){
        

           
             
        console.log(props.myFavorites);
        console.log(props.myFavoritesOrigin);

        console.log(props.characters);
        
        const handleClickFiltered = (e)=>{
            const objetivo = e.target.value
            props.filterCards(objetivo)
           
        }

        const handleClickOrdered= (e)=>{
            const objetivo = e.target.value
            props.orderCards(objetivo)
        }
        /* React.useEffect(() => {
            const favoritosFiltrados = props.characters.filter((fav)=>{return fav.id === props.myFavorites})  
            myFavorites.forEach((fav) => {
               if (fav === id) {
                  setIsFav(true);
               }
            });
         }, [myFavorites]); */
        return(
            <div className={styles.divContainer}>
                <div>
                    <select name="gender" onChange={handleClickFiltered}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless </option>
                        <option value="unknown">unknown</option>
                    </select>
                    <select name="order" onChange={handleClickOrdered}>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                       
                    </select>
                </div>
                
                {props.myFavorites.map((fav)=>{
                    console.log(fav);
                    return(
                       
                            <div className={styles.containterCards}>
                                <img  src={fav.image} alt="avatar" width='300px'/>
                                <p>{fav.name}</p>  
                            </div> 
                    )
                })}
            </div>
        )
    }

const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        filterCards : (selector)=>dispatch(filterCards(selector)),
        orderCards: (id)=>dispatch(orderCards(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)