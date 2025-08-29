import styles from '../Cups/Cups.module.css';
import green from '../images/cups/green.png';
import brown from '../images/cups/brown.png';
import green__big from '../images/cups/green__big.png';
import yellow from '../images/cups/yellow.png';

const Cups = () => {
    return (
        <div>
        <section className={styles.products}>
           <div className={styles.container}>
            <div className={styles.products__text}>
                <h2 className={styles.products__title}>New Our <span> Products</span></h2>
                <div>
                <p className={styles.products__desc}>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
                </div>
                </div>
                <div className={styles.products__cards}>
                    <div className={styles.card}>
                        <div className={styles.card__img_wrapper}>
                            <img src={green} alt='Coffee' className={styles.card__img} />
                        </div>
                        <p className={styles.card__title}>Latte</p>
                        <p className={styles.card__desc}>Our cafe will serve you quickly</p>
                        <div className={styles.card__row}>
                            <p className={styles.card__price}>7,45$</p>
                            <p className={styles.card__size}>330 ml</p>
                        </div>
                        <button className={styles.btn__card}>Buy Product</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card__img_wrapper}>
                            <img src={brown} alt='Coffee' className={styles.card__img} />
                        </div>
                        <p className={styles.card__title}>Espresso</p>
                        <p className={styles.card__desc}>Our cafe will serve you quickly</p>
                        <div className={styles.card__row}>
                            <p className={styles.card__price}>3,45$</p>
                            <p className={styles.card__size}>330 ml</p>
                        </div>
                        <button className={styles.btn__card}>Buy Product</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card__img_wrapper}>
                            <img src={yellow} alt='Coffee' className={styles.card__img} />
                        </div>
                        <p className={styles.card__title}>Macchiato</p>
                        <p className={styles.card__desc}>Our cafe will serve you quickly</p>
                        <div className={styles.card__row}>
                            <p className={styles.card__price}>6,45$</p>
                            <p className={styles.card__size}>330 ml</p>
                        </div>
                        <button className={styles.btn__card}>Buy Product</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card__img_wrapper}>
                            <img src={green__big} alt='Coffee' className={styles.card__img} />
                        </div>
                        <p className={styles.card__title}>Cappucino</p>
                        <p className={styles.card__desc}>Our cafe will serve you quickly</p>
                        <div className={styles.card__row}>
                            <p className={styles.card__price}>7,45$</p>
                            <p className={styles.card__size}>330 ml</p>
                        </div>
                        <button className={styles.btn__card}>Buy Product</button>
                    </div>
                </div>
           </div>
            </section>    
        </div>
    )
}

export default Cups;