import React from 'react';

import CartPriceRule from '../cart-price-rule';

const EntityDisplayMatcher = ({
  entity,
  condition,
  limitId,
  ruleIndex,
  value,
}) => {
  switch (entity) {
    case 'cart_price':
      return (
        <CartPriceRule
          condition={condition}
          limitId={limitId}
          ruleIndex={ruleIndex}
          value={value}
        />
      );
    default:
      return <div>Matcher</div>;
  }
};

export default EntityDisplayMatcher;
