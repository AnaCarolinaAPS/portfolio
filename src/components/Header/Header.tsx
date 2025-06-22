import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.log}><span className="text-primary">Ana</span><span className="text-secondary">.dev</span></h1>
        {/* Ícone do menu hamburguer */}
        <button className={styles.toggleButton} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles['nav-links']} ${menuOpen ? styles.show : ''}`}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>
            Início
          </NavLink></li>
          <li><NavLink to="/sobre" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>
            Sobre
          </NavLink></li>
          <li><NavLink to="/projetos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>
            Projetos
          </NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;