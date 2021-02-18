import React from "react";

const ImgContainer = (props) => {
  const { id, author, download_url, height, width, url } = props.img;
  return (
    <div>
      <h3>Image number:{id}</h3>
      <p>{author}</p>
      <img alt={author} width="350vw" height="350vh" src={download_url}></img>
      <p>{download_url}</p>
      <p>
        {height},{width}
      </p>
      <p>{url}</p>
      <br />
      <br />
    </div>
  );
};

export default ImgContainer;
