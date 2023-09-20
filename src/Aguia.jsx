import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import styles from './Projetos.module.css'

function Aguia() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://raw.githubusercontent.com/SamucaAugusto/apis/main/api.json')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                   grupo ={repo.grupo}
                                   imagem={repo.imagem}
                                   
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

export default Aguia
