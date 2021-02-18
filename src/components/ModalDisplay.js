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
} from "@chakra-ui/react";

const ModalDisplay = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} onClose={props.closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Image by: {props.author}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <img
            alt={props.author}
            width="100%"
            height="100%"
            src={props.src}
          ></img>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDisplay;
