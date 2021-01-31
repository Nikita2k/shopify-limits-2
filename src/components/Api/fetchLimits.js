import { testStateInput } from '../auxInformation';

export const fetchLimits = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(testStateInput);
    }, 1000);
  });
};
