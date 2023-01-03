import { Icon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiHelpCircle,
  FiUsers,
  FiFile,
  FiSearch,
  FiSettings,
  FiUser,
} from 'react-icons/fi'
import Nav from '../NavBar/Nav'
import { Logo } from './Logo'
import { NavButton } from './NavButton'
import { UserProfile } from './UserProfile'
import { useLocation, useNavigate } from 'react-router-dom'
import Teams from './../teams/Teams'

const Dashboard = () => {
  let active = 'rgba(200,200,200,0.3)'
  let non_active = 'rgba(200,200,200,0)'
  let navigate = useNavigate()
  const [first, setfirst] = React.useState(true)
  const [arr, setArr] = React.useState([
    {
      label: 'Dashboard',
      icon: FiBarChart2,
      style: false,
    },
    {
      label: 'Teams',
      icon: FiUsers,
      style: false,
    },
    {
      label: 'Members',
      icon: FiUser,
      style: false,
    },
    {
      label: 'Projects',
      icon: FiFile,
      style: false,
    },
  ])
  const location = useLocation().pathname
  console.log(location)

  return (
    <Flex
      as="section"
      bg="bg-canvas"
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      <Nav />
      <Flex
        flex="1"
        bg="bg-surface"
        mt={10}
        height="100vh"
        position={'fixed'}
        overflowY={'scroll'}
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        minW={{
          base: 'full',
          sm: '200px',
        }}
        maxW={{
          base: 'full',
          sm: '230px',
        }}
        py={{
          base: '6',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '6',
        }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack
            spacing={{
              base: '5',
              sm: '6',
            }}
            shouldWrapChildren
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <Stack spacing="1">
              {arr.map((val) => {
                return (
                  <NavButton
                    onClick={() => {
                      navigate('/' + val.label.toLowerCase())
                    }}
                    label={val.label}
                    icon={val.icon}
                    aria-current="page"
                    style={{
                      border:
                        window.location.pathname ==
                        '/' + val.label.toLowerCase()
                          ? '1px solid grey'
                          : '',
                    }}
                  />
                )
              })}
            </Stack>
          </Stack>
          <Stack
            spacing={{
              base: '5',
              sm: '6',
            }}
          >
            <Stack spacing="1">
              <NavButton label="Help" icon={FiHelpCircle} />
              <NavButton label="Settings" icon={FiSettings} />
            </Stack>
            <Box bg="bg-subtle" px="4" py="5" borderRadius="lg"></Box>
          </Stack>
        </Stack>
      </Flex>
      <Box
        minh={'80vh'}
        style={{ border: '2px solid rgba(200,200,200,0.5)' }}
        w={{
          base: '85vw',
          md: '75vw',
          sm: '80vw',
        }}
        m={3}
        borderRadius={4}
        mt="20"
        marginLeft="250px"
      >
        <Teams />
      </Box>
    </Flex>
  )
}
export default Dashboard
