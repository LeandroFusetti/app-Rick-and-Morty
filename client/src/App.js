import './App.css'
import Nav from "./components/Nav/Nav.jsx"
import Cards from './components/Cards/Cards.jsx'
import About from "./components/About/About.jsx"
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites'
import { useDispatch } from 'react-redux'
import {useState, useEffect} from 'react'
import {Routes,Route, useNavigate, useLocation} from 'react-router-dom'
import { deleteFavorites } from './redux/actions/action'

function App () {
  const [characters, setCharacters]= useState([])
  console.log(characters);

  const[access, setAccess]= useState(false)
  const username= 'leafu92@gmail.com';
  const password='collins1';
  const navegar = useNavigate()
  const location = useLocation()
  const dispatch=useDispatch()
  const login =(userData)=>{
    if(userData.username === username && userData.password === password){

      setAccess(true)
      navegar('/home')
    }
    else alert('error')
  }
  const onClose= (id)=>{
    setCharacters(characters.filter(character => character.id !== id ))
    dispatch(deleteFavorites(id))
  }

  const logOut= ()=>{
    setAccess(false)
  }
console.log(access);
  useEffect(() => {
   !access && navegar('/');
}, [access]);

  const goToFavorites = ()=>navegar('/favorites')
  
  const backHome = ()=>navegar('/home')

  const onCloseAll = ()=>setCharacters([])

  const onSearch = (character)=>{
    
    if(!characters.some(x=> x.id === parseInt(character))){
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
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
    //osea si no estoy en '/', q se renderice nav
    <div className='App' style={{ padding: '25px' }}> 
      
      {location.pathname !== '/'&& <Nav  goToFavorites={goToFavorites} onCloseAll={onCloseAll} logOut={logOut} onSearch={onSearch}backHome={backHome}/>} 
      
      
      <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/home' element={<Cards
             characters={characters}
             onClose={onClose}
            
            />}/>
      <Route path='/favorites' element={<Favorites characters={characters} />}/>
      <Route path='/detail/:detailId' element={<Detail backHome={backHome}/>} />
      
      <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
  )
}

export default App
