import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {

   const[search, searchImput]= React.useState("");
   
   const onChange = (event)=>{
      searchImput(event.target.value)
   };

   const randomNumber = () => Math.round(Math.random() * 826)

   
   

   return (
      <div>
         <input  onChange={onChange} type='search' placeholder="Agrega un personaje"/>
         <button onClick={()=>props.onSearch(search)}>Agregar</button>
         <button onClick={()=>props.onSearch(randomNumber())} >Random</button>
         <button onClick={props.onCloseAll}>Borrar todo</button>
         <button onClick={props.logOut}>Log out</button>
         
         <Link to='/about'>
            <button>About</button>
         </Link>
      </div>
   );
}
