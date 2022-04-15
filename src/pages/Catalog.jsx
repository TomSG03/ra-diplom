import React from 'react'
import Catalog from '../components/Catalog'
import Search from '../components/Search'

function Home() {
  return (
    <div>
      <Catalog>
        <Search />
      </Catalog>
    </div>
  )
}

export default Home