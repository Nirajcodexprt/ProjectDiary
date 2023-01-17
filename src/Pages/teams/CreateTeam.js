import {
  Box,
  Button,
  ButtonGroup,
  Container,
  extendTheme,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  TableContainer,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import AfterAuth from "../../HOC/AfterAuth";

import {
  MultiSelect,
  MultiSelectTheme,
  useMultiSelect,
} from "chakra-multiselect";
import { useNavigate } from "react-router-dom";

const CreateTeam = () => {

  const { value, options, onChange } = useMultiSelect({
    value: [],
    options: ["ab", "cd"],
  });

  const navigate = useNavigate()

  const BtnColor = useColorModeValue('#000', '#fff')

  return (
    <AfterAuth>
      <HStack justifyContent={'space-between'}>
        <Heading>Create Teams</Heading>
        <Button bg={'cadetblue'} _hover='none' onClick={() => navigate(-1)} fontWeight='700' color={BtnColor}>Back</Button>
      </HStack>
      <Box>
        <FormControl py={5}>
          <FormLabel>Team Name</FormLabel>
          <Input type="text" width={"50%"} />
        </FormControl>
        <Box width={"100%"}>
          <MultiSelect
            options={options}
            value={value}
            label="Select Team Member"
            onChange={onChange}
            create
          />
        </Box>
      </Box>
    </AfterAuth>
  );
};

export default CreateTeam;
