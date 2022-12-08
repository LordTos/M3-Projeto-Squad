
import styles from "./CardsPlanos.module.css"
import imagem1 from "./img/1.png"
import imagem2 from "./img/2.png"
import imagem3 from "./img/3.png"


function CardsPlanos()
{
    return (
        <div>
            <p className={ styles.tituloPlanos }> Nossos Planos! </p>
            <h3 className={ styles.textoPlanos }>O melhor plano para sua melhor experiência.</h3>
            <div className={ styles.containerCards }>

                <div className={ styles.cardsPlanos }>

                    <img src={ imagem1 } className={ styles.imagemCard } />
                    <p class="price">R$ 149,90</p>
                    <p>Musculação || Cross Fit || Jump || <br/>Fit Dance</p><br/>
                    <button>Inscreva-se</button>
                </div>

                <div className={ styles.cardsPlanos }>
                    <img src={ imagem2 } className={ styles.imagemCard } />

                    <p class="price">R$ 169,90</p>
                    <p>Musculação || Cross Fit || Fit Dance || Jui-jitsu || Jump</p><br/>
                    <button>Inscreva-se</button>
                </div>
                <div className={ styles.cardsPlanos }>
                    <img src={ imagem3 } className={ styles.imagemCard } />

                    <p class="price">R$ 199,90</p>
                    <p>Musculação || Cross Fit || Fit Dance || Jui-jitsu || Jump|| Natação || Futebol de Areia || Fut-Volei</p>
                    <button>Inscreva-se</button>

                </div>
            </div></div>



    )
}

export default CardsPlanos
