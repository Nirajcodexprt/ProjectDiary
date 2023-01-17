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
import AfterAuth from '../../HOC/AfterAuth.js'
import Tables from './table/Tables.jsx.jsx'

const Teams = () => {
  return (
    <AfterAuth>
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
    </AfterAuth>
  )
}

export default Teams
