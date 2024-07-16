import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../util/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handle = () => {
    auth.login(name);
    navigate("/profile");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" onClick={() => handle()}>
        Submit
      </Button>
    </div>
  );
}

export default Login;
