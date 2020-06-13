import React from 'react';

export default React.createContext({
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
  cart: [],
  addProduct: product => {},
  removeProduct: productId => {},
});
