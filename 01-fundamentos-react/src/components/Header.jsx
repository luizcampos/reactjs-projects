import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg'; /* retorna o caminho */

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite"></img>
            Ignite Feed
        </header>
    );
}