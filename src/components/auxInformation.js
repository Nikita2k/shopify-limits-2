export const defaultRule = {
  entity: 'cart_price',
  condition: 'greater',
  value: '1',
};

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

export const testStateInput = [
  {
    id: 1,
    rules: [
      {
        entity: 'cart_price',
        condition: 'less_than',
        value: '11',
      },
      {
        entity: 'product_title',
        condition: 'contains',
        value: 'car',
      },
    ],
  },
  {
    id: 2,
    rules: [
      {
        entity: 'sku',
        condition: 'ends_with',
        value: 'test',
      },
    ],
  },
];
