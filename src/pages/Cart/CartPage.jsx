import { useState } from "react";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import styles from "./CartPage.module.scss";
import arrowBack from "../../assets/arrow-back.png";
import burger from "../../assets/images/burger.png";
import coke from "../../assets/images/coke.png";
import toppings from "../../assets/images/toppings.png";

const CartPage = () => {
  const initialItems = [
    {
      image: burger,
      title: "Hambúrguer",
      description: "adicionar cheddar",
      price: 30.00,
      quantity: 1,
    },
    {
      image: coke,
      title: "Refrigerante",
      description: "enviar canudos",
      price: 8.00,
      quantity: 1,
    },
    {
      image: toppings,
      title: "Sobremesa",
      description: "adicionar chantilly",
      price: 30.00,
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(initialItems);

  const handleIncrement = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecrement = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
    }
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Background>
      <Modal>
        <Title text="Carrinho" arrow={arrowBack} redirectTo="/home" />
        <div className={styles.cards}>
          {items.map((item, index) => (
            <div key={index} className={styles.cardContainer}>
              <Card height="150px">
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.texts}>
                  <h3 className={styles.textsTitle}>{item.title}</h3>
                  <p className={styles.textsParagraph}>{item.description}</p>
                  <p className={styles.textsPrice}>R$ {item.price.toFixed(2)}</p>
                </div>
                <div className={styles.quantityControls}>
                  <button 
                    className={styles.quantityButton}
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                  <p className={styles.quantityNumber}>{item.quantity}</p>
                  <button 
                    className={styles.quantityButton}
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className={styles.totalContainer}>
          <p className={styles.totalText}>Total</p>
          <p className={styles.totalValue}>R$ {calculateTotal()}</p>
        </div>
      </Modal>
    </Background>
  );
};

export default CartPage;
