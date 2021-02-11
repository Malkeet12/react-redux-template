import { connect } from "react-redux";
import GlobalUiComponents from "./GlobalUiComponents.jsx";
import commonActions from "app/commonActions";

export const mapStateToProps = (state) => {
  return {
    snackbar: state.common.snackbar,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    hideSnackbar: () => {
      dispatch(commonActions.hideSnackbar());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalUiComponents);
