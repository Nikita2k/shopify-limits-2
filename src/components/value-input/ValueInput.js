import React, { useCallback } from 'react';
import { TextField } from '@shopify/polaris';

import { updateValue } from '../root-component/model';

const ValueInput = ({ value, limitId, ruleIndex }) => {
  const handleChange = useCallback(
    (newValue) => updateValue({ value: newValue, limitId, ruleIndex }),
    [limitId, ruleIndex]
  );

  return <TextField value={value} onChange={handleChange} />;
};

export default ValueInput;
