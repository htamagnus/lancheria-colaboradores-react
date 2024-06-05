import styles from "./TrackOrder.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import backArrow from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";

function OrderCard({ restaurantName, deliveryTime, status }) {
    return (
        <Card height="290px" additionalStyles={{ marginBottom: '30px' }}>
            <div className={styles.card}>
                <h3>{restaurantName}</h3>
                <p>Previsão de entrega:</p>
                <h3>{deliveryTime}</h3>
                <div className={styles.statusContainer}>
                    {status.map((item, index) => (
                        <div key={index} className={styles.statusItem}>
                            <p>{item.description}</p>
                            <p>{item.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default function TrackOrderPage() {
    const orders = [
        {
            restaurantName: "Lancheria Xis do Rei",
            deliveryTime: "Hoje, entre 15:30 e 16:00",
            status: [
                { description: "Enviamos o pedido ao restaurante", time: "15:20" },
                { description: "O pedido foi confirmado", time: "15:21" },
                { description: "O entregador está a caminho do restaurante", time: "15:25" },
                { description: "O entregador está a caminho da sua casa", time: "15:30" }
            ]
        },
        {
            restaurantName: "Lancheria Quiosque do Parque",
            deliveryTime: "Hoje, entre 15:30 e 16:00",
            status: [
                { description: "Enviamos o pedido ao restaurante", time: "15:20" },
                { description: "O pedido foi confirmado", time: "15:21" },
                { description: "O entregador está a caminho do restaurante", time: "15:25" },
                { description: "O entregador está a caminho da sua casa", time: "15:30" }
            ]
        }
    ];

    return (
        <Background>
            <Modal>
                <Title text="Acompanhar Pedido" arrow={backArrow} redirectTo="/home"></Title>
                {orders.map((order, index) => (
                    <OrderCard
                        key={index}
                        restaurantName={order.restaurantName}
                        deliveryTime={order.deliveryTime}
                        status={order.status}
                    />
                ))}
            </Modal>
        </Background>
    );
}
