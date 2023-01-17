import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AfterAuth from '../../HOC/AfterAuth'
import Tables from './table/Tables.jsx'

function Member() {
  return (
    <>
      <AfterAuth>
        <Heading>Members</Heading>
        <Box>
          <Tables />
        </Box>
      </AfterAuth>
    </>
  )
}

export default Member
