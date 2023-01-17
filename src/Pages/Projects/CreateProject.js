import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Divider,
  InputGroup,
  Stack,
  Flex,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AfterAuth from "../../HOC/AfterAuth";

function CreateProject() {
  const navigate = useNavigate();
  let temp = [
    {
      name: "",
      details: "",
      creadentials: "",
      Notes: "",
    },
  ];
  const [creadential, setCredentials] = useState(temp);
  const [Refresh, setRefresh] = useState(true);
  const BtnColor = useColorModeValue("#fff", "#000");
  // -   3rd Party Credentials [
  //     {
  //         -   3rd Party Provider Name: GOOGLE SIGNUP
  //         -   Details: We required google sign up for our app authentication
  //         -   Credentials:
  //                 email: abc@def.com
  //                 password: 123456
  //         -   Notes: Please do not change the password for the credentials.
  //     },
  function removeRow(i) {
    let main = creadential;
    main.splice(i, 1);
    console.log(main);
    setCredentials(main);
    setRefresh(!Refresh);
  }
  return (
    <>
      <AfterAuth>
        <HStack justifyContent="space-between">
          <Heading>Create Project</Heading>
          <Button
            bg={"cadetblue"}
            _hover="none"
            fontWeight="800"
            color={BtnColor}
            onClick={() => navigate("/projects")}
          >
            Cancel
          </Button>
        </HStack>

        <Box
          as="form"
          bg="bg-surface"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
        >
          <Stack
            spacing="5"
            px={{
              base: "4",
              md: "6",
            }}
            py={{
              base: "5",
              md: "6",
            }}
          >
            <Stack
              spacing="6"
              direction={{
                base: "column",
                md: "row",
              }}
            >
              <FormControl id="firstName">
                <FormLabel>Project Name</FormLabel>
                <Input type="text" placeholder="Project Name" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Project Budget</FormLabel>
                <Input type="text" placeholder="Project Budget" />
              </FormControl>
            </Stack>
            <FormControl id="street">
              <FormLabel>Project Details</FormLabel>
              <Textarea type="text" placeholder="Project Details" />
            </FormControl>
            <FormControl
              justifyContent={"space-between"}
              alignItems={"center"}
              display={"flex"}
            >
              <FormLabel>Third Party Credentials</FormLabel>
              <Button onClick={() => setCredentials((old) => [...old, temp])}>
                + Add
              </Button>
            </FormControl>
            <Divider />
            {creadential.map((val, i) => {
              return (
                <>
                  <FormControl gap={5} display={"grid"}>
                    <Flex gap={5}>
                      <Textarea
                        placeholder="Enter Name"
                        resize={"none"}
                      ></Textarea>
                      <Textarea
                        placeholder="Enter Details"
                        resize={"none"}
                      ></Textarea>
                    </Flex>
                    <Flex gap={5}>
                      <Textarea
                        placeholder="Enter Credentials"
                        resize={"none"}
                      ></Textarea>
                      <Textarea
                        placeholder="Enter Notes"
                        resize={"none"}
                      ></Textarea>
                    </Flex>
                    <Flex justifyContent={"flex-end"}>
                      <Button width={"100px"} onClick={() => removeRow(i)}>
                        Remove
                      </Button>
                    </Flex>
                  </FormControl>
                  <Divider />
                </>
              );
            })}

            <Stack
              spacing="6"
              direction={{
                base: "column",
                md: "row",
              }}
            >
              <FormControl id="city">
                <FormLabel>Starting Date</FormLabel>
                <Input type={"date"} />
              </FormControl>
              <FormControl id="state">
                <FormLabel>Delivery Date</FormLabel>
                <Input type={"date"} />
              </FormControl>
            </Stack>
          </Stack>
          <Divider />
          <Flex
            direction="row-reverse"
            py="4"
            px={{
              base: "4",
              md: "6",
            }}
          >
            <Button
              bg={"cadetblue"}
              _hover="none"
              fontWeight="800"
              color={BtnColor}
            >
              Save
            </Button>
          </Flex>
        </Box>
      </AfterAuth>
    </>
  );
}

export default CreateProject;
