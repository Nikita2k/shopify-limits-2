# Limits

## Format for limit objects coming from server:

```javascript
[
  {
    id: 'cbc37419-7e71-4d96-a131-6ff680d9e81d',
    rules: [
      {
        entity: 'has_one_of_products',
        condition: null,
        value: [
          {
            id: '2',
            label: '5 Panel Camp Cap',
            value: '5-panel-hat',
          },
          {
            id: '3',
            label: 'x box',
            value: 'x-box',
          },
        ],
      },
      {
        entity: 'product_quantity',
        condition: null,
        value: [
          {
            product: {
              id: '2',
              label: '5 Panel Camp Cap',
              value: '5-panel-hat',
            },
            condition: 'greater',
            value: '444',
          },
          {
            product: {
              id: '3',
              label: 'x box',
              value: 'x-box',
            },
            condition: 'less_or_equal',
            value: '5',
          },
        ],
      },
      {
        entity: 'cart_price',
        condition: 'greater',
        value: '55',
      },
      {
        entity: 'product_title',
        condition: 'ends_with',
        value: 'aaa',
      },
      {
        entity: 'sku',
        condition: 'starts_with',
        value: 'bbb',
      },
      {
        entity: 'vendor',
        condition: 'contains',
        value: 'ccc',
      },
      {
        entity: 'collection',
        condition: 'ends_with',
        value: 'ddd',
      },
    ],
  },
];
```

## Format for loadOptions prop for AsyncSelect component

```javascript
[
  {
    id: '1',
    label: 'book',
    value: 'book',
  },
  {
    id: '2',
    label: '5 Panel Camp Cap',
    value: '5-panel-hat',
  },
  {
    id: '3',
    label: 'x box',
    value: 'x-box',
  },
];
```
