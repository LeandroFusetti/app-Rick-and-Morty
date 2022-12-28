
export default function Validacion (userData){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*[0-9])(?!.* ).{6,10}$/
   
    const errors={}   //cuando el formulario tiene los campos llenos retorno un obj vacio, y cuando lo paso a array me da q esta vacio y asi la funcion handleSubmit me valida que estan todos los campos llenos, ya q depende del array vacio
    if (!userData.username) {
        errors.username = 'Se requiere un nombre de usuario';
     }
    
    if (!regexEmail.test(userData.username)) {
        errors.username = 'Debe ser un correo electrónico';
     }
         
     if(userData.username.length>=35){
      errors.username= 'No puede tener mas de 35 caracteres'
     }

     
     if(!regexPassword.test(userData.password)){
      errors.password='Debe tener entre 6 y 10 caracteres y un caracter numerico'
     }
    return(
        errors
    )
}