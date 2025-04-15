# 🗺️ React GIS Application

A lightweight and interactive **Geographic Information System (GIS) web application** built with **React**, **Leaflet**, and **Material UI (MUI)**. This app provides mapping capabilities with address search, map layers, and POI visualization.

## 🌍 Features

### 🔍 Address Search (Nominatim API)
- Users can **search for a location address** using the integrated search bar.
- The app sends the input query to **Nominatim**, retrieves matching address suggestions, and displays them in a dropdown.
- Upon selecting a location:
  - A **marker** is added at the selected location.
  - The map **zooms and centers** to that location.
  - Users can reselect another location to re-center the map accordingly.

### 🗺️ Map Layers
- Three different **map layers** are available for selection:
  - **OpenStreetMap Standard**
  - **OSM-HOT** (Humanitarian style)
  - **OpenTopoMap**
- The layers come with **predefined Places of Interest (POIs)** such as **parks** and **hospitals**.
- Clicking on these POIs **adds markers** on the map at their locations.

### 🔄 Reset Map
- A **"Reset Map"** button resets the map to its **initial default state** (default zoom, center, and clears all pins).

---

## 🧰 Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Mapping Libraries**: [Leaflet](https://leafletjs.com/), [React-Leaflet](https://react-leaflet.js.org/)
- **UI Library**: [Material UI (MUI)](https://mui.com/)
- **Geocoding Service**: [Nominatim (OpenStreetMap)](https://nominatim.org/)

---

## 🛠️ Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/react-gis-app.git
   cd react-gis-app
   ```
2. **Install Dependencies**
    ```bash
    npm install
    ```
3. **Start the development server**
    ```bash
    npm start
    ```
---

## 🚀 Usage

- Type a location into the search bar to find places via Nominatim.

- Use the layer switcher to toggle between different map styles.

- Click on predefined POIs (e.g., parks, hospitals) to drop markers.

- Use the reset button to return the map to its initial state.

---

## 📸 Screenshots

- Add screenshots or demo GIFs here showing the map in action

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo

2. Create a feature branch:
    ```bash
    git checkout -b new-feature
    ```

3. Commit your changes:
    ```bash
    git commit -m "Added new feature"
    ```

4. Push to the branch:
    ```bash
    git push origin new-feature
    ```

5. Open a pull request

---

## 📜 License

This project is licensed under the MIT License.

---

## 📬 Contact
For any questions or suggestions:
- LinkedIn: Your LinkedIn
- Email: your-email@gmail.com

---

## ⭐ If you find this project useful, please consider starring it!

---



# Running the Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
