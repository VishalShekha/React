import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeUser = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
      <div>
        <button
          onClick={() => {
            setSearchParams({ filter: "active" });
          }}
        >
          Active users
        </button>
        <button
          onClick={() => {
            setSearchParams();
          }}
        >
          Reset filter
        </button>
        {activeUser ? (
          <h1>Users who are active</h1>
        ) : (
          <h1>Users who are inactive</h1>
        )}
      </div>
    </div>
  );
}

export default User;
// Search params are for the question mark afer the url youtube.com/watch?video=100
