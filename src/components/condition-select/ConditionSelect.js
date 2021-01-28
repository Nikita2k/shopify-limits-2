import React from 'react';
import { Select } from '@shopify/polaris';

import { updateCondition } from '../root-component/model';
import { quantityMatchers, stringMatchers } from '../auxInformation';

import './style.css';

const ConditionSelect = ({ conditionType, condition, limitId, ruleIndex }) => {
  const targetMatchers =
    conditionType === 'quantity' ? quantityMatchers : stringMatchers;

  const handleSelectChange = (value) => {
    updateCondition({ condition: value, limitId, ruleIndex });
  };

  return (
    <div className='condition-select'>
      <Select
        options={targetMatchers}
        onChange={handleSelectChange}
        value={condition}
      />
    </div>
  );
};

export default ConditionSelect;
