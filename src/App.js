import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchPicturesData } from "./requests";

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
        <div>
          {imgs.map((picture) => {
            return (
              <div key={picture.id}>
                <h3>Image number:{picture.id}</h3>
                <p>{picture.author}</p>
                <p>{picture.download_url}</p>
                <p>
                  {picture.height},{picture.width}
                </p>
                <p>{picture.url}</p>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
