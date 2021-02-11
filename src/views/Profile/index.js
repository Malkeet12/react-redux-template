import { connect } from "react-redux";
import Profile from "./profile.js";
import Action from "./action";

export const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
