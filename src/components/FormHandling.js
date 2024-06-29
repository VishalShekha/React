import React, { useRef } from "react";
import { TextField, Button, Stack } from "@mui/material";

let clickTriggered = (text) => {
  console.log(text);
};

function FormHandling() {
  const textFieldRef = useRef(null);

  return (
    <Stack spacing={2}>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        inputRef={textFieldRef}
      />
      <Button
        variant="contained"
        onClick={() => clickTriggered(textFieldRef.current.value)}
      >
        Contained
      </Button>
    </Stack>
  );
}

export default FormHandling;
