import React from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Name />
      <Email />
      <Address />
      <PersonalInfo />
    </div>
  );
};

export default Profile;
