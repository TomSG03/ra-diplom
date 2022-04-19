import React from 'react';
import CartItems from '../components/CartItems';
import CartOrder from '../components/CartOrder';
import { useSelector } from 'react-redux';

function PageCart() {
  const { items, status } = useSelector(state => state.reducerCart);


  if (items.length === 0 && status === "idle") {
    return (
      <section className="cart">
        <h2 className="text-center">В корзине нет товаров</h2>
      </section>
    )
  } 
  // else if (status === "pending") {
  //   return (
  //     <section className="cart">
  //       <h2 className="text-center">Подождите, идет оформление заказа</h2>
  //       <Loader />
  //     </section>
  //   )
  // }
  //  else if (items.length === 0 && status === "success") {
  //   return (
  //     <section className="cart">
  //       <h2 className="text-center">Заказ успешно оформлен</h2>
  //       {/* <Loader /> */}
  //       {/* {setTimeout(() => dispatch(cartReset()), 12 * 1000)} */}
  //     </section>
  //   )
  // } else if (status === "error") {
  //   return (
  //     <section className="cart">
  //       <h2 className="text-center">Что то пошло не так. Повторите позднее...</h2>
  //     </section>
  //   )
  // } 

  return (
    <>
      <CartItems />
      <CartOrder />
    </>
  )
}

export default PageCart