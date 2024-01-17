import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CustomButton = ({ buttonText, onClick }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>
        {buttonText}
      </Button>
    </Stack>
  );
};

export default CustomButton;
