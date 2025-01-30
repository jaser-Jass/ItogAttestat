import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
 }
}

export default App;
