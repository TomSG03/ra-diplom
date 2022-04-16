import React from 'react'
import Catalog from '../components/Catalog'
import CatalogSearch from '../components/CatalogSearch'

import { useDispatch } from 'react-redux';
import { resetCatalog } from '../reducers/reducerCatalog'

function PageCatalog() {
  const dispatch = useDispatch();
  dispatch(resetCatalog())

  return (
    <div>
      <Catalog>
        <CatalogSearch />
      </Catalog>
    </div>
  )
}

export default PageCatalog