import styles from "../Footer/Footer.module.css";
import arrow from "../images/icons/arrow.svg";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__row}>
            <a href="#!" className={styles.logo}>
              StarBucks{" "}
            </a>

            <nav className={styles.footer__nav}>
              <div className={styles.footer__nav__col}>
                <a href="#!" className={styles.footer__nav__link}>
                  Main
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Buy
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  More
                </a>
              </div>

              <div className={styles.footer__nav__col}>
                <a href="#!" className={styles.footer__nav__link}>
                  We make
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Process
                </a>
              </div>

              <div className={styles.footer__nav__col}>
                <a href="#!" className={styles.footer__nav__link}>
                  Products
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Cappuccino
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Americano
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Espresso
                </a>
              </div>

              <div className={styles.footer__nav__col}>
                <a href="#!" className={styles.footer__nav__link}>
                  Events
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Drinks
                </a>
                <a href="#!" className={styles.footer__nav__link}>
                  Eat
                </a>
              </div>
            </nav>


            <a href="#!" className={styles.footer__up__link}
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({top: 0, behavior: "smooth"});
            }}
            >
              <img src={arrow} alt="Arrow" className={styles.footer__arrow} />
            </a>
          </div>
          <a href="tel:+79999999999" className={styles.footer__phone}>
            +7-999-999-99-99
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
