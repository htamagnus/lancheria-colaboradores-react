import styles from "./OrderPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import arrowBack from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";

const orders = [
    {
        id: 1,
        name: "Lancheria Xis do Rei",
        payment: "Cartão de crédito",
        orderNumber: 2322,
        date: "24/03/2024 às 11:16",
        price: "R$ 34,99"
    },
    {
        id: 2,
        name: "Quiosque do Parque",
        payment: "Cartão de crédito",
        orderNumber: 2323,
        date: "24/03/2024 às 11:16",
        price: "R$ 29,99"
    },
    {
        id: 3,
        name: "Lancheria Xis do Rei",
        payment: "Cartão de crédito",
        orderNumber: 2324,
        date: "24/03/2024 às 11:16",
        price: "R$ 23,99"
    },
    {
        id: 4,
        name: "Quiosque do Parque",
        payment: "Cartão de crédito",
        orderNumber: 2325,
        date: "24/03/2024 às 11:16",
        price: "R$ 49,99"
    }
];

function OrderDetails({ name, payment, orderNumber, date, price }) {
    return (
        <Card height="120px" additionalStyles={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: "30px" }}>
            <div className={styles.card}>
                <h3>{name}</h3>
                <p>{payment}</p>
                <p>Pedido nº {orderNumber}</p>
                <p>{date}</p>
            </div>
            <div className={styles.price}>{price}</div>
        </Card>
    );
}

export default function OrderPage() {
    return (
        <Background>
            <Modal>
                <Title text="Histórico de Pedidos" arrow={arrowBack} redirectTo="/home"></Title>
                {orders.map(order => (
                    <OrderDetails
                        key={order.id}
                        name={order.name}
                        payment={order.payment}
                        orderNumber={order.orderNumber}
                        date={order.date}
                        price={order.price}
                    />
                ))}
            </Modal>
        </Background>
    );
}
