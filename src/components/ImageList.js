import React from "react";
import ImgContainer from "./ImgContainer";

const ImageList = (props) => {
  const imgList = props.imageList;
  return (
    <div>
      {imgList.map((picture, i) => {
        return <ImgContainer key={i} img={picture} />;
      })}
    </div>
  );
};

export default ImageList;
