import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PlaceIcon from "@mui/icons-material/Place";
import { renderToString } from "react-dom/server";
import { Box } from "@mui/material";

const center = [17.387, 78.491];
const zoomLevel = 11;

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
    onMapLayerChange("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  } else if (mapLayer === "osm-hot") {
    onMapLayerChange("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");
  } else if (mapLayer === "otop") {
    onMapLayerChange("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png");
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
    position = [
      {
        name: "Sanjeevaiah Park",
        location: [17.385, 78.486],
        icon: parkIcon,
      },
      {
        name: "Lubmini Park",
        location: [17.41, 78.472],
        icon: parkIcon,
      },
      {
        name: "KBR Park",
        location: [17.420, 78.419],
        icon: parkIcon,
      },
      {
        name: "Botanical Gardens",
        location: [17.455, 78.360],
        icon: parkIcon,
      },      
      {
        name: "Nehru Zoological Park",
        location: [17.350, 78.452],
        icon: parkIcon,
      },
    ];
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
    position = [
      {
        name: "KIMS Hospital",
        location: [17.427, 78.404],
        icon: hospitalIcon,
      },
      {
        name: "Apollo Hospitals, Jubilee Hills",
        location: [17.415, 78.413],
        icon: hospitalIcon,
      },
      {
        name: "Kamineni Hospitals, LB Nagar",
        location: [17.351, 78.555],
        icon: hospitalIcon,
      },
      {
        name: "Osmania General Hopsital",
        location: [17.371, 78.473],
        icon: hospitalIcon,
      },      
      {
        name: "Gandhi Hopsital",
        location: [17.423, 78.504],
        icon: hospitalIcon,
      },
      ...position
    ];
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
  const [mapLayerUrl, setMapLayerUrl] = useState(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MapContainer
          center={center}
          zoom={zoomLevel}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            url={mapLayerUrl}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
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
