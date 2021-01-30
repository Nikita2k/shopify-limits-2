import React from 'react';
import ProductInput from '../product-input';

const ProductQuantityRuleItem = ({ ruleItem, limitId, ruleIndex }) => {
  console.log(ruleItem);
  return (
    <div>
      <ProductInput productObj={ruleItem.product} />
    </div>
  );
};

export default ProductQuantityRuleItem;
