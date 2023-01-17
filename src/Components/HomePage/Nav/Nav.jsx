import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import * as React from 'react'
// import { Logo } from '../../NavBar/Logo'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()
  return (
    <HStack w={'100vw'} position={'fixed'} py={5} px={5}>
      {/* <Logo /> */}
      <Flex pos={'absolute'} gap={5} right={'50px'}>
        <IconButton
          onClick={toggleColorMode}
          icon={
            colorMode === 'dark' ? (
              <i class="bi bi-moon-fill"></i>
            ) : (
              <i class="bi bi-brightness-high-fill"></i>
            )
          }
          aria-label="Help Center"
        />
        <Button onClick={() => navigate('/signin')}>Sign In</Button>
        <Button onClick={() => navigate('/signup')}>Sign Up</Button>
      </Flex>
    </HStack>
  )
}
export default Nav
