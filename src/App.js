import './App.css'
import Nav from "./components/Nav.jsx"
import Cards from './components/Cards.jsx'
/* import characters from './data.js'  */
import {useState} from 'react'

function App () {
  const [characters, setCharacters]= useState([])
  console.log(characters);

  const onClose= (id)=>{
    setCharacters(characters.filter(character => character.id !== id ))
  }

  const onSearch = (character)=>{
    
    if(!characters.some(x=> x.id === parseInt(character))){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
    }
    else{
      window.alert("Personaje ya agregado")
    }
  }
  


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav  onSearch={onSearch}/>
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      
    </div>
  )
}

export default App
