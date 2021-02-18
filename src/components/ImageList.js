import React, { useState, useEffect } from "react";
import { fetchPicturesData } from "../requests";
import { Flex, Text } from "@chakra-ui/react";

import ImgContainer from "./ImgContainer";

const ImageList = () => {
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
      <Flex flexDirection="column" margin="auto" marginTop="1vh">
        <Text
          textAlign="center"
          fontSize="5xl"
          fontWeight="semibold"
          marginBottom="1vh"
          textColor="white"
        >
          Image List
        </Text>
        {imgs.map((picture, i) => {
          return (
            <div key={i}>
              <ImgContainer img={picture} />
            </div>
          );
        })}
      </Flex>
    );
  }
};

export default ImageList;
