import React from 'react';
import { useStore } from 'effector-react';
import { Card, Button, ButtonGroup, Stack } from '@shopify/polaris';

import { $limits, deleteLimit, addRule } from '../root-component/model';

const LimitsList = () => {
  const limits = useStore($limits);

  const handleLimitDelete = (idArg) => {
    deleteLimit(idArg);
  };

  const handleLimitAdd = (idArg) => {
    addRule(idArg);
  };

  const renderLimitCards = (limitsArg) => {
    return limitsArg.map(({ id }) => {
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
            <Button onClick={() => handleLimitAdd(id)}>Add rule</Button>
          </Stack>
        </Card>
      );
    });
  };

  return <div>{renderLimitCards(limits)}</div>;
};

export default LimitsList;
