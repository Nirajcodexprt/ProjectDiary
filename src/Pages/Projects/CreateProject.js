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
import { useRecoilState } from "recoil";
import AfterAuth from "../../HOC/AfterAuth";
import { mainAtom } from "../../recoil/Atom";
import ThirdPartyInput from "./ThirdPartyInput";
import SelectManager from "./SelectManager";
import SelectTeam from "./SelectTeam";
import SelectMember from "./SelectMember";
import SelectTranslator from "./SelectTranslator";

function CreateProject() {
  const [projects, setProjects] = useRecoilState(mainAtom);

  let temp = [
    {
      name: "",
      details: "",
      creadentials: "",
      Notes: "",
      default: false,
    },
  ];
  const [creadential, setCredentials] = useState([
    {
      name: "",
      details: "",
      creadentials: "",
      Notes: "",
    },
  ]);

  const handleAddCreadential = () => {
    setCredentials([
      ...creadential,
      {
        name: "",
        details: "",
        creadentials: "",
        Notes: "",
      },
    ]);
  };
  const navigate = useNavigate();
  const BtnColor = useColorModeValue("#000", "#fff");

  const removeRow = (index) => {
    let OriginalData = [...creadential];
    console.log("index", index);
    OriginalData = OriginalData.filter((_, indx) => {
      if (index !== indx) {
        return _;
      }
    });
    console.log(OriginalData);
    setCredentials([...OriginalData]);
  };

  const [inputItem, setInputItem] = useState({
    projectName: "",
    projectBudget: "",
    StartingDate: "",
    DeliveryDate: "",
  });

  const handalChange = (e) => {
    setInputItem({
      ...inputItem,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = () => {
    setProjects([...projects, inputItem]);
    navigate("/projects");
    console.log("inputItem", inputItem);
  };
  console.log("projects", projects);
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
                <Input
                  onChange={handalChange}
                  name="projectName"
                  type="text"
                  placeholder="Project Name"
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Project Budget</FormLabel>
                <Input
                  onChange={handalChange}
                  name="projectBudget"
                  type="text"
                  placeholder="Project Budget"
                />
              </FormControl>
            </Stack>
            <FormControl id="street">
              <FormLabel>Project Details</FormLabel>
              <Textarea
                onChange={handalChange}
                type="text"
                placeholder="Project Details"
              />
            </FormControl>
            <FormControl
              justifyContent={"space-between"}
              alignItems={"center"}
              display={"flex"}
            >
              <FormLabel>Third Party Credentials</FormLabel>
            </FormControl>
            <Divider />

            <ThirdPartyInput removeRow={removeRow} creadential={creadential} />
            <Box>
              <Button onClick={handleAddCreadential}>+ Add</Button>
            </Box>
            <Stack
              spacing="6"
              direction={{
                base: "column",
                md: "row",
              }}
            >
              <FormControl id="city">
                <FormLabel>Starting Date</FormLabel>
                <Input
                  onChange={handalChange}
                  name="StartingDate"
                  type={"date"}
                />
              </FormControl>
              <FormControl id="state">
                <FormLabel>Delivery Date</FormLabel>
                <Input
                  onChange={handalChange}
                  name="DeliveryDate"
                  type={"date"}
                />
              </FormControl>
            </Stack>
            <Flex gap={10}>
              <SelectManager style={{ width: "70%" }} />
              <SelectTranslator />
            </Flex>
            <Flex gap={10}>
              <SelectTeam style={{ width: "70%" }} />
              <SelectMember />
            </Flex>
          </Stack>
          <Divider />
          <Flex direction="row-reverse" py="4">
            <Button
              bg={"cadetblue"}
              _hover="none"
              fontWeight="800"
              color={BtnColor}
              onClick={submitData}
            >
              Save
            </Button>
          </Flex>
        </Box>
      </AfterAuth>
    </>
  );
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
            onClick={() => navigate(-1)}
          >
            Back
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
          <Flex direction="row-reverse" py="4">
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
