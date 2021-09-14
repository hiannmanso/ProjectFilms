import './filme-info.css';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react'
import api from '../../services/api'
import {toast} from  'react-toastify'



function Filme(){

    const [filme,setFilme] = useState([]);
    const { id } = useParams();
    const  history = useHistory();
    const [ loading,setLoading] = useState(true);
    

    useEffect(()=>{

        async function loadInfs(){
            
            try{
                const infs = await api.get(`r-api/?api=filmes/${id}`)

                if(infs.data.length === 0){
                    //tentou acessar um id que nao existia, voltar para home
                    history.replace('/')
                    return;
                }

                setFilme(infs.data);
                setLoading(false);
                
            }catch{
                
                toast.warning('Something is wrong')
            }
    
        }
        loadInfs();
    },[history, id ]);

    function salveFilme(){
        const minhaLista = localStorage.getItem('filmes');

        let filmeSalvos = JSON.parse(minhaLista) || [] ;

        const hasFilme = filmeSalvos.some((filmeSalvos)=>filmeSalvos.id === filme.id)
        if (hasFilme){
            toast.info('voce ja salvou esse filme')
            return;
        }
        else{
            filmeSalvos.push(filme)
            localStorage.setItem('filmes',JSON.stringify(filmeSalvos))
            toast.success('Filme salvo com sucesso!')
        }
    }


    if (loading){
        return(
            <div className='carregamento    '>
                <h1>
                    carregando seu filme...
                </h1>
            </div>
        )
    }
     

    

    return(
        <div className='filme'>
            <b>{filme.nome}</b>
            <img src={filme.foto} alt={filme.foto}></img>
            <p>{filme.sinopse}</p>

            <div className='buttons'>
                <button onClick={salveFilme}>Salvar</button>
                <button>
                    <a target = 'blank' href={`https://www.youtube.com/results?search_query=${filme.nome}+trailer`}> Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;