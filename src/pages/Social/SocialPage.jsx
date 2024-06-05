// refatorar essa pagina
import styles from "./SocialPage.module.scss";
import backArrow from "../../assets/arrow-back.png"
import Background from "../../components/Background/Background";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import tiktokIcon from "../../assets/icons/tiktok.png";

export default function SocialPage() {
    return (
        <Background>
            <Modal>
                <Title text="Redes Sociais" arrow={backArrow} redirectTo="/home"/>
                <Card additionalStyles={{ flexDirection: 'column', paddingBottom: "20px" }}>
                    <p className={styles.paragraph}>Faça a integração de suas redes sociais para compartilhar suas experiências com a aplicação, comidas e pedidos!</p>
                    <div className={styles.card}>
                        <img src={instagramIcon} alt=""/>
                        <p>Conectar Instagram</p>
                    </div>
                    <hr className={styles.divider} />

                    <div className={styles.card}>
                        <img src={facebookIcon} alt=""/>
                        <p>Conectar Facebook</p>
                    </div>
                    <hr className={styles.divider} />

                    <div className={styles.card}>
                        <img src={twitterIcon} alt=""/>
                        <p>Conectar Twitter</p>
                    </div>
                    <hr className={styles.divider} />


                    <div className={styles.card}>
                        <img src={tiktokIcon} alt=""/>
                        <p>Conectar Tiktok</p>
                    </div>
                    <hr className={styles.divider} />
                </Card>
            </Modal>
        </Background>
    )
}