import React from "react";
import { useDisclosure, Text, Flex, Image } from "@chakra-ui/react";
import ModalDisplay from "./ModalDisplay";

const ImgContainer = (props) => {
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();

  const { id, author, download_url } = props.img;

  return (
    <Flex
      className="image-container"
      boxShadow="2xl"
      flexDirection="column"
      borderBottom="2px"
      borderColor="gray.400"
      padding="1vw"
      bgColor="white"
      _hover={{
        transition: "transform .2s",
        transform: "scale(1.1)",
        transitionDuration: "1s",
      }}
      onClick={() => {
        openModal();
      }}
    >
      <Flex
        width="100%"
        flexDirection="row"
        textAlign="center"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          boxShadow="2xl"
          marginX="auto"
          alt={author}
          width="10vh"
          height="10vh"
          src={download_url}
          marginRight="1vw"
        ></Image>

        <PictureData id={id} author={author} src={download_url} />
      </Flex>

      <ModalDisplay
        author={author}
        src={download_url}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </Flex>
  );
};

const PictureData = (props) => {
  return (
    <Flex flexDirection="column" textAlign="left">
      <Text fontSize="2xl" fontWeight="semibold">
        Image number:{props.id}
      </Text>
      <Text>Picture by: {props.author}</Text>
      <Text isTruncated width="60%">
        {props.src}
      </Text>
    </Flex>
  );
};

export default ImgContainer;
