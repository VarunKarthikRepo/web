import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PlaceIcon from "@mui/icons-material/Place";
import { renderToString } from "react-dom/server";
import { Box } from "@mui/material";
import config from "../config";
import { HospitalsData, ParksData } from "../data/staticData";

const center = config.default_map_center;
const zoomLevel = config.defauly_map_zoom_level;

const flyToLocation = (map, coordinates) => {
  let position = null;

  if (coordinates) {
    const iconMarkup = renderToString(
      <PlaceIcon style={{ color: "#f52929", fontSize: "40px" }} />
    );
    const customIcon = new L.DivIcon({
      html: iconMarkup,
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    map.flyTo([coordinates.lat, coordinates.lon], 15);
    position = [
      {
        name: coordinates.name,
        location: [coordinates.lat, coordinates.lon],
        icon: customIcon,
      },
    ];
  }

  return position;
};

const handleResetClicked = (map, resetClicked, setResetClicked) => {
  if (resetClicked) {
    setResetClicked(false);
    map.flyTo(center, zoomLevel);
  }
};

const handleMapLayerChange = (map, mapLayer, onMapLayerChange) => {
  if (mapLayer === "osm") {
    onMapLayerChange(config.osm_url);
  } else if (mapLayer === "osm-hot") {
    onMapLayerChange(config.osm_hot_url);
  } else if (mapLayer === "otop") {
    onMapLayerChange(config.osm_topo_url);
  }
};

const handlePoiData = (map, selectedPoi) => {
  let position = [];
  if (selectedPoi.includes("parks")) {
    const iconMarkup = renderToString(
      <PlaceIcon style={{ color: "#009d39", fontSize: "40px" }} />
    );
    const parkIcon = new L.DivIcon({
      html: iconMarkup,
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    position = ParksData.map((park) => ({
      ...park,
      icon: parkIcon,
    }));
  }

  if (selectedPoi.includes("hospitals")) {
    const iconMarkup = renderToString(
      <PlaceIcon style={{ color: "#f52929", fontSize: "40px" }} />
    );
    const hospitalIcon = new L.DivIcon({
      html: iconMarkup,
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const hospitalsPosition = HospitalsData.map((hospital) => ({
      ...hospital,
      icon: hospitalIcon,
    }));
    position = [...hospitalsPosition, ...position];
  }

  return position;
};

const MapHandler = ({
  coordinates,
  resetClicked,
  setResetClicked,
  mapLayer,
  onMapLayerChange,
  selectedPoi,
}) => {
  const map = useMap();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    setPosition(flyToLocation(map, coordinates));
  }, [coordinates, map]);

  useEffect(() => {
    handleMapLayerChange(map, mapLayer, onMapLayerChange);
  }, [mapLayer, map, onMapLayerChange]);

  useEffect(() => {
    setPosition(handlePoiData(map, selectedPoi));
  }, [selectedPoi, map]);

  useEffect(() => {
    handleResetClicked(map, resetClicked, setResetClicked);
    setPosition(null);
  }, [resetClicked, map, setResetClicked]);

  return !position
    ? null
    : position.map((item, index) => (
        <Marker key={index} position={item.location} icon={item.icon}>
          <Popup>{item.name}</Popup>
        </Marker>
      ));
};

const MapView = ({
  coordinates,
  resetClicked,
  setResetClicked,
  mapLayer,
  selectedPoi,
}) => {
  const [mapLayerUrl, setMapLayerUrl] = useState(config.osm_url);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MapContainer
          center={center}
          zoom={zoomLevel}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer url={mapLayerUrl} attribution={config.osm_attribution} />
          <MapHandler
            coordinates={coordinates}
            resetClicked={resetClicked}
            setResetClicked={setResetClicked}
            mapLayer={mapLayer}
            onMapLayerChange={setMapLayerUrl}
            selectedPoi={selectedPoi}
          />
        </MapContainer>
      </Box>
    </>
  );
};

export default MapView;
