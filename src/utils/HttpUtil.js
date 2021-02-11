import Axios from "axios";
import querystring from "querystring";
import EnvironmentUtil from "utils/EnvironmentUtil";
import commonActions from "app/commonActions";

let CancelToken = Axios.CancelToken,
  cancel;

let getAxiosInstance = () => {
  let config = {
    baseURL: EnvironmentUtil.getApiUrl(),
    timeout: 20000,
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
    validateStatus: function (status) {
      return status >= 200 && status < 400;
    },
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  };

  let axios = Axios.create(config);

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axios;
};

let makeRequest = ({ url, type, data, callback }) => {
  let reqObj;

  if (type === "GET") {
    reqObj = getAxiosInstance().get(url, { params: data });
  }

  if (type === "POST") {
    reqObj = getAxiosInstance().post(url, querystring.stringify(data));
  }

  const key = url;
  const apiTracker = { status: "pending", key };
  window.store.dispatch(commonActions.trackApi(apiTracker));

  reqObj
    .then((response) => {
      if (response && response.data && response.data.success) {
        callback({ data: response.data.data }, null);
      } else
        handleError({
          errorMessage:
            response.data && response.data.data && response.data.data.error,
          errorCode: response.data.code,
          callback,
        });
    })
    .catch((error) => {
      const errorJson = error.toJSON && error.toJSON();
      const errorMessage = errorJson && errorJson.message;
      handleError({ errorMessage, callback });
    })
    .finally(() => {
      const apiTracker = { status: "done", key };
      window.store.dispatch(commonActions.trackApi(apiTracker));
    });
};

function handleError({ errorMsg, errorCode, callback }) {
  const error = { message: errorMsg, id: errorCode, errorCode };
  callback(null, error);
  window.store.dispatch(
    commonActions.showSnackbar(errorMsg ?? "Some error", "error")
  );
}

let HttpUtil = {
  request: getAxiosInstance,
  get: ({ url, data, callback }) => {
    makeRequest({ url, type: "GET", data, callback });
    return cancel;
  },
  post: ({ url, data, callback }) => {
    makeRequest({ url, type: "POST", data, callback });
    return cancel;
  },
};

export default HttpUtil;
