import React from 'react'
import Catalog from '../components/Catalog'
import TopList from '../components/TopList'

import { useDispatch } from 'react-redux';
import { resetCatalog } from '../reducers/reducerCatalog'

function Home() {
  const dispatch = useDispatch();
  dispatch(resetCatalog())

  return (
    <div>
      <TopList />
      <Catalog />
    </div>
  )
}

export default Home