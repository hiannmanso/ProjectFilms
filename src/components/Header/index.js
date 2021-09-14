import { Link } from 'react-router-dom'
import './header.css'



function Header(){
    return(
        <header>
            <Link className='Logo' to='/'>Filmaria</Link>
            <Link className='favoritos' to='/favoritos'>Salvos</Link>
        </header>
    )
}


export default Header;