import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

const State = ({ label, value }) => {
  return (
    <Box
      px={{ base: "4", md: "6" }}
      py={{ base: "5", md: "6" }}
      bg="bg-surface"
      borderRadius="lg"
    // boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading pl={5} size={useBreakpointValue({ base: "sm", md: "2xl" })}>
          {value}
        </Heading>
      </Stack>
    </Box>
  );
};
export default State;
