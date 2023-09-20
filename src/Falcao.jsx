import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import CardFalcao from './CardEspecies.jsx'
import styles from './Projetos.module.css'

function Falcao() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://raw.githubusercontent.com/SamucaAugusto/apis/main/api.json')
            const data = await response.json()
            setRepositories(data)

            // console.log(data)
        }
        buscarRepositorios()
    }, [])
    var especies
    const filtrofalcao = repositories.filter(falcao=>falcao.grupo=="Falcões")
    filtrofalcao.forEach(falcao => { 
        especies = falcao.especies;
    });
    //    console.log("filtro"+filtrofalcao);
    //    console.log("tudo" +repositories);
    return (
        <>
        <section className={styles.projetos}>
            <h2>Falcões</h2>
            
            {
                filtrofalcao.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            especies.map(repo => (
                                <CardFalcao
                                    
                                   nome ={repo.nome}
                                   imagem={repo.image}
                                   
                                />
                                
                                
                            ))
                            
                        }
                        
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
        </>
    )
}

export default Falcao
