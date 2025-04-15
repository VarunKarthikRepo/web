import React, { useState } from "react";
import {
  Button,
  InputBase,
  IconButton,
  Divider,
  Paper,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = ({ onSelectCoordinates }) => {
  const [searchBtnClicked, setSearchButtonClicked] = useState(false);
  const [addressText, setAddressText] = useState("");
  const [finalFetchedAddresses, setFinalFetchedAddresses] = useState(null);

  const handleSearchButtonClick = () => {
    if (searchBtnClicked) {
      setAddressText("");
      setFinalFetchedAddresses(null);
    }
    setSearchButtonClicked(!searchBtnClicked);
  };

  const handleAddressTextChange = (e) => {
    setAddressText(e.target.value);
  };

  const handleListItemClick = (item) => {
    console.log("Clicked item lat:", item.lat);
    console.log("Clicked item lon:", item.lon);
    onSelectCoordinates(item);
  };

  const handleFindAddress = async () => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      addressText
    )}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        const processedList = data.map((address) => {
          return {
            name: address.display_name,
            lat: address.lat,
            lon: address.lon,
            class: address.class,
          };
        });
        setFinalFetchedAddresses(processedList);
      } else {
        setFinalFetchedAddresses(null);
      }
    } catch (ex) {
      console.error("Failed to fetch address", ex);
    }
  };

  return (
    <>
      <Box display={"flex"} sx={{ height: "40px" }}>
        <Tooltip title="Search Address" placement="right">
          <Button
            variant="contained"
            sx={{
              width: "50px",
              backgroundColor: "#222f3c",
              ":hover": { backgroundColor: "#414d5a" },
            }}
            onClick={handleSearchButtonClick}
          >
            <SearchIcon />
          </Button>
        </Tooltip>
        {searchBtnClicked && (
          <>
            <Box display={"flex"} flexDirection={"column"}>
              <Paper
                component={"form"}
                sx={{
                  display: "flex",
                  width: { sm: "400px", xs: "320px" },
                  ml: "5px",
                  height: "40px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Address"
                  inputProps={{ "aria-label": "search Address" }}
                  onChange={handleAddressTextChange}
                  value={addressText}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleFindAddress}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              {finalFetchedAddresses && (
                <Paper
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    width: "400px",
                    ml: "5px",
                    mt: "2px",
                  }}
                >
                  <List>
                    {finalFetchedAddresses.map((item, index) => (
                      <ListItem
                        disablePadding
                        key={index}
                        sx={{ width: "400px" }}
                      >
                        <ListItemButton
                          onClick={() => handleListItemClick(item)}
                        >
                          <Tooltip title={item.name}>
                            <ListItemText
                              primary={
                                <Typography
                                  noWrap
                                  sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "100%",
                                  }}
                                >
                                  {item.name}
                                </Typography>
                              }
                            />
                          </Tooltip>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default SearchButton;
