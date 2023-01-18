import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import State from "../State/State";

export const Content = () => (
  <Stack
    spacing={{
      base: "8",
      lg: "6",
    }}
  >
    <Stack
      spacing="4"
      direction={{
        base: "column",
        lg: "row",
      }}
      justify="space-between"
    >
      <Stack spacing="1">
        <Heading
        >
          Dashboard
        </Heading>
      </Stack>
      <Stack direction="row" spacing="3">
        <Button
          variant="secondary"
          leftIcon={<FiDownloadCloud fontSize="1.25rem" />}
        >
          Download
        </Button>
        <Button variant="primary">Create</Button>
      </Stack>
    </Stack>
    <Stack
      spacing={{
        base: "5",
        lg: "6",
      }}
    >
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        gap="6"
      >
        <Card>
          <State label={"Total Teams"} value={"887"} />
        </Card>
        <Card>
          <State label={"Total Members"} value={"71,887"} />
        </Card>
      </SimpleGrid>
    </Stack>
    <Card minH="xs" />
  </Stack>
);
const Card = (props) => {
  console.log(props);
  return (
    <Box
      minH="36"
      bg="bg-surface"
      boxShadow={useColorModeValue("lg", "dark-lg")}
      borderRadius="lg"
    >
      {props.children}
    </Box>
  );
};
