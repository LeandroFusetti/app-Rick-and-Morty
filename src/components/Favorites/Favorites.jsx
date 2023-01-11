import React from 'react'
import { connect } from 'react-redux'
import styles from './Favorites.module.css'

/* class Favorites extends React.Component{ */
    
    function Favorites(props){
        
        const favoritosFiltrados = props.characters.filter((fav)=> props.myFavorites.includes(fav.id) )  
        console.log(props.myFavorites);
        console.log(props.characters);
        console.log(favoritosFiltrados);

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
                
                
                {favoritosFiltrados.map((fav)=>{
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

export default connect(mapStateToProps,null)(Favorites)