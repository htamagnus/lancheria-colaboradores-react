import styles from "./NotificationPage.module.scss";
import Background from "../../components/Background/Background";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import arrowBack from "../../assets/arrow-back.png";
import notifications from "../../assets/icons/notifications.png";

const notificationData = [
    { text: "Alerta sobre status do pedido", imageClass: styles.image1 },
    { text: "Promoções e ofertas", imageClass: styles.image2 },
    { text: "Novidades", imageClass: styles.image3 },
    { text: "Avaliação do Pedido Entregue", imageClass: styles.image4 },
];

function NotificationCard({ text, imageClass }) {
    return (
        <Card>
            <div className={styles.container}>
                <p>{text}</p>
                <img src={notifications} alt="" className={imageClass} />
            </div>
        </Card>
    );
}

export default function NotificationPage() {
    return (
        <Background>
            <Modal>
                <Title text="Notificações" arrow={arrowBack} redirectTo="/home"/>
                <div className={styles.card}>
                    {notificationData.map((notification, index) => (
                        <NotificationCard
                            key={index}
                            text={notification.text}
                            imageClass={notification.imageClass}
                        />
                    ))}
                </div>
            </Modal>
        </Background>
    );
}
