import React from "react";
import SearchButton from "./FloatingButtons/SearchButton";
import { Grid } from "@mui/material";
import ResetMapViewButton from "./FloatingButtons/ResetMapViewButton";
import MapLayersButton from "./FloatingButtons/MayLayersButton";
const FloatingSection = ({onSelectCoordinates, setResetClicked, onSelectMapLayer, onSelectPoi}) => {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          position: "absolute",
          top: "9%",
          left: "1%",
          zIndex: 1000,
          flexDirection: "column",
          gap:2
        }}
      >
        <SearchButton onSelectCoordinates={onSelectCoordinates} />
        <MapLayersButton onSelectMapLayer={onSelectMapLayer} onSelectPoi={onSelectPoi} />
        <ResetMapViewButton setResetClicked={setResetClicked} />
      </Grid>
    </>
  );
};

export default FloatingSection;
