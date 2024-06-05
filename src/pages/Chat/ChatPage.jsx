import styles from './ChatPage.module.scss';
import Background from '../../components/Background/Background';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import motoboyIcon from '../../assets/images/motoboy.png';
import Title from '../../components/Title/Title';
import arrowBack from '../../assets/arrow-back.png'

export default function ChatPage() {
    return (
        <Background>
            <Modal>
                <Title text="Chat Interno" arrow={arrowBack} redirectTo="/home"/>
                <Card additionalStyles={{ flexDirection: "column", gap: "10px", paddingTop: "20px", alignItems: "flex-start" }}>
                    <div className={styles.header}>
                        <img src={motoboyIcon} alt="Mateus Motoboy" />
                        <p>Mateus Motoboy</p>
                    </div>

                    <div className={styles.timestamp}>23 de março de 2024</div>

                    <div className={styles.chat}>
                        <div className={`${styles.message} ${styles.receiver}`}>
                            <p>Olá, preciso que me ligue pois surgiu um imprevisto.</p>
                        </div>
                    </div>
                    <div className={`${styles.message} ${styles.sender}`}>
                            <p>Certo, vou ligar já.</p>
                        </div>
                    <div className={styles.footer}>Conversa encerrada</div>
                </Card>
            </Modal>
        </Background>
    )
}