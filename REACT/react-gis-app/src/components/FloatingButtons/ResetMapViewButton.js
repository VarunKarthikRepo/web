import React from "react";
import { Button, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const ResetMapViewButton = ({ setResetClicked }) => {
  const handleResetButtonClick = () => {
    setResetClicked(true);
  };

  return (
    <>
      <Tooltip title="Reset Map" placement="right">
        <Button
          variant="contained"
          onClick={handleResetButtonClick}
          sx={{
            height: "40px",
            width: "50px",
            backgroundColor: "#222f3c",
            ":hover": { backgroundColor: "#414d5a" },
          }}
        >
          <RefreshIcon />
        </Button>
      </Tooltip>
    </>
  );
};

export default ResetMapViewButton;
