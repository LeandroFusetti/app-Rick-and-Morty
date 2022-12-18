import Card from './Card';
import styles from "./Cards.module.css"
import React from 'react';

export default function Cards(props) {
   const { characters } = props;
   return(
      <div className={styles.divContainer}>
         {
            characters.map(charapter=>(
               <Card
                      {...charapter}      //como la variable y el valor tienen el mismo nombre puedo ponerlo asi
                     key={charapter.id}
                      /* name={character.name}
                     gender={charapter.gender}
                     species={charapter.species}
                     image={charapter.image} */
                     id={charapter.id}

                     onClose={props.onClose}
               />
            ))
         }
      </div>
   )

  
}
