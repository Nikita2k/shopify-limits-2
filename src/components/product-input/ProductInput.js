import React from 'react';
import AsyncSelect from 'react-select/async';
import Async from 'react-select/async';

const ProductInput = ({ onChangeProp, multi, value }) => {
  const loadProducts = (input, callback) => {
    setTimeout(function () {
      callback(null, {
        options: [
          {
            id: '11978396623',
            title: '5 Panel Camp Cap',
            handle: '5-panel-hat',
          },
        ],
        complete: true,
      });
    }, 5000);
  };

  const onChange = (product) => {
    onChangeProp(product);
  };

  return (
    <Async
      name='product'
      loadOptions={loadProducts}
      multi={multi || false}
      value={value}
      valueKey='id'
      labelKey='title'
      onChange={onChange}
      loadingPlaceholder='Enter the product name'
      placeholder='Enter the product name'
    />
  );
};

export default ProductInput;

// class ProductInput extends Component {
//   constructor(props) {
//     super(props);
//   }

//   // асинхронно загружает продукты фильтруя по названию (input)
//   // вызывает callback по результату
//   loadProducts(input, callback) {
//     setTimeout(function() { callback(null, {options:[{"id":"11978396623","title":"5 Panel Camp Cap","handle":"5-panel-hat"}], complete:true}); }, 5000);
//   }

//   onChange(product) {
//     this.props.onChange(product);
//   }

//   render() {
//     return (
//         <Async
//             name="product"
//             loadOptions={this.loadProducts.bind(this)}
//             multi={this.props.multi || false}
//             value={this.props.value}
//             valueKey="id" labelKey="title"
//             onChange={this.onChange.bind(this)}
//             loadingPlaceholder="Enter the product name"
//             placeholder="Enter the product name"
//         />
//     )
//   }

// }
