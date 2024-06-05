import styles from "./SupportPage.module.scss";
import backArrow from "../../assets/arrow-back.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

const faqItems = [
  { href: "/faq/coupon", text: "Não consigo acessar informações" },
  { href: "/faq/delete-card", text: "Não consigo ver as entregas" },
  { href: "/faq/update-account", text: "Quero alterar dados cadastrais" },
];

const supportItems = [
  { href: "/faq/coupon", text: "Desejo falar com um atendente", arrowClass: styles.arrowServices },
];

const supportTraining = [
  { href: "/faq/coupon", text: "Desejo obter treinamento do sistema", arrowClass: styles.arrowServices },
];

const FaqList = ({ items }) => (
  <div className={styles.faqList}>
    {items.map((item, index) => (
      <a key={index} href={item.href} className={styles.faqItem}>
        <span>{item.text}</span>
        <img src={arrowRight} alt="arrow" className={item.arrowClass || styles.arrow} />
      </a>
    ))}
  </div>
);

export default function SupportPage() {
  return (
    <Background>
      <Modal>
        <Title text="Suporte ao Cliente" arrow={backArrow} redirectTo="/home"/>

        <Card additionalStyles={{ marginBottom: "30px" }}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Perguntas frequentes</h3>
            <FaqList items={faqItems} />
          </div>
        </Card>

        <Card additionalStyles={{ marginBottom: "30px" }}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Atendimentos</h3>
            <FaqList items={supportItems} />
          </div>
        </Card>

        <Card>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Atendimentos</h3>
            <FaqList items={supportTraining} />
          </div>
        </Card>
      </Modal>
    </Background>
  );
}
