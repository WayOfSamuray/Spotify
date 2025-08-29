import styles from '../Delicious/Delicious.module.css';
import room from '../images/room.jpg';
import kitchen from '../images/kitchen.jpg';


const Delicious = () => {
    return (
        <div>
            <section className={styles.stats}>
            <div className={styles.container}>
                <div className={styles.stats__img_wrapper}>
                    <img src={room} alt='Комната' className={styles.stats__img} />
                </div>
                <div className={styles.stats__text}>
                    <h2 className={styles.stats__title}>We Make <span>Delicious</span></h2>
                    <p className={styles.stats__desc}>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                    <img src={kitchen} alt='Кухня' className={styles.stats__pic}></img>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Delicious;