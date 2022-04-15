import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTL, } from '../actions/actionsTopList';
import Loader from './Loader';

function TopList() {
  const { items, loading, error } = useSelector(state => state.reducerTopList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTL(dispatch)
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  if (items && !loading) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {items.map((e) => (
            <div className="col-4" key={e.id}>
              <div className="card">
                <img src={e.images[0]} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                <div className="card-body">
                  <p className="card-text">{e.title}</p>
                  <p className="card-text">{`${e.price} руб.`}</p>
                  <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default TopList