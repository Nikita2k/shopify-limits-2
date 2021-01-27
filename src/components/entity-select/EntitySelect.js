import React from 'react';
import { Select } from '@shopify/polaris';

import { updateRuleType } from '../root-component/model';
import { limitRuleTypes } from '../auxInformation';

const EntitySelect = ({ entity, limitId, ruleIndex }) => {
  const handleSelectChange = (value) => {
    updateRuleType({ entity: value, limitId, ruleIndex });
  };

  return (
    <Select
      options={limitRuleTypes}
      onChange={handleSelectChange}
      value={entity}
    />
  );
};

export default EntitySelect;
