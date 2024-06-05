import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import logo from '../../assets/logo-colorida.png';
import graphic1 from '../../assets/images/graphic-1.png';
import graphic2 from '../../assets/images/graphic-2.png';
import graphic3 from '../../assets/images/graphic-3.png';
import graphic4 from '../../assets/images/graphic-4.png';
import { useState } from "react";

const metrics = [
  { value: "R$ 46.526,30", label: "Faturamento" },
  { value: "R$ 66.126,00", label: "Total Custos" },
  { value: "R$ 96.426,30", label: "Total Lucro" },
  { value: "R$ 10.126,30", label: "Número de Pedidos" }
];

const charts = [
  { src: graphic1, alt: "Faturamento Anual" },
  { src: graphic2, alt: "Faturamento Mensal" },
  { src: graphic3, alt: "Top 5 Produtos" },
  { src: graphic4, alt: "Categorias" }
];

const links = [
  { to: "/profile", label: "Perfil" },
  { to: "/order", label: "Pedidos" },
  { to: "/chat", label: "Chat Interno" },
  { to: "/stock", label: "Estoque" },
  { to: "/deliveries", label: "Entregas" },
  { to: "/support", label: "Suporte" }
];

export default function HomePage() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Metrics />
        <Charts />
      </div>
    </div>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Lancherias" className={styles.logo} />
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <h1>Dashboard Vendas</h1>
    </div>
  );
}

function Metrics() {
  return (
    <div className={styles.metrics}>
      {metrics.map((metric, index) => (
        <div className={styles.metricCard} key={index}>
          <h2>{metric.value}</h2>
          <p>{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function Charts() {
  return (
    <div className={styles.charts}>
      {charts.map((chart, index) => (
        <div className={styles.chart} key={index}>
          <img src={chart.src} alt={chart.alt} />
        </div>
      ))}
    </div>
  );
}
