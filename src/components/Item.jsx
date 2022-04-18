import React, { useState } from 'react'


function Item({ item }) {
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(0);

  const handlerClickSize = ({ target }) => {
    setSize(Number(target.dataset.id))
  }

  const handlerClickCount = (e) => {
    const num = Number(e.target.name);
    let sizeCopy = count + num;
    if (sizeCopy > 10) sizeCopy = 10; 
    if (sizeCopy < 0) sizeCopy = 0; 
    setCount(sizeCopy)
  }

  const sizes = item.sizes.map((e, index) => e.avalible ? <span className={size === index ? "catalog-item-size selected" : "catalog-item-size"} key={index} data-id={index} onClick={handlerClickSize}>{e.size}</span> : '')

  return (
    <section className="catalog-item">
      <h2 className="text-center">{item.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={item.images[0]} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{item.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{item.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{item.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{item.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{item.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{item.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>Размеры в наличии: {sizes}</p>
            <p>Количество: <span className="btn-group btn-group-sm pl-2">
              <button className="btn btn-secondary" onClick={handlerClickCount} name='-1'>-</button>
              <span className="btn btn-outline-primary">{count}</span>
              <button className="btn btn-secondary" onClick={handlerClickCount} name='+1'>+</button>
            </span>
            </p>
          </div>
          <button className="btn btn-danger btn-block btn-lg" disabled={(count > 0) && (size !== null) ? false : true}>В корзину</button>
        </div>
      </div>
    </section>
  )
}

export default Item