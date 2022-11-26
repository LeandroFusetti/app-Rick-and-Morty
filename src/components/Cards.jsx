import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return(
      <div>
         {
            characters.map(charapter=>(
               <Card
                     {...charapter}      //como la variable y el valor tienen el mismo nombre puedo ponerlo asi

                      /* name={character.name}
                     gender={charapter.gender}
                     species={charapter.species}
                     image={charapter.image} */
                     onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   )

  
}
