import React from 'react';
import { useStore } from 'effector-react';
import { Stack, Icon } from '@shopify/polaris';
import { DeleteMajor } from '@shopify/polaris-icons';

import EntityDisplayMatcher from '../entity-display-matcher';
import EntitySelect from '../entity-select';
import { $limits, deleteRule } from '../root-component/model';

import './style.css';

const RulesList = ({ limitId }) => {
  const limits = useStore($limits);

  const { rules } = limits.find((limit) => limit.id === limitId);

  const handleDeleteRule = (limitIdArg, ruleIndexArg) => {
    deleteRule({ limitIdArg, ruleIndexArg });
  };

  const renderRules = (rulesList) => {
    return rulesList.map((rule, ruleIndex) => {
      const { entity, condition, value } = rule;
      return (
        <div key={ruleIndex}>
          <Stack>
            <div className='rule-selector'>
              <EntitySelect
                entity={entity}
                limitId={limitId}
                ruleIndex={ruleIndex}
              />
            </div>
            <EntityDisplayMatcher
              entity={entity}
              condition={condition}
              limitId={limitId}
              ruleIndex={ruleIndex}
              value={value}
            />
            <span
              className='delete-icon'
              onClick={() => handleDeleteRule(limitId, ruleIndex)}
            >
              <Icon source={DeleteMajor} />
            </span>
          </Stack>
        </div>
      );
    });
  };

  return (
    <Stack vertical={true} spacing='loose'>
      {renderRules(rules)}
    </Stack>
  );
};

export default RulesList;
