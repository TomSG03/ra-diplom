import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function HeaderCart() {
  const { countItems } = useSelector(state => state.reducerCart);
  const navigate = useNavigate();

  const handlerCliclCart = () => {
    navigate('/cart');
  }

  return (
    <div className="header-controls-pic header-controls-cart" onClick={handlerCliclCart}>
      {(countItems > 0 ) && <div className="header-controls-cart-full">{countItems}</div>}
      <div className="header-controls-cart-menu"></div>
    </div>
  )
}
