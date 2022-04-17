import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showInpit } from '../../reducers/reducerHeadSearch'
import { resetSearch } from '../../reducers/reducerHeadSearch';
import { useNavigate  } from 'react-router-dom';
import { onChangeCatalogSearch } from '../../reducers/reducerCatalogSearch';

function HeaderSearchButton() {
  const { search, visible } = useSelector(state => state.reducerHeadSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(showInpit())
    if (visible && search.trim()) {
      dispatch(onChangeCatalogSearch(search))
      navigate('/catalog');
      dispatch(resetSearch())
    }
  }

  return (
    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handlerClick}></div>
  )
}

export default HeaderSearchButton