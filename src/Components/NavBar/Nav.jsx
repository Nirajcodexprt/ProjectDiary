import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Fade,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from './Logo'
import { useNavigate } from 'react-router-dom'
import Card from '../Profile/Card'

export default function Nav({colorMode,toggleColorMode}) {
  const isDesktop = useBreakpointValue({
    base: false,
    sm: true,
  })
  const bg = useColorModeValue('white', '#1A202C')
  const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure()

  // const bg = useColorModeValue('white','#000')

  return (
    <Box
      as="nav"
      py={0}
      px={3}
      paddingLeft='0px'
      height={'70px'}
      color="on-accent"
      position={'fixed'}
      zIndex='100'
      width="100vw"
    >
      <Flex justify="space-between">
        {/* <Logo /> */}
        <img width='230px' style={{padding:'20px',borderRadius:'25px'}} src= {colorMode === "light" ? "/assets/light.png" :"/assets/WB.png"} />
        {isDesktop ? (
          <HStack spacing="4">
            <ButtonGroup variant="ghost-on-accent" spacing="1">
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
            </ButtonGroup>
            <Box onClick={onToggle} cursor='pointer' gap={'2'} alignItems={'center'} display={'flex'}>
            <Text>Christoph Winston</Text>
            <Avatar
              
              boxSize="10"
              cursor={'pointer'}
              name="Christoph Winston"
              src="https://tinyurl.com/yhkm2ek8"
            />
            </Box>
          </HStack>
        ) : (
          <IconButton
            variant="ghost-on-accent"
            icon={<FiMenu fontSize="1.25rem" />}
            aria-label="Open Menu"
          />
        )}
      </Flex>
      {isOpen && (
        <Box
          position={'absolute'}
          height="60vh"
          width={'20vw'}
          top={'80px'}
          zIndex='100'
          right="20px"
        >
          <Card />
        </Box>
      )}
    </Box>
  )
}
