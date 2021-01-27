export const limitRuleTypes = [
  {
    label: 'has one of the following products',
    value: 'has_one_of_products',
  },
  {
    label: 'product quantity',
    value: 'product_quantity',
  },
  {
    label: 'cart price',
    value: 'cart_price',
  },
  {
    label: 'product title',
    value: 'product_title',
  },
  {
    label: 'sku',
    value: 'sku',
  },
  {
    label: 'vendor',
    value: 'vendor',
  },
  {
    label: 'collection',
    value: 'collection',
  },
];

export const quantityMatchers = [
  {
    value: 'greater',
    label: '>',
  },
  {
    value: 'greater_or_equal',
    label: '>=',
  },
  {
    value: 'equal',
    label: '=',
  },
  {
    value: 'less_or_equal',
    label: '<=',
  },
  {
    value: 'less',
    label: '<',
  },
];

export const stringMatchers = [
  { value: 'starts_with', label: 'starts with' },
  { value: 'ends_with', label: 'ends with' },
  { value: 'contains', label: 'contains' },
];
