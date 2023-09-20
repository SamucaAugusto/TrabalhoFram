import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import styles from './Projetos.module.css'

function Header() {

    

    return (
        <>
        <section className={styles.projetos}>
            <Link to="/Projetos">Geral</Link>
            <Link to="/Pinguins">Pinguins</Link>
            <Link to="/Falcao">Falcões</Link>
        </section>
        </>
    )
}

export default Header
