import { createEvent, createStore } from 'effector';
import { v4 as uuidv4 } from 'uuid';

import { getDefaultRule } from '../utils';
import { defaultRule, testStateInput } from '../auxInformation';

const initialState = [];

export const addLimit = createEvent();
export const deleteLimit = createEvent();

export const addRule = createEvent();
export const deleteRule = createEvent();

export const updateRuleType = createEvent();
export const updateCondition = createEvent();

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
    console.log('state', state);
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      console.log('old rules', limit.rules);
      const updatedRules = limit.rules.map((rule, index) => {
        if (index !== ruleIndex) {
          console.log(rule.condition);
          return rule;
        }
        rule.condition = condition;
        console.log(rule.condition);
        return rule;
      });
      limit.rules = updatedRules;
      console.log(updatedRules);
      return limit;
    });
  });

$limits.watch((state) => {
  // console.log(state);
});
