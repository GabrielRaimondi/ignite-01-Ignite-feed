import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src={igniteLogo} alt="LogoTipo do ignite" />
        <span>Ignite Feed</span>
      </div>
    </header>
  );
}