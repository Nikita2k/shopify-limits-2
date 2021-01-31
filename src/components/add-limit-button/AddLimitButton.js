import React from 'react';
import { Button, Stack } from '@shopify/polaris';
import { useStore } from 'effector-react';

import { addLimit } from '../root-component/model';
import { $loading } from '../spinner/model';

import './style.css';

const AddLimitButton = () => {
  const loading = useStore($loading);

  const handleAddLimit = () => {
    addLimit();
  };

  return (
    <div className='add-limit-button'>
      <Stack distribution='center'>
        <Button primary disabled={loading} onClick={handleAddLimit}>
          Add limit
        </Button>
      </Stack>
    </div>
  );
};

export default AddLimitButton;
