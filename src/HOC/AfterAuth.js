import {
    Box,
    Flex,
    Container,
    Stack,

} from '@chakra-ui/react'
import * as React from 'react'
import Sidebar from '../Components/Sidebar'
import Nav from '../Components/Navbar'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'


const AfterAuth = ({ children }) => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex as="section" bg="bg-canvas" direction={{ base: 'row', md: 'row', }} h={"100vh"} >
            <Nav toggleColorMode={toggleColorMode} colorMode={colorMode} />
            <Sidebar />
            <Box

                border='2px solid rgba(200,200,200,0.5)'
                overflowY="scroll"
                w={{
                    base: 'full',
                    md: '100%',
                    sm: '100%',
                }}
                my={3}
                p={4}
                borderRadius={4}
                mt="20"
                mx={3}
            >
                {children}
            </Box>
        </Flex>
    )
}
export default AfterAuth
