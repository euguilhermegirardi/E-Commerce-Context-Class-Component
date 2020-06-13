import React, { Component } from 'react';

import ShopContext from '../../context/ShopContext';
import Header from '../../components/Header';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          <>
            <Header cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
            />

            <ul className="product-list">
              {context.allProducts.map(product => (
                <li className="product-list__li" key={product.id}>
                  <div className="product-list__item">
                    <img src={product.image} alt="img" />
                    <strong className="product-list__strong">{product.title}</strong><span className="product-list__price">€{product.price}</span>
                  </div>
                  <div className="product-list__btn-container">
                    <button className="product-list__btn" onClick={context.addProduct.bind(this, product)}>
                      <span className="product-list__btn-span">Add to Cart</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

      </ShopContext.Consumer>
    )
  }
};

export default Home;
