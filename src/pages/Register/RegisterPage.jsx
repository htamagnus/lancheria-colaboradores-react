import Background from "../../components/Background/Background";
import styles from "./RegisterPage.module.scss";
import logo from "../../assets/logo-transparente.png";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import arrowBack from "../../assets/arrow-back.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formFields = [
    { id: "name", label: "Nome", type: "text" },
    { id: "phone", label: "Celular", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "password", label: "Senha", type: "password" },
    { id: "confirmPassword", label: "Confirmação de senha", type: "password" },
];

function FormGroup({ id, label, type, onChange }) {
    return (
        <div className={styles.form_group}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input id={id} name={id} type={type} className={styles.input} onChange={onChange} />
        </div>
    );
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("As senhas não coincidem");
            return;
        }
        localStorage.setItem('user', JSON.stringify(formData));
        navigate("/");
    };

    return (
        <Background>
            <div className={styles.modal}>
                <div className={styles.modal_box}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <Title text="Cadastre-se Aqui" arrow={arrowBack} redirectTo="/" />
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.form_gap}>
                            {formFields.map((field) => (
                                <FormGroup
                                    key={field.id}
                                    {...field}
                                    onChange={handleInputChange}
                                />
                            ))}
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                        <Button text="Cadastre-se" />
                    </form>
                </div>
            </div>
        </Background>
    );
}
