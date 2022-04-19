import React from 'react';
import CartItems from '../components/CartItems';
import CartOrder from '../components/CartOrder';
import { useSelector } from 'react-redux';

function PageCart() {
  const { countItems } = useSelector(state => state.reducerCart);

  if (countItems === 0) {
    return (
      <section className="cart">
        <h2 className="text-center">В корзине нет товаров</h2>
      </section>
    )
  }

  return (
    <>
      <CartItems />
      <CartOrder />
    </>
  )
}

export default PageCart