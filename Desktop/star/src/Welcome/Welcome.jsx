import styles from '../Welcome/Welcome.module.css';
import cupPhoto from '../images/cups/green__big.png';

const Welcome = () => {
    return (
        <div>
            <main className={styles.main}>
            <section className={styles.welcome}>
                <div className={styles.container}>
                    <div className={styles.welcome__desc}>
                <h1 className={`${styles.title} ${styles.welcome__title}`}>
  New cafe <br /> by <span>StarBucks</span></h1>
        <p className={styles.welcome__text}>
            Have time to buy the most harmonious drinks in the 
new&nbsp;Starbucks coffee and don't forget about the discount!
        </p>
        <div className={styles.welcome__btns_wrapper}>
            <a href='#!' className={styles.btn}>Select a coffee!</a>
            <a href='#!' className={styles.link}>More</a>
        </div>
        <div className={styles.stats}>
            <p className={styles.stats__item}>
                <span className={styles.stats__num}>9K</span>
                <div>Premium</div>
                <div>Users</div>
            </p>
            <p className={styles.stats__item}>
                <span className={styles.stats__num}>2k</span>
                <div>Happy</div>
                <div>Customer</div>
            </p>
            <p className={styles.stats__item}>
                <span className={styles.stats__num}>28</span>
                <div>Awards</div>
                <div>Winning</div>
            </p>
        </div>
        </div>
        <div className={styles.welcome__img_wrapper}>
            <img src={cupPhoto} alt='Чашка кофе' className={styles.welcome__img}></img>
        </div>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Welcome;