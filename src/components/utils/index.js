import { defaultRule } from '../auxInformation';
import { v4 as uuidv4 } from 'uuid';

export const getDefaultRule = (entity) => {
  switch (entity) {
    case 'has_one_of_products':
      return {
        entity,
        condition: null,
        value: [],
      };
    // TODO: add product picker to returned object
    case 'product_quantity':
      return {
        entity,
        condition: null,
        value: [],
      };
    case 'cart_price':
      return defaultRule;
    case 'product_title':
    case 'sku':
    case 'vendor':
    case 'collection':
      return {
        entity,
        condition: 'starts_with',
        value: '',
      };
    default:
      return defaultRule;
  }
};

export const makeDefaultProductInputValue = () => {
  const defaultProductInputValue = {
    id: uuidv4(),
    label: '',
    value: '',
  };
  return defaultProductInputValue;
};
