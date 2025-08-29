import styles from "../Events/Events.module.css";

const Events = () => {
  return (
    <div>
      <section className={styles.events}>
        <div className={styles.container}>
          <div className={`${styles.text__row} ${styles.text__row__reverse}`}>
            <h2 className={`${styles.title} ${styles.text__row__title}`}>
              Our New<span> Events</span>
            </h2>
            <div>
              <p className={styles.text__row__desc}>
                Only in 2021 we have made more than 100,000 orders for you, your
                loved ones, all of you, and in 2022 we are ready to destroy the
                market
              </p>
            </div>
          </div>

        <div className={`${styles.events__inner__wrapper} ${styles.event}`}>
          <div className={styles.event__price}>
            <h3 className={styles.event__title}>TWO COFFE FOR 1 PRICE</h3>
            <a href="#!" className={styles.event__btn}>More</a>
          </div>

          <div className={styles.event__kitchen}>
            <h3 className={styles.event__title}>KITCHEN <br/> TOUR</h3>
            <a href="#!" className={styles.event__btn}>More</a>
          </div>

          <div className={styles.event__coffee}>
            <h3 className={styles.event__title}>FREE COFFEE FOR 3 COFFEE</h3>
            <a href="#!" className={styles.event__btn}>More</a>
          </div>

          <div className={styles.event__socials}>
            <h3 className={styles.event__title}>OUR <br/>SOCIALS</h3>
            <a href="#!" className={styles.event__btn}>More</a>
          </div>

          <div className={styles.event__choose}>
            <h3 className={styles.event__title}>WHY YOU CHOOSE US?</h3>
            <a href="#!" className={styles.event__btn}>More</a>
          </div>

          
        </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
