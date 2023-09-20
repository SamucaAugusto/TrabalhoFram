/* eslint-disable no-unused-vars */
import styles from './Card.module.css'


// eslint-disable-next-line react/prop-types
function CardPinguins({ nome, comp, imagem }) {
    /*const buscarLinguas = async () => {
        let response = await fetch(languages)
        response = await response.json()
        return response
    }
    buscarLinguas()
    const languages_names = Object.keys(languages)
    console.log(buscarLinguas)*/
    return (
        <>
        <section className={styles.card}>
            <h3>{nome}</h3>
            <p><img src={imagem} alt=""/></p>
            
        </section>
        </>
    )
}

export default CardPinguins