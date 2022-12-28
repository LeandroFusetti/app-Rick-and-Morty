import {Link} from 'react-router-dom'

export default function About(){
    return(
        <div>
            <h1>Aplicacion de Rick and Morty</h1>
            <Link to='/home'>
                <button>Volver</button>

            </Link>
        </div>

    )
}