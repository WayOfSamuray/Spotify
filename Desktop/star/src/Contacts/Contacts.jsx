import styles from "../Contacts/Contacts.module.css";
import house from "../images/signboard.jpg";

const Contacts = () => {
  return (
    <div>
      <section className={styles.contacts}>
        <div className={styles.container}>
          <div className={styles.contacts__text}>
            <h2 className={styles.contacts__title}>
              Our <span> Contacts</span>
            </h2>
            <div>
              <p className={styles.contacts__desc}>
                Have time to buy the most harmonious drinks in the new Starbucks
                coffee and don't forget about the discount!
              </p>
              <a href="tel:+79999999999" className={styles.contacts__phone}>
                +7-999-999-99-99
              </a>
            </div>
          </div>

          <div className={styles.contacts__img_wrapper}>
            <div className={styles.contacts__img__inner__wrapper}>
              <img src={house} alt="House" className={styles.contacts__img} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
