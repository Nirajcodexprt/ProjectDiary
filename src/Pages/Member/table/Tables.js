import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";
import AfterAuth from "../../../HOC/AfterAuth";
import MemberTable from "./MemberTable";

const Tables = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <AfterAuth>
      <Box
        bg="bg-surface"
        boxShadow={{
          base: "none",
          md: useColorModeValue("sm", "sm-dark"),
        }}
        borderRadius={useBreakpointValue({
          base: "none",
          md: "lg",
        })}
      >
        <Stack spacing="5">
          <Box
          >
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              justify="space-between"
            >
              <Heading>Members</Heading>
              <InputGroup width='500px'>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup>
            </Stack>
          </Box>
          <Box overflowX="auto">
            <MemberTable />
          </Box>
          <Box
            pb="5"
          >
            <HStack spacing="3" justify="space-between">
              {!isMobile && (
                <Text color="muted" fontSize="sm">
                  Showing 1 to 5 of 42 results
                </Text>
              )}
              <ButtonGroup
                spacing="3"
                justifyContent="space-between"
                width={{
                  base: "full",
                  md: "auto",
                }}
                variant="secondary"
              >
                <Button>Previous</Button>
                <Button>Next</Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </AfterAuth>
  );
};
export default Tables;
