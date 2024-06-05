import Background from "../../components/Background/Background";
import styles from "./LoginPage.module.scss";
import logo from "../../assets/logo-transparente.png";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formFields = [
    { id: "email", label: "E-mail", type: "email", placeholder: "email@example.com" },
    { id: "password", label: "Senha", type: "password", placeholder: "Digite sua senha" },
];

function FormGroup({ id, label, type, placeholder, onChange }) {
    return (
        <div className={styles.form_group}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                className={styles.input}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export default function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get stored user data
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && formData.email === storedUser.email && formData.password === storedUser.password) {
            navigate("/home");
        } else {
            setError("Credenciais inválidas");
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register");
    };

    return (
        <Background>
            <Modal>
                <img src={logo} alt="Logo" className={styles.logo} />
                <Title text="Faça o login" />
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
                    <p className={styles.forgetPassword}>Esqueceu sua senha?</p>
                    <Button text="Entrar" />
                    <hr className={styles.divider} />
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleRegisterRedirect}
                    >
                        Não tenho conta
                    </button>
                </form>
            </Modal>
        </Background>
    );
}
