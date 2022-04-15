import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTotal, } from '../actions/actionsCatalog';
import Item from './Item';
import Loader from './Loader';


function Catalog(props) {
  const { items, loading, error } = useSelector(state => state.reducerCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTotal(dispatch)
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  if (items && !loading) {
    return (
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {props.children}
        <div className="row">
          {items.map((e) => (
            <Item item={e} key={e.id}/>
          ))}
        </div>
      </section>
    )
  }
}

export default Catalog