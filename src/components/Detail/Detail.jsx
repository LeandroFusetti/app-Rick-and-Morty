
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail (props){

    const{detailId} = useParams()
    const[character,setCharacter]=useState({})
    console.log(character);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div style={{color:'red'}}>
        <button onClick={props.backHome} >Volver</button>
        <img  src={character.image} alt="avatar" />
        <p>{character.name}</p>  
        <p>Specie: {character.species}</p>
        <p>Gender: {character.gender}</p>  
        <p>Location: {character.location?.name}</p>
        <p>Status: {character.status}</p>
        <p>Origin: {character.origin?.name}</p>
     </div>

    )
}