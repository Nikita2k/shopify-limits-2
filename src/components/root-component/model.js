import { createEvent, createStore } from 'effector';
import { v4 as uuidv4 } from 'uuid';

import { getDefaultRule, makeDefaultProductInputValue } from '../utils';
import { defaultRule } from '../auxInformation';

const initialState = [];

export const addLimit = createEvent();
export const deleteLimit = createEvent();

export const addRule = createEvent();
export const deleteRule = createEvent();

export const updateRuleType = createEvent();
export const updateCondition = createEvent();
export const updateValue = createEvent();

export const addProductInputField = createEvent();
export const deleteProductInputField = createEvent();
export const setValueForProjectInput = createEvent();

export const addProductQuantityRule = createEvent();
export const deleteProductInputFieldInQuantityRule = createEvent();
export const setConditionForQuantityRule = createEvent();

export const $limits = createStore(initialState);

$limits
  .on(addLimit, (state) => {
    return [...state, { id: uuidv4(), rules: [] }];
  })
  .on(deleteLimit, (state, deleteId) => {
    return state.filter(({ id }) => id !== deleteId);
  })
  .on(addRule, (state, limitId) => {
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      return {
        ...limit,
        rules: [...limit.rules, { ...defaultRule }],
      };
    });
  })
  .on(deleteRule, (state, { limitIdArg, ruleIndexArg }) => {
    return state.map((limit) => {
      if (limit.id !== limitIdArg) return limit;
      limit.rules = limit.rules.filter((rule, index) => index !== ruleIndexArg);
      return limit;
    });
  })
  .on(updateRuleType, (state, { entity, limitId, ruleIndex }) => {
    const defaultRuleForEntity = getDefaultRule(entity);
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      limit.rules = limit.rules.map((rule, index) => {
        if (index !== ruleIndex) return rule;
        return defaultRuleForEntity;
      });
      return limit;
    });
  })
  .on(updateCondition, (state, { condition, limitId, ruleIndex }) => {
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      const updatedRules = limit.rules.map((rule, index) => {
        if (index !== ruleIndex) {
          return rule;
        }
        rule.condition = condition;
        return rule;
      });
      limit.rules = updatedRules;
      return limit;
    });
  })
  .on(updateValue, (state, { value, limitId, ruleIndex }) => {
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      const updatedRules = limit.rules.map((rule, index) => {
        if (index !== ruleIndex) {
          return rule;
        }
        rule.value = value;
        return rule;
      });
      limit.rules = updatedRules;
      return limit;
    });
  })
  .on(addProductInputField, (state, { limitId, ruleIndex }) => {
    const defaultProductInputValue = makeDefaultProductInputValue();
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      limit.rules.map((rule, index) => {
        if (index !== ruleIndex) return rule;
        rule.value = [...rule.value, { ...defaultProductInputValue }];
        return rule;
      });
      return limit;
    });
  })
  .on(
    deleteProductInputField,
    (state, { limitId, ruleIndex, productInputId }) => {
      return state.map((limit) => {
        if (limit.id !== limitId) return limit;
        limit.rules = limit.rules.map((rule, index) => {
          if (index !== ruleIndex) return rule;
          rule.value = rule.value.filter(
            (productObj) => productObj.id !== productInputId
          );
          return rule;
        });
        return limit;
      });
    }
  )
  .on(
    setValueForProjectInput,
    (state, { limitId, ruleIndex, productInputId, selectedProduct }) => {
      return state.map((limit) => {
        if (limit.id !== limitId) return limit;
        limit.rules = limit.rules.map((rule, index) => {
          if (index !== ruleIndex) return rule;
          rule.value = rule.value.map((productObj) => {
            if (productObj.id !== productInputId) return productObj;
            return selectedProduct;
          });
          return rule;
        });
        return limit;
      });
    }
  )
  .on(addProductQuantityRule, (state, { limitId, ruleIndex }) => {
    const defaultProductInputValue = makeDefaultProductInputValue();

    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      limit.rules = limit.rules.map((rule, index) => {
        if (index !== ruleIndex) return rule;
        rule.value = [
          ...rule.value,
          { product: defaultProductInputValue, condition: 'greater', value: 1 },
        ];
        return rule;
      });
      return limit;
    });
  })
  .on(
    deleteProductInputFieldInQuantityRule,
    (state, { limitId, ruleIndex, productInputId }) => {
      return state.map((limit) => {
        if (limit.id !== limitId) return limit;
        limit.rules = limit.rules.map((rule, index) => {
          if (index !== ruleIndex) return rule;
          rule.value = rule.value.filter((ruleObj) => {
            return ruleObj.product.id !== productInputId;
          });
          return rule;
        });
        return limit;
      });
    }
  )
  .on(
    setConditionForQuantityRule,
    (state, { condition, limitId, ruleIndex, valueItem }) => {
      console.log({ condition, limitId, ruleIndex, valueItem });
      return state.map((limit) => {
        if (limit.id !== limitId) return limit;
        limit.rules = limit.rules.map((rule, index) => {
          if (index !== ruleIndex) return rule;
          rule.value = rule.value.map((savedValueItem) => {
            if (savedValueItem.product.id !== valueItem.product.id)
              return savedValueItem;
            savedValueItem.condition = condition;
            return savedValueItem;
          });
          return rule;
        });
        return limit;
      });
    }
  );

$limits.watch((state) => {
  console.log(state);
});
