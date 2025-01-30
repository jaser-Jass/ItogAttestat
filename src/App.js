import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems:[],
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
          category: 'tables',
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
          category: 'wardrobes',
          price: 456,
        },
      ],
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
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
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
}

export default App;

