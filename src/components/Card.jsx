export default function Card({name,species, gender,image, onClose}) { //en vez de usar props, lo desesctructuro
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>  
         <h2>{species}</h2>
         <h2>{gender}</h2>  
         <img  src={image} alt="" />
      </div>
   ); //podria haber puesto props.name
}
