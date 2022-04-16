import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import { fetchCategories } from '../actions/actionsCatalog';
import CategoriesItem from './CategoriesItem';

export default function Categories() {
  const { categories, loading, error } = useSelector(state => state.reducerCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(dispatch)
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  const allCategories = [{ id: 0, title: "Все" }, ...categories];

  return (
    <ul className="catalog-categories nav justify-content-center">
      {allCategories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </ul>
  )
}
