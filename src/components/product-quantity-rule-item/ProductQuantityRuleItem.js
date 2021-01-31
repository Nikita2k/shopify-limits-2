import React from 'react';
import { Select, TextField, Stack } from '@shopify/polaris';

import { quantityMatchers } from '../auxInformation';
import ProductInput from '../product-input';
import {
  setConditionForQuantityRule,
  setValueForQuantityRule,
} from '../root-component/model';

import './style.css';

const ProductQuantityRuleItem = ({
  valueItem,
  limitId,
  ruleIndex,
  deleteHandlerForProductInput,
  selectionHandlerForProductInput,
}) => {
  const { condition, value } = valueItem;

  const handleSelectChange = (value) => {
    setConditionForQuantityRule({
      condition: value,
      limitId,
      ruleIndex,
      valueItem,
    });
  };

  const handleValueChange = (newValue) =>
    setValueForQuantityRule({ value: newValue, limitId, ruleIndex, valueItem });

  return (
    <Stack vertical={true}>
      <ProductInput
        productObj={valueItem.product}
        limitId={limitId}
        ruleIndex={ruleIndex}
        deleteHandlerForProductInput={deleteHandlerForProductInput}
        selectionHandlerForProductInput={selectionHandlerForProductInput}
      />
      <Stack>
        <div className='quantity-rule-select'>
          <Select
            options={quantityMatchers}
            value={condition}
            onChange={handleSelectChange}
          />
        </div>
        <TextField value={value} onChange={handleValueChange} />
      </Stack>
    </Stack>
  );
};

export default ProductQuantityRuleItem;
