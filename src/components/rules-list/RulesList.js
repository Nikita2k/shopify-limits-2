import React from 'react';
import { useStore } from 'effector-react';
import { Stack } from '@shopify/polaris';

import { $limits } from '../root-component/model';

const RulesList = ({ limitId }) => {
  const limits = useStore($limits);

  const { rules } = limits.find((limit) => limit.id === limitId);

  const renderRules = (rulesList) => {
    return rulesList.map((rule, ruleIndex) => {
      return <div key={ruleIndex}>{rule.entity}</div>;
    });
  };

  return (
    <Stack vertical={true} spacing='loose'>
      {renderRules(rules)}
    </Stack>
  );
};

export default RulesList;
