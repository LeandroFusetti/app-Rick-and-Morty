import React from 'react'
import styles from './Form.module.css'
import Validacion from './Validacion'
export default function Form (props){

  const[userData, setUserData]=React.useState({
    username:'',
    password:'',
  })

  const[errors, setErrors]=React.useState({
    username:'',
    password:'',
  })

  const handleSubmit= (e)=>{
    e.preventDefault()
    props.login(userData)
  }
  const handleInputChange= (e)=>{
    
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    })
    setErrors(
      
      Validacion({
        ...userData,
        [e.target.name]:e.target.value
      })
    )
  }
  console.log(userData);
  console.log(errors);
    return(
          <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:'column', width:'25%',height:"300px", margin:'auto', backgroundColor:'green', padding:'30px'}}>
            <label htmlFor="username">Username</label>
            <input onChange={handleInputChange} name='username' type="text" value={userData.username} className={errors.username && styles.warning}/>
            {errors.username && <p className={styles.danger}>{errors.username}</p>}
            <label htmlFor="password">Password</label>
            <input onChange={handleInputChange}name='password' type="password" value={userData.password} className={errors.password && styles.warning}/>
            {errors.password && <p className={styles.danger}>{errors.password}</p>}
            <button type='submit'>LOGIN</button>
          </form>
    )
}