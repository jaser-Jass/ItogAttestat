import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
        id: 1,
        title: 'Стул серый',
        img: 'chair2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        category: 'chairs',
        price: '49.99'
        },
               {
        id: 2,
        title: 'Стол',
        img: 'table3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        category: 'ctables',
        price: '149.99'
        },
                  {
        id: 3,
        title: 'Диван',
        img: 'sofa3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        category: 'sofas',
        price: '349.00'
        },
                         {
        id: 4,
        title: 'Шкаф',
        img: 'wardrobe3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        category: 'sofas',
        price: '449.00'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
 }
 addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
    isInArray = true
  })
  if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
 }
}

export default App;
