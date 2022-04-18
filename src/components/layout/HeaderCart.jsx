import React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function HeaderCart() {
  const navigate = useNavigate();

  const handlerCliclCart = () => {
    navigate('/cart');
  }
  
  return (
    <div className="header-controls-pic header-controls-cart" onClick={handlerCliclCart}>
      <div className="header-controls-cart-full">1</div>
      <div className="header-controls-cart-menu"></div>
    </div>
  )
}
