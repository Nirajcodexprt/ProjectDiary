import React from 'react'
import { Icon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    FiBarChart2,
    FiHelpCircle,
    FiUsers,
    FiFile,
    FiSearch,
    FiSettings,
    FiUser,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { NavButton } from '../Pages/Dashboard/NavButton'

function Sidebar() {

    const [arr, setArr] = React.useState([
        {
            label: 'Dashboard',
            icon: FiBarChart2,
            style: true,
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

    const navigate = useNavigate()

    return (
        <>
            <Flex
                flex="1"
                bg="bg-surface"
                mt={12}
                overflow={'hidden'}

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
                    sm: '9',
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
                                        label={val.label}
                                        onClick={() => navigate('/' + val.label.toLowerCase())}
                                        icon={val.icon}
                                        aria-current="page"
                                        style={{
                                            border:
                                                window.location.pathname.includes('/' + val.label.toLowerCase())

                                                    ? '1px solid cadetblue'
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
        </>
    )
}

export default Sidebar