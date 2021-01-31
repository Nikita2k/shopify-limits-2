import React, { useEffect, useState } from 'react';
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

  const [limitsIdsFromServer, setLimitsIdsFromServer] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchLimits().then((data) => {
      setFetchedLimits(data);

      const fetchedLimitsIds = [];

      data.forEach((limit) => fetchedLimitsIds.push(limit.id));
      setLimitsIdsFromServer(fetchedLimitsIds);

      setLoading(false);
    });
  }, []);

  const handleLimitDelete = (idArg) => {
    if (limitsIdsFromServer.includes(idArg)) {
      // TODO: send request to server to delete limit
      console.log('Send request to server to delete limit');
      deleteLimit(idArg);
    } else {
      console.log('Delete limit only locally');
      deleteLimit(idArg);
    }
  };

  const handleRuleAdd = (idArg) => {
    addRule(idArg);
  };

  const handleSaveLimit = (limit) => {
    // TODO: send newly created or updated limit to server
    console.log('send newly created or updated limit to server');
    console.log(limit);
  };

  const renderLimitCards = (limitsArg) => {
    return limitsArg.map((limit) => {
      const { id, rules } = limit;
      return (
        <Card sectioned key={id}>
          <Stack vertical={true} spacing='loose'>
            <ButtonGroup segmented>
              <Button onClick={() => handleSaveLimit(limit)}>Save</Button>
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
