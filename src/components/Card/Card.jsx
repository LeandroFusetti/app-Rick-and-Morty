import styles from "./Card.module.css"
import {useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import {connect,useSelector,useDispatch} from 'react-redux'


const { addFavorites, deleteFavorites} =require ("../../redux/actions/action");

export default function Card({name,species, gender,image, onClose,id}) { //en vez de usar props, lo desesctructuro

const[isFav,setIsFav]=useState(false)
console.log(isFav);

const dispatch = useDispatch() //seria como el mapDispatchToProps
const myFavorites = useSelector((s)=>s.myFavorites) //seria como el mapStateToProps
console.log(myFavorites);

const handleFavorite = (id)=>{
   if(isFav){
      console.log('+');
      setIsFav(false)
      dispatch(deleteFavorites(id))
   }
   else{
      console.log('-');
      setIsFav(true)
      dispatch(addFavorites(id))
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={styles.containterCards}>
         <div>

         <button className={styles.closeButton} onClick={()=>onClose(id)}>X</button>
         {
            isFav ? (
               <button style={{'padding':'5px', 'margin':'10px', 'position':'relative' ,'right':'130px'}}onClick={()=>handleFavorite(id)}>❤️</button>
               ) : (
                  <button style={{'padding':'5px', 'margin':'10px', 'position':'relative' ,'right':'130px'}}onClick={()=>handleFavorite(id)}>🤍</button>
                  )
               }
         </div>
         <img  src={image} alt="avatar" width='300px'/>
         <Link to={`/detail/${id}`} style={{textDecoration:'none',color:'red'}}>
            <p>{name}</p>  
         </Link>
         <p>Specie: {species}</p>
         <p>Gender: {gender}</p>  
         
      </div>
   ); //podria haber puesto props.name
}

/* export function mapDispatchToPros (dispath){
   return{
      addCharacter: (id)=>{
         store.dispatch(addCharacter(id))
      },
      deleteCharacter: (id)=>{
         store.dispatch(deleteCharacter(id))
      }
   }
} */

/* export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
} */

/* export default connect(null,mapDispatchToPros)(Card) */
