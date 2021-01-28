import React from 'react';
import { Stack } from '@shopify/polaris';

import ConditionSelect from '../condition-select';
import NumberInput from '../value-input';

const CartPriceRule = ({ condition, value, limitId, ruleIndex }) => {
  return (
    <Stack>
      <ConditionSelect
        conditionType='quantity'
        condition={condition}
        limitId={limitId}
        ruleIndex={ruleIndex}
      />
      <NumberInput value={value} limitId={limitId} ruleIndex={ruleIndex} />
    </Stack>
  );
};

export default CartPriceRule;
