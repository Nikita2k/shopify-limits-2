import React from 'react';
import { Select } from '@shopify/polaris';

import { updateCondition } from '../root-component/model';
import { quantityMatchers, stringMatchers } from '../auxInformation';

const ConditionSelect = ({ conditionType, condition, limitId, ruleIndex }) => {
  const targetMatchers =
    conditionType === 'quantity' ? quantityMatchers : stringMatchers;

  const handleSelectChange = (value) => {
    updateCondition({ condition: value, limitId, ruleIndex });
  };

  return (
    <Select
      options={targetMatchers}
      onChange={handleSelectChange}
      value={condition}
    />
  );
};

export default ConditionSelect;
