import {
  Box,
  Flex,
  Container,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import Sidebar from "../Components/Sidebar";
import Nav from "../Components/Navbar";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const AfterAuth = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const main = useBreakpointValue({
    base: "col",
    lg: "row",
    md: "col",
  });
  const [first, setfirst] = React.useState(main);
  console.log("main", main);
  return (
    <Flex
      as="section"
      bg="bg-canvas"
      direction={{ base: "row", md: "col" }}
      h={"100vh"}
    >
      <Nav toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <Box width={"100%"} display={"flex"} style={{ flexDirection: main }}>
        <Sidebar />
        <Box
          border="2px solid rgba(200,200,200,0.5)"
          overflowY="scroll"
          w={{
            base: "full",
            md: "100%",
            sm: "100%",
          }}
          my={3}
          p={4}
          borderRadius={4}
          mt="20"
          mx={3}
          pt="30px"
          minH={"80vh"}
          px="30px"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
export default AfterAuth;
