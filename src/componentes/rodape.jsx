import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styles from './rodape.module.css'


function Rodape(){
    return(
        <footer className={styles.footer}>
            <section className={styles.logo}>
            <a href='#'><img src="" alt="Logo" /></a>

            </section>
            <section className={styles.icones}>
                <div className={styles.midias_socias}>
                    <h3>Siga a Iron Shape nas redes Sociais</h3>
                    <ul>
                        <li><a href='#'><FaFacebook/> Facebook</a></li>
                        <li><a href='#'><FaInstagram/> Instagram</a></li>
                        <li><a href='#'><FaLinkedin/> Linked In</a></li>
                        <li><a href='#'><FaTwitter/> Twitter</a></li>
                    </ul>
                </div>
            </section>
            <section className={styles.links_1}>
                <div className={styles.links}>
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Fiquei sem Ideias 01</h3>
                    <ul>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Fiquei sem Ideias 02</h3>
                    <ul>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                        <li><a href='#'>Digite Algo</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Rodape