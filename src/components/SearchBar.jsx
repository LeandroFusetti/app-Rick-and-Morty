import React from "react";

export default function SearchBar(props) {

   const[search, searchImput]= React.useState("");
   
   const onChange = (event)=>{
      searchImput(event.target.value)
   };

   const randomNumber = () => Math.round(Math.random() * 826)

   
   

   return (
      <div>
         <input onChange={onChange} type='search' placeholder="Agrega un personaje"/>
         <button onClick={()=>props.onSearch(search)}>Agregar</button>
         <button  onClick={()=>props.onSearch(randomNumber())} >Random</button>
      </div>
   );
}
