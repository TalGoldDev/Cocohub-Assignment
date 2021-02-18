import React, { useState, useEffect } from "react";
import { fetchPicturesData } from "../requests";

import ImgContainer from "./ImgContainer";

const ImageList = () => {
  const [imgs, setImgs] = useState(null);
  const [loading, setloading] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState(null);

  useEffect(() => {
    async function fetchImageData() {
      const imgList = await fetchPicturesData();
      setImgs(imgList);
      setloading(false);
    }
    fetchImageData();
  }, []);

  useEffect(() => {
    console.log("new selected picture is:", selectedPicture);
  }, [selectedPicture]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {imgs.map((picture, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setSelectedPicture(i);
              }}
            >
              <ImgContainer img={picture} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default ImageList;
