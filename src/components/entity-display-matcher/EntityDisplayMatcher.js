import React from 'react';

import CartPriceRule from '../cart-price-rule';

const EntityDisplayMatcher = ({ rule }) => {
  switch (rule.entity) {
    case 'cart_price':
      return <CartPriceRule rule={rule} />;
    default:
      return <div>Matcher</div>;
  }
};

export default EntityDisplayMatcher;
