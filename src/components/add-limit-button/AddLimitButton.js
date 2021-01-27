import React from 'react';

import { Button, Stack } from '@shopify/polaris';

import './style.css';

const AddLimitButton = () => {
  const handleAddLimit = () => {
    console.log('add');
  };

  return (
    <div className='add-limit-button'>
      <Stack distribution='center'>
        <Button primary onClick={handleAddLimit}>
          Add limit
        </Button>
      </Stack>
    </div>
  );
};

export default AddLimitButton;
