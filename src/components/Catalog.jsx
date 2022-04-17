import React, { useEffect } from 'react'
import Categories from './Categories';
import CatalogList from './CatalogList';
import Loader from './Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../actions/actionsCatalog';

function Catalog(props) {
  const { items, loading, error, categoryId, more, searchCatalogItem } = useSelector(state => state.reducerCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCatalog(dispatch, categoryId, more, searchCatalogItem)
  }, [dispatch, categoryId, more, searchCatalogItem])

  if (items) {
    return (
      <>
        {items &&
          <CatalogList items={items}>
            {props.children}
            <Categories />
          </CatalogList>
        }
        {loading && <Loader />}
      </>
    )
  }
}

export default Catalog