import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Not logged in</div>;
  return (
    <div>
      <h1 className="text-5xl">Profile: {user.userName}</h1>
    </div>
  );
};

export default Profile;
