import React from 'react';
import CatalogItems from './CatalogItems';
import CatalogMoreButton from './CatalogMoreButton';

function CatalogList({ items, noMore, ...props }) {
  const moreItems = (items.length % 6) === 0 ? true : false;

  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {props.children}
        <CatalogItems items={items} />
        {(moreItems && items.length > 0) && <CatalogMoreButton />}
      </section>
    </>
  )
}

export default CatalogList