import React from 'react';

import CartPriceRule from '../cart-price-rule';
import TextBasedRule from '../text-based-rule';
import ProductsListRule from '../products-list-rule';

const EntityDisplayMatcher = ({
  entity,
  condition,
  limitId,
  ruleIndex,
  value,
}) => {
  switch (entity) {
    case 'has_one_of_products':
      return <ProductsListRule />;
    case 'cart_price':
      return (
        <CartPriceRule
          condition={condition}
          value={value}
          limitId={limitId}
          ruleIndex={ruleIndex}
        />
      );
    case 'product_title':
    case 'sku':
    case 'vendor':
    case 'collection':
      return (
        <TextBasedRule
          condition={condition}
          value={value}
          limitId={limitId}
          ruleIndex={ruleIndex}
        />
      );
    default:
      return <div>Matcher</div>;
  }
};

export default EntityDisplayMatcher;
