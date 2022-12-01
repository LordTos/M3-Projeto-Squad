import React from "react";
import styles from "./Cards.module.css"

function Cards() {
    return (
        <div className={styles.papai}>
          
                <p className={styles.titulo}>Experiência <span> Iron shape</span> </p>
          
            <div className={styles.Pai}>
                <div className={styles.cards}>
                    <div class="w3-card-4">
                        <img src="https://www.lifefitness.com.br/resource/image/1868258/landscape_ratio16x9/720/405/c2d12126812afcd94d4bed966f3f9e7b/tt/oktopus-1.png" alt="Alps" />
                        <div class="w3-container w3-center">
                            <p>Salas exclusivas de aulas coletivas</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div class="w3-card-4">
                        <img src="https://th.bing.com/th/id/R.2895045f592c9cda35b1e140e44ab787?rik=uPyqJPbdXBKIigriu=http%3a%2f%2fwww.polyflor.ca%2fusercontent%2fProduct-Overviews%2fsmooth-heterogeneous-flooring%2fforest-fx-pur%2fgallery%2fLarge+Horizontal%2fSimply_Gym_Rustic_Oak_3330.jpg&ehk=oNUZjHlh%2f7njB9cjGbsaiUxB33K1PDnMkPg87ZA88ho%3d&risl=&pid=ImgRaw&r=0" alt="Alps" />
                        <div class="w3-container w3-center">
                            <p>Área de musculção e cárdio</p>
                        </div>
                    </div>
                </div> <div className={styles.cards}>
                    <div class="w3-card-4">
                        <img src="https://www.aubicon.com.br/wp-content/uploads/2022/06/4-dicas-de-como-organizar-o-layout-da-sua-academia_blog_1200x800px_100_img2.png" alt="Alps" />
                        <div class="w3-container w3-center">
                            <p>Equipamento de alto padão</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Cards
