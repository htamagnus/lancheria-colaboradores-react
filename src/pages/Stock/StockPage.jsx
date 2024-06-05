import styles from "./StockPage.module.scss";
import arrowBack from '../../assets/arrow-back.png';
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import { potato, tomato, lettuce, cheese, onion } from '../../assets/images';

const stockItems = [
    { image: potato, name: 'Batata inglesa', quantity: 23, price: 'R$20,00' },
    { image: tomato, name: 'Tomate', quantity: 15, price: 'R$10,00' },
    { image: lettuce, name: 'Alface', quantity: 30, price: 'R$5,00' },
    { image: cheese, name: 'Queijo', quantity: 10, price: 'R$50,00' },
    { image: onion, name: 'Cebola', quantity: 20, price: 'R$8,00' }
];

const StockItem = ({ image, name, quantity, price }) => (
    <Card additionalStyles={{ marginBottom: 28 }}>
        <img src={image} alt={name} />
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>Quantidade: {quantity}</p>
            <p>{price}</p>
        </div>
    </Card>
);

export default function StockPage() {
    return (
        <Background>
            <Modal>
                <Title text="Estoque" arrow={arrowBack} redirectTo="/home" />
                {stockItems.map((item, index) => (
                    <StockItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                    />
                ))}
            </Modal>
        </Background>
    );
}
