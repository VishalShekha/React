import React from "react";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../util/auth";
import { useNavigate } from "react-router-dom";
function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <Avatar src="/broken-image.jpg" />
      <h1>Hi {auth.user}</h1>
      <button
        onClick={() => {
          auth.logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
