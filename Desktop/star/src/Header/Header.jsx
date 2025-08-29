import { Link } from "react-router-dom";
import styles from '../Header/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="" className={styles.logo}>StarBucks</Link>
                <nav className={styles.header__nav}>
                    <Link to="/" className={styles.header__link}>Home</Link>
                    <Link to="/select" className={styles.header__link}>Select</Link>
                    <Link to="/shop" className={styles.header__link}>Shop</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
