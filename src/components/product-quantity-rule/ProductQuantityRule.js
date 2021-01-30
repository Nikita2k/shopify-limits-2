import React from 'react';
import { Stack, Button } from '@shopify/polaris';

import { addProductQuantityRule } from '../root-component/model';
import ProductQuantityRuleItem from '../product-quantity-rule-item';

const ProductQuantityRule = ({ value, limitId, ruleIndex }) => {
  const ruleItems = [];

  for (let i = 0; i < value.length; i++) {
    ruleItems.push(
      <ProductQuantityRuleItem
        key='i'
        ruleItem={value[i]}
        limitId={limitId}
        ruleIndex={ruleIndex}
      />
    );
  }

  const handleAddQuantityRule = () => {
    addProductQuantityRule({ limitId, ruleIndex });
  };

  return (
    <Stack vertical>
      {ruleItems}
      <Button onClick={handleAddQuantityRule}>Add</Button>
    </Stack>
  );
};

export default ProductQuantityRule;
