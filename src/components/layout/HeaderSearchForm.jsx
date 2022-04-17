import React from 'react';
import { onChange, resetSearch } from '../../reducers/reducerHeadSearch';
import { onChangeCatalogSearch } from '../../reducers/reducerCatalogSearch';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

function HeaderSearchForm() {
  const { search, visible } = useSelector(state => state.reducerHeadSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerChange = ({ target }) => {
    dispatch(onChange(target.value))
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(onChangeCatalogSearch(search))
      navigate('/catalog');
      dispatch(resetSearch())
    }
  }

  const clsNm = visible ? "header-controls-search-form form-inline" : "header-controls-search-form form-inline invisible"

  return (
    <form data-id="search-form" className={clsNm} onSubmit={handlerSubmit}>
      <input className="form-control" placeholder="Поиск" value={search} onChange={handlerChange} />
    </form>
  )
}

export default HeaderSearchForm