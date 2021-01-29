import React, { useState } from 'react';
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

const ProductInput = () => {
  const [zIndex, setZIndex] = useState(100);

  const handleZIndexIncrease = () => {
    setZIndex(101);
  };

  const handleZIndexDecrease = () => {
    setZIndex(100);
  };

  const handleProductSelect = (product) => {
    console.log(product);
  };
  return (
    <div className='product-input' style={{ zIndex: zIndex }}>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={handleProductSelect}
        onFocus={handleZIndexIncrease}
        onBlur={handleZIndexDecrease}
      />
    </div>
  );
};

export default ProductInput;
