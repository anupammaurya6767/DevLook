import React from "react";
import Avatar from "../Components/Avatar";
import Info from "../Components/Info";
import { avatar } from "../src/data";

function Profile() {
  return (
    <div className="profile">
      <Avatar img={avatar} />
      <Info />
    </div>
  );
}

export default Profile;
