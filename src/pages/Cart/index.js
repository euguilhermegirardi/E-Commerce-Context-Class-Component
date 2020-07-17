import React, { Component } from 'react';

import ShopContext from '../../context/ShopContext';
import './styles.scss';
import Header from '../../components/Header';

class Cart extends Component {
  static contextType = ShopContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <>
        <Header cartItemNumber={this.context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
        />
        {this.context.cart.length <= 0 && <p className="no-item">No item in the Cart!</p>}
        <ul className="list">
          {this.context.cart.map(cartItem => (
            <li className="list__item" key={cartItem.id}>
              <img className="list__img" src={cartItem.image} alt="img" />
              <div className="list__info-container">
                <strong className="list__strong">{cartItem.title}</strong> €{cartItem.price}
                <span className="list__qtd">Qty: {cartItem.quantity}</span>

                <button className="list__btn" onClick={this.context.removeProduct.bind(this, cartItem.id)}>
                  <span className="list__btn-span">Remove from Cart</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }
};

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeItem: id => dispatch(removeProductFromCart(id))
//   }
// };

export default Cart;
