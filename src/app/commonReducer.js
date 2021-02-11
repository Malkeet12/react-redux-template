let defaultState = {
  apiTracker: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case "SHOW_SNACKBAR": {
      let { msg, type } = action.payload;
      return {
        ...state,
        snackbar: {
          show: true,
          msg,
          type,
        },
      };
    }

    case "HIDE_SNACKBAR": {
      return {
        ...state,
        snackbar: {
          show: false,
          msg: null,
          type: null,
        },
      };
    }

    case "TRACK_API": {
      const apiTracker = JSON.parse(JSON.stringify(state.apiTracker));
      const apiObject = action.payload.apiObject;
      apiTracker[apiObject.key] = apiObject;
      return {
        ...state,
        apiTracker,
      };
    }
    default:
      return state;
  }
};
