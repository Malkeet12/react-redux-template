import { combineReducers } from "redux";
import homeReducer from "views/Home/reducer";
import commonReducer from "app/commonReducer";

export const reducers = combineReducers({
  home: homeReducer,
  common: commonReducer,
});
