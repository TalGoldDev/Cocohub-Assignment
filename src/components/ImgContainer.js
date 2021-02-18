import React from "react";
import { useDisclosure, Text, Flex } from "@chakra-ui/react";

const ImgContainer = (props) => {
  const { id, author, download_url, height, width, url } = props.img;

  return (
    <Flex
      flexDirection="column"
      border="2px"
      padding="1vw"
      marginTop="1vh"
      rounded="2xl"
      bgColor=""
      onClick={() => {
        console.log("even I got selected:", id);
      }}
    >
      <Flex flexDirection="column" textAlign="center">
        <Text fontSize="2xl" fontWeight="semibold">
          Image number:{id}
        </Text>
        <p>Picture by: {author}</p>
        <img alt={author} width="350vw" height="350vh" src={download_url}></img>
        <p>{download_url}</p>
      </Flex>
    </Flex>
  );
};

export default ImgContainer;
