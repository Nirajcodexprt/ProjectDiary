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

export default function Nav() {
  const isDesktop = useBreakpointValue({
    base: false,
    sm: true,
  })
  const bg = useColorModeValue('white', '#1A202C')
  const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      as="nav"
      py={4}
      px={5}
      bg={bg}
      color="on-accent"
      position={'fixed'}
      width="100vw"
      zIndex={100}
    >
      <Flex justify="space-between">
        <Logo />
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
            <Text>Christoph Winston</Text>
            <Avatar
              onClick={onToggle}
              boxSize="10"
              cursor={'pointer'}
              name="Christoph Winston"
              src="https://tinyurl.com/yhkm2ek8"
            />
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
          pos={'absolute'}
          height="60vh"
          width={'20vw'}
          top={'80px'}
          zIndex={'overlay'}
          right="20px"
        >
          <Card />
        </Box>
      )}
    </Box>
  )
}
