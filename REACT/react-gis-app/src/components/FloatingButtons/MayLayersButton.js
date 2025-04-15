import React, { useEffect, useState } from "react";
import { Button, Box, Tooltip } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";

const MapLayersButton = ({ onSelectMapLayer, onSelectPoi }) => {
  const [showLayersModel, setShowLayersModel] = useState(false);
  const [selectedLayer, setSelectedLayer] = React.useState("osm");
  const [selectedPoi, setSelectedPoi] = React.useState([]);

  const handleLayersButtonClick = () => {
    setShowLayersModel((prevState) => !prevState);
  };

  const handleRadioChange = (event) => {
    setSelectedLayer(event.target.value);
    onSelectMapLayer(event.target.value);
  };

  const handleSwitchChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedPoi((prev) => [...prev, value]);
    } else {
      setSelectedPoi((prev) => prev.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    onSelectPoi(selectedPoi);
  }, [selectedPoi, onSelectPoi]);

  return (
    <>
      <Box display={"flex"} gap={"5px"}>
        <Tooltip title="Map Layers" placement="right">
          <Button
            variant="contained"
            onClick={handleLayersButtonClick}
            sx={{
              height: "40px",
              width: "50px",
              backgroundColor: "#222f3c",
              ":hover": { backgroundColor: "#414d5a" },
            }}
          >
            <LayersIcon />
          </Button>
        </Tooltip>
        {showLayersModel && (
          <Paper
            sx={{
              width: 280,
              maxWidth: "100%",
              position: "fixed",
              left: "calc(1% + 70px)",
            }}
          >
            <MenuList>
              <MenuItem sx={{ textAlign: "start" }}>
                <ListItemText>Open Street Map</ListItemText>
                <Radio
                  checked={selectedLayer === "osm"}
                  onChange={handleRadioChange}
                  value="osm"
                />
              </MenuItem>
              <MenuItem sx={{ textAlign: "start" }}>
                <ListItemText>Open Street Map - HOT</ListItemText>
                <Radio
                  checked={selectedLayer === "osm-hot"}
                  onChange={handleRadioChange}
                  value="osm-hot"
                />
              </MenuItem>
              <MenuItem sx={{ textAlign: "start" }}>
                <ListItemText>Open Topo Map</ListItemText>
                <Radio
                  checked={selectedLayer === "otop"}
                  onChange={handleRadioChange}
                  value="otop"
                />
              </MenuItem>
              <Divider />
              <MenuItem sx={{ textAlign: "start" }}>
                <ListItemText>Parks</ListItemText>
                <Switch
                  checked={selectedPoi.includes("parks")}
                  onChange={(val) => handleSwitchChange(val)}
                  value="parks"
                />
              </MenuItem>
              <MenuItem sx={{ textAlign: "start" }}>
                <ListItemText>Hospitals</ListItemText>
                <Switch
                  checked={selectedPoi.includes("hospitals")}
                  onChange={handleSwitchChange}
                  value="hospitals"
                />
              </MenuItem>
            </MenuList>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default MapLayersButton;
