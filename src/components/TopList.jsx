import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTL, } from '../actions/actionsTopList';
import Loader from './Loader';
import CatalogItem from './CatalogItem';

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
            <CatalogItem item={e} key={e.id}/>
          ))}
        </div>
      </section>
    )
  }
}

export default TopList