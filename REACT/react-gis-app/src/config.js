const config = {
  nominatimSearchApi: "https://nominatim.openstreetmap.org/search?format=json",
  osm_url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  osm_hot_url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  osm_topo_url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  osm_attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  default_map_center: [17.387, 78.491],
  defauly_map_zoom_level: 11,
};

export default config;
