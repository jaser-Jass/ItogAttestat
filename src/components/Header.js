import React, { useState } from 'react';
import { IoCart } from "react-icons/io5";
import Order from './Order';

// Функция для подсчета общей стоимости товаров
const calculateSum = (orders) => {
  return orders.reduce((acc, order) => acc + parseFloat(order.price), 0);
};

const showOrders = (props) => {
  const summa = calculateSum(props.orders);

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>

          <li>Кабинет</li>
        </ul>
        <IoCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}


