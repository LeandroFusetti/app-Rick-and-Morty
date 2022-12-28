import './App.css'
import Nav from "./components/Nav/Nav.jsx"
import Cards from './components/Cards/Cards.jsx'
import About from "./components/About/About.jsx"
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import {useState, useEffect} from 'react'
import {Routes,Route, useNavigate, useLocation} from 'react-router-dom'

function App () {
  const [characters, setCharacters]= useState([])
  console.log(characters);

  const[access, setAccess]= useState(false)
  const username= 'leafu92@gmail.com';
  const password='collins1';
  const navegar = useNavigate()
  const location = useLocation()

  const login =(userData)=>{
    if(userData.username === username && userData.password === password){

      setAccess(true)
      navegar('/home')
    }
    else alert('error')
  }
  const onClose= (id)=>{
    setCharacters(characters.filter(character => character.id !== id ))
  }

  const logOut= ()=>{
    setAccess(false)
  }

  useEffect(() => {
   !access && navegar('/');
}, [access]);


  
  const backHome = ()=>navegar('/home')

  const onCloseAll = ()=>setCharacters([])

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
    //osea si no estoy en '/', q se renderice nav
    <div className='App' style={{ padding: '25px' }}> 
      
      {location.pathname !== '/'&& <Nav onCloseAll={onCloseAll} logOut={logOut} onSearch={onSearch}/>} 
      
      
      <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/home' element={<Cards
             characters={characters}
             onClose={onClose}
            
            />}/>

      <Route path='/detail/:detailId' element={<Detail backHome={backHome}/>} />
      
      <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
  )
}

export default App
