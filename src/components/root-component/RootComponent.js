import React from 'react';

import HeaderTitle from '../header-title';
import AddLimitButton from '../add-limit-button';
import LimitsList from '../limits-list';

const RootComponent = () => {
  return (
    <div>
      <HeaderTitle />
      <AddLimitButton />
      <LimitsList />
    </div>
  );
};

export default RootComponent;
