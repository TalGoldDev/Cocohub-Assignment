import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchPicturesData } from "./requests";
import ImageList from "./components/ImageList";

function App() {
  const [imgs, setImgs] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchImageData() {
      const imgList = await fetchPicturesData();
      setImgs(imgList);
      setloading(false);
    }
    fetchImageData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <div>Selected Picture</div>
        <div>Image list</div>
        <ImageList imageList={imgs} />
      </div>
    );
  }
}

export default App;
