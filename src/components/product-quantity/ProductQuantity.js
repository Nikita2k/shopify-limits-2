import React from 'react';
import { Stack, Button } from '@shopify/polaris';

const ProductQuantity = ({ value, limitId, ruleIndex }) => {
  console.log(value);

  return (
    <Stack vertical>
      Product quantity
      <Button>Add</Button>
    </Stack>
  );
};

export default ProductQuantity;
