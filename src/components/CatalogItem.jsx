import React from 'react';
import { Link } from 'react-router-dom';

function CatalogItem({ item }) {
  return (
    <>
      <div className="col-4">
        {/* <div className="card catalog-item-card"> */}
          <div className="card catalog-item-card">
            <div className="card-img-container">
              <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title} />
            </div>
            <div className="card-body">
              <p className="card-text">{item.title}</p>
              <p className="card-text">{`${item.price} руб.`}</p>
              <Link to={`/catalog/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default CatalogItem

