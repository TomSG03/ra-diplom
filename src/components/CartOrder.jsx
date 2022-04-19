import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postOrder, cartReset } from '../reducers/reducerCart';

function CartOrder() {
  const [message, setMessage] = useState('');
  const { status } = useSelector(state => state.reducerCart);

  const START_STATE = { phone: "", address: "", agreement: false };
  const [form, setForm] = useState(START_STATE);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postOrder({ phone: form.phone, address: form.address })).then(() => {
      setForm(START_STATE);
      dispatch(cartReset());
      // setTimeout(() => dispatch(cartReset()), 4 * 1000)
    });
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
       setMessage('');
    }, 6 * 1000);
 };

 useEffect(() => {
    if (status === 'pending') showMessage('Оформляем покупку, пожалуйста подождите');
    if (status === 'success') showMessage('✔️ Заказ успешно оформлен, спасибо за покупку!');
    if (status === 'error') showMessage('⚠️ Что-то пошло не так, пожалуйста попробуйте позже!');
 }, [status]);

  return (
    <>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input className="form-control" id="phone" placeholder="Ваш телефон" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input className="form-control" id="address" placeholder="Адрес доставки" name="address" value={form.address} onChange={handleChange} required />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="agreement" name="agreement" checked={form.agreement} onChange={handleChange} required />
              <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
            </div>
            <button type="submit" className="btn btn-outline-secondary" disabled={!form.agreement}>Оформить</button>
          </form>
        </div>
        <div className="cart-warning">{message}</div>
      </section>
    </>
  )
}

export default CartOrder