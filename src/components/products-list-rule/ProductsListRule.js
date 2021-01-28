import React from 'react';

import ProductInput from '../product-input';

const ProductsListRule = () => {
  const x = { id: '123', title: 'FooBar' };
  return (
    <ProductInput value={x} onChange={(products) => console.log(products)} />
  );
};

export default ProductsListRule;
