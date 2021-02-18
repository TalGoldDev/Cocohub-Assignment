import { Flex } from "@chakra-ui/react";
import React from "react";
import ImageList from "./components/ImageList";

function App() {
  return (
    <div className="App">
      <Flex width="100%" height="100%" bgColor="gray.200">
        <ImageList />
      </Flex>
    </div>
  );
}

export default App;
