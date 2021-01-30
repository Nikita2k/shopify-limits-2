import React from 'react';
import ProductInput from '../product-input';

const ProductQuantityRuleItem = ({
  ruleItem,
  limitId,
  ruleIndex,
  deleteHandlerForProductInput,
}) => {
  console.log(ruleItem);
  return (
    <div>
      <ProductInput
        productObj={ruleItem.product}
        limitId={limitId}
        ruleIndex={ruleIndex}
        deleteHandlerForProductInput={deleteHandlerForProductInput}
      />
    </div>
  );
};

export default ProductQuantityRuleItem;
