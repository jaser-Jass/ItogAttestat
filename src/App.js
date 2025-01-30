import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: 49,
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'ctables',
          price: 149,
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofas',
          price: 245,
        },
        {
          id: 4,
          title: 'Шкаф',
          img: 'wardrobe3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofas',
          price: 456,
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  deleteOrder(id) {
    this.setState((prevState) => {
      const updatedOrders = prevState.orders.filter((el) => el.id !== id);
      console.log("Updated orders after delete:", updatedOrders); // Выводим обновленные заказы
      return { orders: updatedOrders };
    });
  }

  addToOrder(item) {
    let isInArray = this.state.orders.some((el) => el.id === item.id);
    if (!isInArray) {
      this.setState((prevState) => ({
        orders: [...prevState.orders, item],
      }));
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
}

export default App;

