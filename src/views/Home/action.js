import { API_URL } from "app/constants";
import HttpUtil from "utils/HttpUtil";
import commonActions from "app/commonActions";

const Action = {
  addTask: ({ id, task }) => {
    return async (dispatch) => {
      HttpUtil.post({
        url: API_URL.addTask,
        data: {
          id,
          task,
        },
        callback: (response, error) => {
          if (response && response.data) {
            commonActions.showSnackbar("new task added in the list", "success");
            dispatch(Action.getTasks());
            // return {
            //   type: "ADD_TASK",
            // };
          }
        },
      });
    };
  },
  setDiscordUrl: (discordUrl) => {
    return {
      type: "SET_DISCORD_URL",
      payload: discordUrl,
    };
  },
  getTasks: () => {
    return async (dispatch) => {
      HttpUtil.get({
        url: "",
        callback: (response, error) => {
          if (response && response.data) {
            dispatch(Action.setTasks(response.data));
          } else if (error) {
            dispatch(Action.setTasksError(error));
          }
        },
      });
    };
  },
  setTasks: (data) => {
    console.log(data);
    return {
      type: "SET_TASKS",
      payload: data,
    };
  },
  setTasksError: (error) => {
    return {
      type: "SET_TASKS_ERROR",
      payload: error,
    };
  },
};

export default Action;
