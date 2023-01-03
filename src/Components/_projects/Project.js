import { Box, Button, ButtonGroup, Flex, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AfterAuth from '../../HOC/AfterAuth'

function Project() {

    const BtnColor = useColorModeValue('#fff', '#000')

    return (
        <>
            <AfterAuth>
                <HStack justifyContent={'space-between'}>
                    <Heading>Project</Heading>
                    <NavLink to={'/projects/createProject'}>
                        <Button bg={'cadetblue'} _hover='none' fontWeight='700' color={BtnColor}>Create Project</Button>
                    </NavLink>
                </HStack>
            </AfterAuth>
        </>
    )
}

export default Project
