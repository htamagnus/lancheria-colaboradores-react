import Background from "../../components/Background/Background";
import styles from "./ProfilePage.module.scss";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import arrowBack from "../../assets/arrow-back.png";

const formFields = [
    { id: "name", label: "Nome", type: "text" },
    { id: "phone", label: "Celular", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "password", label: "Senha", type: "password" },
    { id: "confirmPassword", label: "Confirmação de senha", type: "password" },
];

function FormGroup({ id, label, type }) {
    return (
        <div className={styles.form_group}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input id={id} name={id} type={type} className={styles.input} />
        </div>
    );
}

export default function ProfilePage() {
    return (
        <Background>
            <Modal>
                <Title text="Dados pessoais" arrow={arrowBack} redirectTo="/home" />
                <form className={styles.form}>
                    <div className={styles.form_gap}>
                        {formFields.map((field) => (
                            <FormGroup key={field.id} {...field} />
                        ))}
                    </div>
                    <Button text="Atualizar" />
                </form>
            </Modal>
        </Background>
    );
}
