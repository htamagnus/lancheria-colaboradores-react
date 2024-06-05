import styles from "./FeedbackPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import backArrow from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const FeedbackCard = ({ title, placeholder }) => (
  <div className={styles.card}>
    <h2 className={styles.card__title}>{title}</h2>
    <Card
      height="150px"
      additionalStyles={{
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "20px",
      }}
    >
      <textarea
        className={styles.card__textarea}
        placeholder={placeholder}
        rows="4"
        cols="50"
      />
    </Card>
  </div>
);

export default function FeedbackPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home')
  };

  return (
    <Background>
      <Modal>
        <Title
          text="Avaliações e Feedbacks"
          arrow={backArrow}
          redirectTo="/home"
        />
        <FeedbackCard
          title="Produtos"
          placeholder="Conte como tem sido sua experiência com os produtos da nossa aplicação"
        />
        <FeedbackCard
          title="Serviço"
          placeholder="Conte como tem sido sua experiência com o nosso serviço"
        />
        <div className={styles.button}>
          <Button text="Enviar" onClick={handleSubmit} />
        </div>
      </Modal>
    </Background>
  );
}
