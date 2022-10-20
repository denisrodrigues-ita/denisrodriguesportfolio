import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [active, setActive] = React.useState(false);

  const handleActive = () => {
    setActive(!active);
  }

  return (
    <header className={`${styles.header} container animaLeft`}>
      <nav className={styles.nav}>
        <button className={styles.btnMenu}
          ariaLabel="Abrir Menu"
          aria-haspopup="true"
          aria-controls="menu"
          ariaExpanded="false"
          onClick={handleActive}>Menu</button>
        <ul className={active ? `${styles.menu} && ${styles.active}` : `${styles.menu}`} role="menu">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/portfolio'>Portfólio</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;