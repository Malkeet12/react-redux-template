// import moment from "moment";

let defaultState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TASKS": {
      console.log(action);
      return { ...state, tasks: action.payload.tasks };
    }
    case "ADD_TASK": {
      return { ...state };
    }
    default:
      return state;
  }
};
