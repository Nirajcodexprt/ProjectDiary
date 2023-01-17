import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AfterAuth from "../../HOC/AfterAuth";
import { NavLink } from "react-router-dom";
import MemberTable from "../Member/table/MemberTable";
const Teams = () => {
  return (
    <AfterAuth>
      <Box p={2}>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Heading>Teams</Heading>
          <ButtonGroup>
            <NavLink to={"/teams/CreateTeam"}>
              <Button>Create Team</Button>
            </NavLink>
          </ButtonGroup>
        </HStack>
        <Box mt={10}>
          <MemberTable />
        </Box>
      </Box>
    </AfterAuth>
  );
};

export default Teams;
