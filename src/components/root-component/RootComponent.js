import React from 'react';
import { useStore } from 'effector-react';

import HeaderTitle from '../header-title';
import AddLimitButton from '../add-limit-button';
import LimitsList from '../limits-list';

import Spinner from '../spinner';
import { $loading } from '../spinner/model';

const RootComponent = () => {
  const loading = useStore($loading);

  return (
    <div>
      <HeaderTitle />
      <AddLimitButton />
      {loading && <Spinner />}
      <LimitsList />
    </div>
  );
};

export default RootComponent;
