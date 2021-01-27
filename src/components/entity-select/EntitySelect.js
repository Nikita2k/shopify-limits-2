import React, { useCallback } from 'react';
import { Select } from '@shopify/polaris';

import { limitRuleTypes } from '../auxInformation';

const EntitySelect = ({ entity, limitId, ruleIndex }) => {
  const handleSelectChange = useCallback((value) => console.log(value), []);

  return (
    <Select
      options={limitRuleTypes}
      onChange={handleSelectChange}
      value={entity}
    />
  );
};

export default EntitySelect;

// function SelectExample() {
//   const [selected, setSelected] = useState('today');

//   const handleSelectChange = useCallback((value) => setSelected(value), []);

//   const options = [
//     {label: 'Today', value: 'today'},
//     {label: 'Yesterday', value: 'yesterday'},
//     {label: 'Last 7 days', value: 'lastWeek'},
//   ];

//   return (
//     <Select
//       label="Date range"
//       options={options}
//       onChange={handleSelectChange}
//       value={selected}
//     />
//   );
// }
