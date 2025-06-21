import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.log}>Ana.dev</h1>
        <ul className={styles.navlinks}>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Início
          </NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Sobre
          </NavLink></li>
          <li><NavLink to="/projetos" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Projetos
          </NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;