import React from 'react';

import ProductInput from '../product-input';

const ProductsListRule = ({ value }) => {
  const productInputArray = [];

  for (let i = 0; i <= value.length; i++) {
    productInputArray.push(<ProductInput key={i} />);
  }

  return <div>{productInputArray}</div>;
};

export default ProductsListRule;
