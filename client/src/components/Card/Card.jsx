import styles from "./Card.module.css"
import {useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


const { addFavorites, deleteFavorites} =require ("../../redux/actions/action");

export default function Card(props) { //en vez de usar props, lo desesctructuro

const[isFav,setIsFav]=useState(false)
console.log(isFav);

const dispatch = useDispatch() //seria como el mapDispatchToProps
const myFavorites = useSelector((s)=>s.myFavorites) //seria como el mapStateToProps
console.log(myFavorites);

const handleFavorite = (characters)=>{
   if(isFav){
      
      setIsFav(false)
      dispatch(deleteFavorites(characters.id))
   }
   else{
      
      setIsFav(true)
      dispatch(addFavorites(characters))
   }
}

useEffect(() => {
   myFavorites.forEach((characters) => {
      if (characters.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={styles.containterCards}>
         <div>

         <button className={styles.closeButton} onClick={()=>props.onClose(props.id)}>X</button>
         {
            isFav ? (
               <button style={{'padding':'5px', 'margin':'10px', 'position':'relative' ,'right':'130px'}}onClick={()=>handleFavorite(props)}>❤️</button>
               ) : (
                  <button style={{'padding':'5px', 'margin':'10px', 'position':'relative' ,'right':'130px'}}onClick={()=>handleFavorite(props)}>🤍</button>
                  )
               }
         </div>
         <img  src={props.image} alt="avatar" width='300px'/>
         <Link to={`/detail/${props.id}`} style={{textDecoration:'none',color:'red'}}>
            <p>{props.name}</p>  
         </Link>
         <p>Specie: {props.species}</p>
         <p>Gender: {props.gender}</p>  
         
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
