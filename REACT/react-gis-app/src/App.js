import "./App.css";
import React, {useState} from "react";
import FloatingSection from "./components/FloatingSection";
import MapView from "./components/MapView";
import NavBar from "./components/NavBar";

function App() {

  const [selectedAddressCoordinates, setSelectedAddressCoordinates] = useState(null);
  const [resetClicked, setResetClicked] = useState(false);  
  const [selectedMapLayer, setSelectedMapLayer] = useState("osm");
  const [selectedPoi, setSelectedPoi] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <MapView coordinates={selectedAddressCoordinates} resetClicked={resetClicked} setResetClicked={setResetClicked} mapLayer={selectedMapLayer} selectedPoi={selectedPoi} />
      <FloatingSection onSelectCoordinates={setSelectedAddressCoordinates} setResetClicked={setResetClicked} onSelectMapLayer={setSelectedMapLayer} onSelectPoi={setSelectedPoi} />
    </div>
  );
}

export default App;
