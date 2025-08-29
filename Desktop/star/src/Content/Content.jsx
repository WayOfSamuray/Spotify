import styles from '../Content/Content.module.css';
import tasty from '../images/icons/3d/heart.png';
import fast from '../images/icons/3d/rocket.png';
import available from '../images/icons/3d/money.png';

const Content = () => {
    return (
        <div>
            <section className={styles.benefits}>
            <div className={styles.benefits__container}>
                <div className={styles.benefits__item}>
                <div className={styles.benefits__img_wrapper}>
                    <img src={tasty} alt='Heart' className={`${styles.benefits__icon} ${styles.benefits__heart}` } />
                </div>
                <p className={styles.benefits__title}>Tasty</p>
                <p className={styles.benefits__desc}>We have the most delicious coffee</p>
                </div>

                <div className={styles.benefits__item}>
                <div className={styles.benefits__img_wrapper}>
                    <img src={fast} alt='Rocket' className={`${styles.benefits__icon} ${styles.benefits__rocket}` } />
                </div>
                <p className={styles.benefits__title}>Fast</p>
                <p className={styles.benefits__desc}>Our cafe will serve you quickly</p>
                </div>

                <div className={styles.benefits__item}>
                <div className={styles.benefits__img_wrapper}>
                    <img src={available} alt='Money' className={`${styles.benefits__icon} ${styles.benefits__money}`} />
                </div>
                <p className={styles.benefits__title}>Available</p>
                <p className={styles.benefits__desc}>Cafe will serve at the most pleasant prices</p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Content;