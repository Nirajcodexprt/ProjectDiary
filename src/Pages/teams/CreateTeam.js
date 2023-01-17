import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  TableContainer,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import AfterAuth from '../../HOC/AfterAuth'
const CreateTeam = () => {
  return (
    <AfterAuth>
      <Box p={4}>
        <Box display={'flex'} justifyContent="space-between">
          <Heading>Create Team</Heading>
          <Button>Create Team</Button>
        </Box>
        <Box pl={10}>
          <FormControl py={5}>
            <FormLabel>Team Name</FormLabel>
            <Input type="text" width={'50%'} />
          </FormControl>
          <FormControl py={5}>
            <FormLabel>Team Password</FormLabel>
            <Input type="password" width={'50%'} />
          </FormControl>
          <FormLabel pt={10}>Select Team Member</FormLabel>
        </Box>
      </Box>
    </AfterAuth>
  )
}

export default CreateTeam
