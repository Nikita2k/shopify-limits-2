import React from 'react';
import AsyncSelect from 'react-select/async';

import './style.css';

const goodsOptions = [
  {
    id: '1',
    label: 'book',
    value: 'book',
  },
  {
    id: '2',
    label: '5 Panel Camp Cap',
    value: '5-panel-hat',
  },
  {
    id: '3',
    label: 'x box',
    value: 'x-box',
  },
];

const filterGoods = (inputValue) => {
  return goodsOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterGoods(inputValue));
    }, 100);
  });

const handleProductSelect = (product) => {
  console.log(product);
};

const ProductInput = () => {
  return (
    <div className='product-input'>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={handleProductSelect}
      />
    </div>
  );
};

export default ProductInput;
