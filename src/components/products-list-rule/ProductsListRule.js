import React from 'react';
import { Stack, Button } from '@shopify/polaris';

import ProductInput from '../product-input';
import {
  addProductInputField,
  deleteProductInputField,
} from '../root-component/model';

const ProductsListRule = ({ value, limitId, ruleIndex }) => {
  const productInputArray = [];

  for (let i = 0; i < value.length; i++) {
    const deleteHandlerForProductInput = () => {
      deleteProductInputField({
        limitId,
        ruleIndex,
        productInputId: value[i].id,
      });
    };

    productInputArray.push(
      <ProductInput
        key={i}
        productObj={value[i]}
        limitId={limitId}
        ruleIndex={ruleIndex}
        deleteHandlerForProductInput={deleteHandlerForProductInput}
      />
    );
  }

  const handleAddProductInputField = () => {
    addProductInputField({ limitId, ruleIndex });
  };

  return (
    <Stack vertical={true}>
      {productInputArray}
      <Button onClick={handleAddProductInputField}>Add</Button>
    </Stack>
  );
};

export default ProductsListRule;
