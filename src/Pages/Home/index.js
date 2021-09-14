import { useState, useEffect } from "react";
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './home.css'


function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadInfs(){
            try{
                const infs = await api.get('r-api/?api=filmes/')
                setFilmes(infs.data);
            }catch{
                alert('Aconteceu algum erro no carregamento dos dados.')
            }
        }
    loadInfs();
    },[])


    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((item)=>{
                    return(
                        <article key={item.id}>
                            <strong>{item.nome}</strong>
                            <img src={item.foto} alt={item.foto}/>
                            <Link to={`/filme/${item.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;