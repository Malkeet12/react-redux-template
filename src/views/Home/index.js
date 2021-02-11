import { connect } from "react-redux";
import Home from "./home.js";
import Action from "./action";

export const mapStateToProps = (state) => {
  return {
    home: state.home,
    common: state.common,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => {
      dispatch(Action.getTasks());
    },
    addTask: ({ id, task }) => {
      dispatch(Action.addTask({ id, task }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
