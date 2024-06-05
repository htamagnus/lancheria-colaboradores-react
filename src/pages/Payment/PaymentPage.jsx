import styles from "./PaymentPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";
import backArrow from "../../assets/arrow-back.png";
import Title from "../../components/Title/Title";
import more from "../../assets/icons/more.png";

const paymentOptions = [
  { text: "Cadastrar cartão de crédito" },
  { text: "Cadastrar cartão de débito" },
  { text: "Cadastrar Apple Pay" },
  { text: "Pagar na entrega" },
];

const PaymentCard = ({ text }) => (
  <Card height="53px" additionalStyles={{ marginBottom: "30px" }}>
    <img src={more} className={styles.image} alt="" />
    <h3 className={styles.title__card}>{text}</h3>
  </Card>
);

export default function PaymentPage() {
  return (
    <Background>
      <Modal>
        <Title text="Formas de Pagamento" arrow={backArrow} redirectTo="/home"/>
        <Card
          height="100px"
          additionalStyles={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "40px",
          }}
        >
          <div className={styles.card}>
            <h3 className={styles.card__title}>Saldo disponível</h3>
            <p className={styles.card__paragraph}>R$ 0,00</p>
          </div>
        </Card>
        
        {paymentOptions.map((option, index) => (
          <PaymentCard key={index} text={option.text} />
        ))}
      </Modal>
    </Background>
  );
}
