import React from 'react';
import { Stack } from '@shopify/polaris';

import ConditionSelect from '../condition-select';
import ValueInput from '../value-input';

const TextBasedRule = ({ condition, value, limitId, ruleIndex }) => {
  return (
    <Stack>
      <ConditionSelect
        conditionType='string_match'
        condition={condition}
        limitId={limitId}
        ruleIndex={ruleIndex}
      />
      <ValueInput value={value} limitId={limitId} ruleIndex={ruleIndex} />
    </Stack>
  );
};

export default TextBasedRule;
