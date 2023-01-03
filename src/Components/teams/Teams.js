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

const Teams = () => {
  return (
    <Box p={4}>
      <HStack w={'100%'} justifyContent={'space-between'}>
        <Heading>Teams</Heading>
        <ButtonGroup>
          <Button>Create Team</Button>
        </ButtonGroup>
      </HStack>
      <Box>
        <Tables />
      </Box>
    </Box>
  )
}

export default Teams
