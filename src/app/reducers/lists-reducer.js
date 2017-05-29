import * as actionTypes from '../actions/types.js';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_LISTS:
      return {
        lists: action.payload
      };
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        selected: action.payload
      };
    case actionTypes.CREATE_LIST:
      return {
        ...state,
        lists: [
          action.payload.data,
          ...state.lists
        ]
      }
    case actionTypes.CREATE_LIST_ERROR:
      return {
        ...state,
        checkListError: true
      }
    case actionTypes.CREATE_TASK:
      const selected = { 
        ...state.selected,
        tasks: [
          action.payload.task,
          ...state.selected.tasks
        ]
      };
      return {
        ...state,
        selected
      }
    case actionTypes.CREATE_TASK_ERROR:
      return {
        ...state,
        taskError: true
      }
    case actionTypes.UPDATE_LIST:
      const list = state.selected;
      const tasks = list.tasks.map(task => {
        if (task._id === action.payload._id) {
          return action.payload;
        }

        return task;
      });

      return {
        ...state,
        selected: {
          ...state.selected,
          tasks
        }
      }
  }

  return state;
};