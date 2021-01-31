import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { Card, Button, ButtonGroup, Stack } from '@shopify/polaris';

import RulesList from '../rules-list';
import { fetchLimits } from '../Api/fetchLimits';
import {
  $limits,
  deleteLimit,
  addRule,
  setFetchedLimits,
} from '../root-component/model';
import { setLoading } from '../spinner/model';

const LimitsList = () => {
  const limits = useStore($limits);

  useEffect(() => {
    setLoading(true);
    fetchLimits()
      .then((data) => setFetchedLimits(data))
      .finally(() => setLoading(false));
  }, []);

  const handleLimitDelete = (idArg) => {
    deleteLimit(idArg);
  };

  const handleRuleAdd = (idArg) => {
    addRule(idArg);
  };

  const renderLimitCards = (limitsArg) => {
    return limitsArg.map((limit) => {
      const { id, rules } = limit;
      return (
        <Card sectioned key={id}>
          <Stack vertical={true} spacing='loose'>
            <ButtonGroup segmented>
              <Button>Save</Button>
              <Button>Set Alert Text</Button>
              <Button destructive onClick={() => handleLimitDelete(id)}>
                Delete
              </Button>
            </ButtonGroup>
            {rules.length ? <RulesList limitId={id} /> : null}
            <Button onClick={() => handleRuleAdd(id)}>Add rule</Button>
          </Stack>
        </Card>
      );
    });
  };

  return <div>{renderLimitCards(limits)}</div>;
};

export default LimitsList;
