export let requests = [];

const Action = {
  showSnackbar: (msg, type) => {
    return {
      type: "SHOW_SNACKBAR",
      payload: {
        msg,
        type,
      },
    };
  },
  hideSnackbar: () => {
    return {
      type: "HIDE_SNACKBAR",
    };
  },
  trackApi: (apiObject) => {
    return {
      type: "TRACK_API",
      payload: {
        apiObject,
      },
    };
  },
};

export default Action;
