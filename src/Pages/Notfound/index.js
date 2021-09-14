import {React} from 'react';
import {Link} from 'react-router-dom'
import './erro.css'


function Notfound (){
    return(
        <div className='Erro'>
            <h1>
                404
            </h1>
            <h2>Pagina não encontrada!</h2>
            <Link to='/'>Veja todos os filmes</Link>
        </div>
    )
}


export default Notfound;