import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";

const ImgContainer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        onOpen();
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image by: {author}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              alt={author}
              width="100%"
              height="100%"
              src={download_url}
            ></img>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ImgContainer;
