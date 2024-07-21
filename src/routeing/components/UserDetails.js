import React from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
      <p>User details about {userId}</p>
    </div>
  );
}

export default UserDetails;
// Params are used to get the dynamic links from the URL
