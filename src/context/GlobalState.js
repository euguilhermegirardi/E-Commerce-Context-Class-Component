import React, { Component } from 'react';
import ShopContext from './ShopContext';

class GlobalState extends Component {

  state = {
    products: [
      {
        id: 'p1',
        title: 'Men Atwood Canvas Trainers',
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
        price: 29.99
      },
      {
        id: 'p2',
        title: 'Mens Speedcross 4 Trail Running Shoes',
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg",
        price: 12.99
      },
      {
        id: 'p3',
        title: 'Mens Tazon 6 FM Running Shoes',
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
        price: 10.99
      },
      {
        id: 'p4',
        title: 'Mens Status 2.0 Pexton Boat Shoes',
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
        price: 42.99
      }
    ],
    cart: []
  };

  addProductToCart = product => {
    console.log('adding item', product);

    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 700)
  };

  removeProductFromCart = productId => {
    console.log('removing item with id:' + productId);

    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity--;

    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 700)
  };

  render () {
    return (
      <ShopContext.Provider
        value={{
        allProducts: this.state.products,
        cart: this.state.cart,
        addProduct: this.addProductToCart,
        removeProduct: this.removeProductFromCart
      }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
};

export default GlobalState;
