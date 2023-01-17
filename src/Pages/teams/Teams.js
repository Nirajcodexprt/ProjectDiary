import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AfterAuth from "../../HOC/AfterAuth";
import { NavLink } from "react-router-dom";
import MemberTable from "../Member/table/MemberTable";
const Teams = () => {

  const BtnColor = useColorModeValue('#000', '#fff')

  return (
    <AfterAuth>
      <HStack justifyContent={'space-between'}>
        <Heading>Teams</Heading>
        <NavLink to={'/teams/CreateTeam'}>
          <Button bg={'cadetblue'} _hover='none' fontWeight='700' color={BtnColor}>Create Team</Button>
        </NavLink>
      </HStack>
    </AfterAuth>
  );
};

export default Teams;
