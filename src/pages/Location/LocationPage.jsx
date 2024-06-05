import styles from "./LocationPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import backArrow from "../../assets/arrow-back.png";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

export default function LocationPage() {
  return (
    <Background>
      <Modal>
        <Title text="Localizações e Mapas" arrow={backArrow} redirectTo="/home"/>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.3610411604905!2d-51.16124962445242!3d-29.88269587500542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f9de3ca0355%3A0x18080bb23db78ad4!2sQuiosque%20do%20parque!5e0!3m2!1sen!2sbr!4v1716731401728!5m2!1sen!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width={500}
          height={510}
          className={styles.iframe}
        />
        <Button text="Calcular rota" />
      </Modal>
    </Background>
  );
}
