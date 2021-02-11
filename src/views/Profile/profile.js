import React from "react";
import "./profile.scss";

const Profile = (props) => {
  let { profile_id } = props.match.params;
  return (
    <div className="profile">
      <span className="name">{profile_id}</span>
    </div>
  );
};

export default Profile;
