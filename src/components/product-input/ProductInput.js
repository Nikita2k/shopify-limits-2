import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Stack, Icon } from '@shopify/polaris';
import { MobileCancelMajor } from '@shopify/polaris-icons';

import { goodsOptions } from '../auxInformation';

import './style.css';

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

const ProductInput = ({
  productObj,
  deleteHandlerForProductInput,
  selectionHandlerForProductInput,
}) => {
  const [zIndex, setZIndex] = useState(100);

  const handleZIndexIncrease = () => {
    setZIndex(101);
  };

  const handleZIndexDecrease = () => {
    setZIndex(100);
  };

  const handleProductSelect = (product) => {
    selectionHandlerForProductInput(product);
  };

  const handleDeleteProductInput = () => {
    deleteHandlerForProductInput();
  };

  return (
    <Stack alignment='center'>
      <div className='product-input' style={{ zIndex: zIndex }}>
        <AsyncSelect
          value={productObj}
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          onChange={handleProductSelect}
          onFocus={handleZIndexIncrease}
          onBlur={handleZIndexDecrease}
        />
      </div>
      <span onClick={handleDeleteProductInput}>
        <Icon source={MobileCancelMajor} />
      </span>
    </Stack>
  );
};

export default ProductInput;
