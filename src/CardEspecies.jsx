
import styles from './Card.module.css'



function CardFalcao({ nome, imagem }) {
   
    return (
        <>
        <section className={styles.card}>
            <h3>{nome}</h3>
            <div><img src={imagem} alt=""/></div>
            
        </section>
        </>
    )
}

export default CardFalcao