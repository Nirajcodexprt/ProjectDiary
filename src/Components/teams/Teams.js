import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Tables from './table/Tables.jsx'
import AfterAuth from '../../HOC/AfterAuth'
import { NavLink } from 'react-router-dom'
const Teams = () => {
  return (
    <AfterAuth>
      <Box p={2}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Heading>Teams</Heading>
          <ButtonGroup>
            <NavLink to={'/teams/CreateTeam'}>
              <Button>Create Team</Button>
            </NavLink>
          </ButtonGroup>
        </HStack>
        <Box>
          <Tables />
        </Box>
      </Box>
    </AfterAuth>
  )
}

export default Teams
