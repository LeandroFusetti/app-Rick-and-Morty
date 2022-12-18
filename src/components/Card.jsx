import styles from "./Card.module.css"
import React from "react";

export default function Card({name,species, gender,image, onClose,id}) { //en vez de usar props, lo desesctructuro


   return (
      <div className={styles.containterCards}>
         <button className={styles.closeButton} onClick={()=>onClose(id)}>X</button>
         <img  src={image} alt="avatar" />
         <p>{name}</p>  
         <p>Specie: {species}</p>
         <p>Gender: {gender}</p>  
      </div>
   ); //podria haber puesto props.name
}
