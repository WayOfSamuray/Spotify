import brown from '../../images/cups/brown.png';
import green__big from '../../images/cups/green__big.png';
import green from '../../images/cups/green.png';
import yellow from '../../images/cups/yellow.png';
import style from './ShopPage.module.css';
import { useState } from 'react';

const products = [
    { 
        id: 1, 
        title: 'Latte', 
        price: 7.45,
        image: green
    },
    { 
        id: 2, 
        title: 'Espresso', 
        price: 3.45,
        image: brown
    },
    { 
        id: 3, 
        title: 'Macchiato', 
        price: 6.45,
        image: yellow
    },
    { 
        id: 4, 
        title: 'Cappucino', 
        price: 7.45,
        image: green__big
    },
];

const ShopPage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={style.shop}>
            <div className={style.hero}>
                <h1 className={style.title}>☕ Coffee Shop</h1>
                <p className={style.subtitle}>Свежий кофе с собой</p>
            </div>

            <section className={style.products}>
                <h2 className={style.sectionTitle}>Наше меню</h2>
                <div className={style.productsGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={style.productCard}>
                            <div className={style.productImage}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={style.productInfo}>
                                <h3 className={style.productTitle}>{product.title}</h3>
                                <p className={style.productPrice}>${product.price}</p>
                                <button 
                                    className={style.addButton}
                                    onClick={() => addToCart(product)}
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={style.cart}>
                <h2 className={style.sectionTitle}>🛒 Ваш заказ</h2>
                {cart.length === 0 ? (
                    <div className={style.emptyCart}>
                        <p>Корзина пуста</p>
                        <span className={style.emptyIcon}>🛒</span>
                    </div>
                ) : (
                    <div className={style.cartContent}>
                        <div className={style.cartItems}>
                            {cart.map((item, index) => (
                                <div key={index} className={style.cartItem}>
                                    <img src={item.image} alt={item.title} className={style.cartItemImage} />
                                    <div className={style.cartItemInfo}>
                                        <span className={style.cartItemTitle}>{item.title}</span>
                                        <span className={style.cartItemPrice}>${item.price}</span>
                                    </div>
                                    <button 
                                        className={style.removeButton}
                                        onClick={() => removeFromCart(index)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={style.cartTotal}>
                            <strong>Итого: ${total.toFixed(2)}</strong>
                            <button className={style.checkoutButton}>
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default ShopPage;