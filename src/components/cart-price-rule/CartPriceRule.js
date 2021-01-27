import React from 'react';

import ConditionSelect from '../condition-select';

const CartPriceRule = ({ condition, limitId, ruleIndex }) => {
  return (
    <div>
      <ConditionSelect
        conditionType='quantity'
        condition={condition}
        limitId={limitId}
        ruleIndex={ruleIndex}
      />
    </div>
  );
};

export default CartPriceRule;
